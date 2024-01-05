<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FoldersController;
use App\Http\Controllers\Api\PasswordController;

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
    Route::post('/getpasswordlist', [PasswordController::class, 'index']);
    Route::post('/getfolderslist', [FoldersController::class, 'list']);
    Route::post('/createfolder', [FoldersController::class, 'store']);
    Route::post('/recentpasswordlist', [PasswordController::class, 'recentpasswordlist']);
    Route::post('/deletepassword/{id}', [PasswordController::class, 'destroy']);
    Route::post('/recentuseddata', [PasswordController::class, 'recentuseddata']);
});
