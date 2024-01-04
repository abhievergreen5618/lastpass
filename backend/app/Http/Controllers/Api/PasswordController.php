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

    public function recentpasswordlist()
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();
            $passwords = Password::where('user_id',$user->id)->orderBy('lastused', 'desc')->get();

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
    // public function destroy(string $id)
    // {
    //     //
    //     try {
    //         // Attempt to authenticate the user based on the JWT token in the request header
    //         $user = JWTAuth::parseToken()->authenticate();
    //         $passwords = Password::where('id',$id)->delete();

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

    use Illuminate\Validation\Rule;

// ...

public function destroy(string $id)
{
    try {
        // Validate the ID parameter
        $validator = Validator::make(
            ['id' => $id],
            ['id' => [
                'required',
                Rule::exists('passwords', 'id')->where(function ($query) {
                    // Add a condition to check if the password belongs to the authenticated user
                    $user = JWTAuth::parseToken()->authenticate();
                    $query->where('user_id', $user->id);
                }),
            ]],
            ['required' => 'ID is required', 'exists' => 'Invalid ID']
        );

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['message' => 'Invalid ID', 'errors' => $validator->errors()], 422);
        }

        // If validation passes, proceed to delete the password
        // Attempt to authenticate the user based on the JWT token in the request header
        $user = JWTAuth::parseToken()->authenticate();
        
        // Find the password by ID and user ID
        $password = Password::where('id', $id)->where('user_id', $user->id)->first();

        if (!$password) {
            // If the password is not found, return a message
            return response()->json(['message' => 'Password not found'], 404);
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
