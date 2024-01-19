<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            $existingRecentData = Password::where('id', $request->id)
                ->where('user_id', $user->id)
                ->first();
    
            if ($existingRecentData) {
                // If the URL exists, update the existing record
                $existingRecentData->update(['updated_at' => now()]);
                return response()->json([
                    'status' => 'success',
                    'message' => 'ID found in the database. Updated in Favorite.',
                    'id' => $existingRecentData,
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
                        'id' => $recentData,
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
}
