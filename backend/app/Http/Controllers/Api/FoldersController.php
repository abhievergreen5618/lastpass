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

            Log::info('Authenticated User ID: ' . $user->id);
            // Validate the request data
            $validator = Validator::make(
                $request->all(),
                [
                    'folder_name' => 'required',
                ],
                [
                    'required' => 'Field is required',
                ]
            );

            // Check if validation fails
            if($validator->fails()) {
                return response()->json(['message' => 'Oops! Something went wrong with your submission.', 'errors' => $validator->errors()], 422);
            }

            // Create a new folder record
            Folders::create([
                'user_id' => $user->id,
                'folder_name' => $request['folder_name'],
                'parent' => $request['parent'],
                'sub_parent' => $request['sub_parent'],
            ]);

            // Optionally, you can return a success response
            return response()->json(['message' => 'Folder created successfully'], 200);
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
