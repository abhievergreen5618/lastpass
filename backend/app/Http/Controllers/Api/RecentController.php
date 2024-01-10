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
    
        } catch (\Exception $e) {
            Log::error('Error creating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
    

}

