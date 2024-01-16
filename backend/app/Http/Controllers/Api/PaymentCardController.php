<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
use App\Models\PaymentCard;

class PaymentCardController extends Controller
{
    //

    public function store(Request $request)
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();

            // Create a new password record
            PaymentCard::create([
                'user_id' => $user->id,
                'name' => $request['name'] ?? 'Personal info',
                'folder' => $request['folder'] ?? 'Uncategorized',
                'cardholder' => $request['cardholder'],
                'expmonth' => $request['expmonth'], 
                'expyear' => $request['expyear'],
                'number' => $request['number'],
                'cvvno' => $request['cvvno'],
                'startdate' => $request['startdate'],
                'type' => $request['type'],
                'startyear' => $request['startyear'],
                'notes' => $request['notes'] || null,
            ]);

            // Optionally, you can return a success response
            return response()->json(['message' => 'Payment Card added successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error creating password: ' . $e->getMessage());
            // If an exception occurs, return an error response
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}