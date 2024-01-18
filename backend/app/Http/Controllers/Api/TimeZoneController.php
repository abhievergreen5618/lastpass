<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\TimeZone;


class TimeZoneController extends Controller
{
    //
    public function index() {
        $timezone = TimeZone::get();
    
        if (!empty($timezone)) {
            return response()->json(['timezone' => $timezone]);
        } else {
            // If no folders are found, return a message
            return response()->json(['timezone' => ['No timezone founded']]);
        }
    }
}
