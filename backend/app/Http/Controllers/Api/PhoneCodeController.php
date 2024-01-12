<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\PhoneCode;

class PhoneCodeController extends Controller
{
    //
    public function index() {
        $phonecode = PhoneCode::get();
    
        if (!empty($phonecode)) {
            return response()->json(['phonecode' => $phonecode]);
        } else {
            // If no folders are found, return a message
            return response()->json(['phonecode' => ['No phonecode founded']]);
        }
    }
}
