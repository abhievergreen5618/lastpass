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

class RecentController extends Controller
{
    //

    
    public function recentuseddata(Request $request)
    {
        try {
            $request->validate([
                'url' => 'required|url',
            ]);
    
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                Log::error('User not authenticated with the provided token.');
                return response()->json(['error' => 'user not defined'], 401);
            }
    
            // Check if the URL already exists in the recent table
            $existingRecentData = Recent::where('url', $request->url)
                ->where('user_id', $user->id)
                ->first();
    
            if ($existingRecentData) {
                // If the URL exists, update the existing record
                $existingRecentData->update(['updated_at' => now()]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'URL found in the database. Updated in Recent.',
                    'url' => $existingRecentData,
                ]);
            } else {
                // If the URL does not exist, create a new record
                $passwordData = Password::where('url', $request->url)->first();
    
                if ($passwordData) {
                    $recentData = [
                        'user_id' => $user->id,
                        'name' => $passwordData->name,
                        'folder_id' => (string) $passwordData->folder_id,
                        'url' => $passwordData->url,
                        'username' => $passwordData->username,
                        'password' => $passwordData->password,
                        'notes' => $passwordData->notes,
                    ];
    
                    Recent::create($recentData);
    
                    return response()->json([
                        'status' => 'success',
                        'message' => 'URL found in the database. Added to Recent.',
                        'url' => $recentData,
                    ]);
                } else {
                    return response()->json([
                        'status' => 'error',
                        'message' => 'URL not found in the database.',
                    ]);
                }
            }
    
        } catch (\Exception $e) {
            Log::error('Error creating/updating recent data: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
    

    public function index()
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();
            $recentdata = Recent::where('user_id',$user->id)->latest('lastused', 'desc')->get();

            if ($recentdata->isNotEmpty()) {
                return response()->json(['recentdata' => $recentdata]);
            } else {
                // If no folders are found, return a message
                return response()->json(['recentdata' => []]);
            }
        } catch (\Exception $e) {
            Log::error('Error getting recentdata: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    

}

