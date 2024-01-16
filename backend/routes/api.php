<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FoldersController;
use App\Http\Controllers\Api\PasswordController;
use App\Http\Controllers\Api\RecentController;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\PhoneCodeController;
use App\Http\Controllers\Api\MonthController;
use App\Http\Controllers\Api\YearController;
use App\Http\Controllers\Api\PaymentCardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:api'])->group(function () {
    Route::post('/get-user', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/savepassword', [PasswordController::class, 'store']);
    Route::post('/editpassword/{id}', [PasswordController::class, 'edit']);
    Route::post('/getpasswordlist', [PasswordController::class, 'index']);
    Route::post('/deletepassword/{id}', [PasswordController::class, 'destroy']);
    Route::post('/alertdata', [PasswordController::class, 'alertdata']);
    // Route::post('/recentpasswordlist', [PasswordController::class, 'recentpasswordlist']);

    Route::post('/getfolderslist', [FoldersController::class, 'list']);
    Route::post('/createfolder', [FoldersController::class, 'store']);

    Route::post('/recentuseddata', [RecentController::class, 'recentuseddata']);
    Route::post('/getrecentdata', [RecentController::class, 'index']);
    
    Route::post('/saveaddress', [AddressController::class, 'store']);
    Route::post('/getaddresslist', [AddressController::class, 'index']);

    Route::post('/savepayment', [PaymentCardController::class, 'store']);
    Route::post('/getpaymentcardlist', [PaymentCardController::class, 'index']);

    //------------------SEEDERS START-------------------------

    Route::post('/getcountrylist', [CountryController::class, 'index']);
    
    Route::post('/getphonecodelist', [PhoneCodeController::class, 'index']);
    
    Route::post('/getmonth', [MonthController::class, 'index']);

    Route::post('/getyear', [YearController::class, 'index']);

    //-------------------SEEDERS END----------------------------
});
 