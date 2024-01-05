<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Password;
use App\Models\User;
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

    public function recentuseddata(Request $request)
    {
        try {
        $request->validate([
            'url' => 'required|url',
        ]);

        $user = JWTAuth::parseToken()->authenticate();
        $url = Password::where('url', $request->url)->first();

        if ($url) {
            return response()->json([
                'status' => 'success',
                'message' => 'URL found in the database.',
                'url' => $url->toArray(),
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'URL not found in the database.',
            ]);
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
        
        // Get the latest password
        $latestPassword = Password::latest()->first();
    
        $duplicateFound = Password::where('username', $latestPassword->username)
        ->where('password', $latestPassword->password)
        ->where('id', '!=', $latestPassword->id)
        ->exists();
    
        if ($duplicateFound) {
            // Match found, return the latest password data
            return response()->json(['passwords' => $latestPassword]);
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
                    'folder' => 'required',
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
                'folder_id' => $request['folder'],
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
    public function edit(string $id)
    {
        //
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


public function destroy(Request $request, string $id)
{
    try {
        $request->validate([
            'id' => 'required',
        ]);

        $user = JWTAuth::parseToken()->authenticate();
        $password = Password::where('id', $id)->first();

        if ($password->user_id !== $user->id) {
            // If the user is not the owner, return an unauthorized response
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Delete the password
        $password->delete();

        // Optionally, you can return a success response
        return response()->json(['message' => 'Password deleted successfully'], 200);
    } catch (\Exception $e) {
        Log::error('Error deleting password: ' . $e->getMessage());
        // If an exception occurs, return an error response
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}


}
