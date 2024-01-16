<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Month;

class MonthController extends Controller
{
    //
    public function index() {
        $month = Month::get();
    
        if (!empty($month)) {
            return response()->json(['month' => $month]);
        } else {
            // If no folders are found, return a message
            return response()->json(['month' => ['No month founded']]);
        }
    }
}
