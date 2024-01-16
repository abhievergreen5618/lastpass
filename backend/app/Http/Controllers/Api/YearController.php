<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Year;

class YearController extends Controller
{
    //
    public function index() {
        $year = Year::get();
    
        if (!empty($year)) {
            return response()->json(['year' => $year]);
        } else {
            // If no folders are found, return a message
            return response()->json(['year' => ['No year founded']]);
        }
    }

}
