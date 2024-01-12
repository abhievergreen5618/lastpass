<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContryController extends Controller
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
