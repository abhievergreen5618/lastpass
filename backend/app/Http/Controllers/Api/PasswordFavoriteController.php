<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Password;
use App\Models\User;
use App\Models\PasswordFavorite;
use Illuminate\Support\Facades\Log;

class PasswordFavoriteController extends Controller
{
    //
   public function favoriteitems(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required',
            ]);
    
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user) {
                Log::error('User not authenticated with the provided token.');
                return response()->json(['error' => 'user not defined'], 401);
            }
    
            // Check if the id already exists in the recent table
            $existingFavoriteData = PasswordFavorite::where('id', $request->id)
                ->where('user_id', $user->id)
                ->first();
    
            if ($existingFavoriteData) {
                // If the URL exists, update the existing record
                $existingFavoriteData->update(['updated_at' => now()]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'ID found in the database. Updated in Favorite.',
                    'id' => $existingFavoriteData,
                ]);
            } else {
                // If the ID does not exist, create a new record
                $passwordData = Password::where('id', $request->id)->first();
    
                if ($passwordData) {
                    $favoriteData = [
                        'user_id' => $user->id,
                        'name' => $passwordData->name,
                        'folder_id' => (string) $passwordData->folder_id,
                        'url' => $passwordData->url,
                        'username' => $passwordData->username,
                        'password' => $passwordData->password,
                        'notes' => $passwordData->notes,
                    ];
    
                    PasswordFavorite::create($favoriteData);
    
                    return response()->json([
                        'status' => 'success',
                        'message' => 'ID found in the database. Added to Favorite.',
                        'id' => $favoriteData,
                    ]);
                } else {
                    return response()->json([
                        'status' => 'error',
                        'message' => 'ID not found in the database.',
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
            $favoritedata = PasswordFavorite::where('user_id',$user->id)->latest('updated_at', 'desc')->get();

            if ($favoritedata->isNotEmpty()) {
                return response()->json(['favoritedata' => $favoritedata]);
            } else {
                // If no folders are found, return a message
                return response()->json(['favoritedata' => []]);
            }
        } catch (\Exception $e) {
            Log::error('Error getting favoritedata: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    

}
