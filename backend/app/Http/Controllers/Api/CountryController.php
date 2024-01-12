<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Country;

class CountryController extends Controller
{
    //
    public function index() {
        $countries = Country::get();
    
        if (!empty($countries)) {
            return response()->json(['countries' => $countries]);
        } else {
            // If no folders are found, return a message
            return response()->json(['countries' => ['No country founded']]);
        }
    }
}
