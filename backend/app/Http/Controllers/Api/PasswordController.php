<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Password;
use App\Models\User;
use App\Models\Recent;
use Illuminate\Support\Facades\Log;


class PasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index()
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();
            $passwords = Password::where('user_id',$user->id)->get();

            if ($passwords->isNotEmpty()) {
                return response()->json(['passwords' => $passwords]);
            } else {
                // If no folders are found, return a message
                return response()->json(['passwords' => []]);
            }
        } catch (\Exception $e) {
            Log::error('Error creating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    
    public function alertdata()
    {
        $user = JWTAuth::parseToken()->authenticate();

        if (!$user) {
            Log::error('User not authenticated with the provided token.');
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        // Get the latest password
        $latestPassword = Password::latest()->first();
    
        $duplicateFound = Password::where('username', $latestPassword->username)
        ->where('password', $latestPassword->password)
        ->where('id', '!=', $latestPassword->id)
        ->exists();
    
        if ($duplicateFound) {
            // Match found, return the latest password data
            return response()->json(['passwords' => $latestPassword]);
        } else {
            return response()->json(['message' => 'Match not found' ]);
        }
    }
    

    // public function recentpasswordlist()
    // {
    //     try {
    //         // Attempt to authenticate the user based on the JWT token in the request header
    //         $user = JWTAuth::parseToken()->authenticate();
    //         $passwords = Password::where('user_id',$user->id)->latest('lastused', 'desc')->get()->first();

    //         if ($passwords->isNotEmpty()) {
    //             return response()->json(['passwords' => $passwords]);
    //         } else {
    //             // If no folders are found, return a message
    //             return response()->json(['passwords' => []]);
    //         }
    //     } catch (\Exception $e) {
    //         Log::error('Error creating password: ' . $e->getMessage());
    //         // If an exception occurs, return an error response
    //         return response()->json(['error' => 'Unauthorized'], 401);
    //     }
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();

            // Validate the request data
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required', // Assuming folder_id is required
                    'url' => 'required',
                    'username' => 'required',
                    'password' => 'required',
                    'notes' => 'max:255',
                ],
                [
                    'required' => 'Field is required',
                ]
            );

            // Check if validation fails
            if ($validator->fails()) {
                return response()->json(['message' => 'Oops! Something went wrong with your submission.', 'errors' => $validator->errors()], 422);
            }

            // Create a new password record
            Password::create([
                'user_id' => $user->id,
                'name' => $request['name'],
                'folder_id' => $request['folder'] ?? 'Uncategorized',
                'url' => $request['url'],
                'username' => $request['username'],
                'password' => $request['password'],
                'notes' => $request['notes'] || '',
            ]);

            // Optionally, you can return a success response
            return response()->json(['message' => 'Password created successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error creating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        try 
        {
            $user = JWTAuth::parseToken()->authenticate();

            $password = Password::where('id',$id)->first();

            if (!$password) {
                return response()->json(['message' => 'Password not found'], 404);
            }
    
            $password->update([
                'name' => $request['name'],
                'folder_id' => $request['folder'],
                'url' => $request['url'],
                'username' => $request['username'],
                'password' => $request['password'],
                'notes' => $request['notes'] ?? '',
            ]);
    
            return response()->json(['message' => 'Password updated successfully'], 200);
        }
        catch (\Exception $e) {
            Log::error('Error updating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' =>  $e->getMessage()], 401);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */


public function destroy(string $id)
{
    try {
       
        $user = JWTAuth::parseToken()->authenticate();
        $password = Password::where('id', $id)->first();
        $password->delete();

        return response()->json(['message' => 'Password deleted successfully'], 200);
    } catch (\Exception $e) {
        Log::error('Error deleting password: ' . $e->getMessage());
        // If an exception occurs, return an error response1
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}


}
