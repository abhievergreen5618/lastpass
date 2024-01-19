<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Address;
use App\Models\User;
use App\Models\AddressFavorite;
use Illuminate\Support\Facades\Log;

class AddressFavoriteController extends Controller
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
            $existingFavoriteData = AddressFavorite::where('id', $request->id)
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
                $passwordData = Address::where('id', $request->id)->first();
    
                if ($passwordData) {
                    $favoriteData = [
                        'user_id' => $user->id,
                        'name' => $passwordData->name,
                        'folder' => (string) $passwordData->folder,
                        'title' => $passwordData->title,
                        'firstname' => $passwordData->firstname,
                        'middlename' => $passwordData->middlename,
                        'lastname' => $passwordData->lastname,
                        'username' => $passwordData->username,
                        'gender' => $passwordData->gender,
                        'birthday' => $passwordData->birthday,
                        'company' => $passwordData->company,
                        'address1' => $passwordData->address1,
                        'address2' => $passwordData->address2,
                        'address3' => $passwordData->addres3,
                        'city' => $passwordData->city,
                        'county' => $passwordData->county,
                        'state' => $passwordData->state,
                        'postalcode' => $passwordData->postalcode,
                        'country' => $passwordData->country,
                        'timezone' => $passwordData->timezone,
                        'email' => $passwordData->email,
                        'phone' => $passwordData->phone,
                        'eveningphone' => $passwordData->eveningphone,
                        'mobilephone' => $passwordData->mobilephone,
                        'fax' => $passwordData->fax,
                        'notes' => $passwordData->notes,
                        'phoneno' => $passwordData->phoneno,
                        'street' => $passwordData->street,
                        'apt' => $passwordData->apt,
                    ];
    
                    AddressFavorite::create($favoriteData);
    
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
