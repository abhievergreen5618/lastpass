<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
use App\Models\Address;

class AddressController extends Controller
{
    //
    public function store(Request $request)
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();

            // Create a new password record
            Address::create([
                'user_id' => $user->id,
                'name' => $request['name'] ?? 'Contact info',
                'folder' => $request['folder'] ?? 'Uncategorized',
                'title' => $request['title'],
                'firstname' => $request['firstname'],
                'middlename' => $request['middlename'],
                'lastname' => $request['lastname'],
                'username' => $request['username'],
                'gender' => $request['gender'],
                'birthday' => $request['birthday'],
                'company' => $request['company'],
                'address1' => $request['address1'],
                'address2' => $request['address2'],
                'address3' => $request['address3'],
                'city' => $request['city'],
                'county' => $request['county'],
                'state' => $request['state'],
                'postalcode' => $request['postalcode'],
                'country' => $request['country'],
                'timezone' => $request['timezone'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'eveningphone' => $request['eveningphone'],
                'mobilephone' => $request['mobilephone'],
                'fax' => $request['fax'],
                'notes' => $request['notes'] || null,
            ]);

            // Optionally, you can return a success response
            return response()->json(['message' => 'Address added successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error creating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    public function index() 
    {
        $address = Address::get();
    
        if (!empty($address)) {
            return response()->json(['address' => $address]);
        } else {
            // If no folders are found, return a message
            return response()->json(['address' => ['No address founded']]);
        }
    }

    
    public function destroy(string $id)
    {
        try {
       
            $user = JWTAuth::parseToken()->authenticate();
            $password = Address::where('id', $id)->first();
            $password->delete();

            return response()->json(['message' => 'Address deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting address: ' . $e->getMessage());
            // If an exception occurs, return an error response1
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }


}
