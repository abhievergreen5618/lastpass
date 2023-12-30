<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Folders;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class FoldersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
                    'foldername' => 'required',
                    'user_id' => 'required',
                ],
                [
                    'required' => 'Field is required',
                ]
            );

            // Check if validation fails
            if($validator->fails()) {
                return response()->json(['message' => 'Oops! Something went wrong with your submission.', 'errors' => $validator->errors()], 422);
            }

            // Create a new password record
            Folders::create([
                'user_id' => $user->id,
                'name' => $request['name'],
                'folder_id' => $request['folder'] ,
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
    public function destroy(string $id)
    {
        //
    }

    public function list()
    {
        $folders = Folders::get();
    
        if (!empty($folders)) {
            return response()->json(['folders' => $folders]);
        } else {
            // If no folders are found, return a message
            return response()->json(['folders' => ['No folders founded']]);
        }
    }
}
