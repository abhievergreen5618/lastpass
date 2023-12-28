<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ],
            [
                'required' => 'Field is required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['message' => "Oops! Something went wrong with your submission.", 'errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        try {
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Error creating token'], 500);
        }

        return response()->json([
            'message' => 'Registered successfully',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ], [
            'required' => 'Field is required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Oops! Something went wrong with your submission.', 'errors' => $validator->errors()], 422);
        }

        // Assuming you're trying to log in, not register
        $credentials = $request->only('email', 'password');

        try {
            // Attempt to verify the credentials and create a token
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'message' => 'Authentication failed. Please check your credentials.',
                    'errors' => ['email' => ['Invalid email or password']],
                ], 422);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Error creating token'], 500);
        }

        // Get the authenticated user
        $user = Auth::user();

        return response()->json([
            'message' => 'Login Successful',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function getUser(Request $request)
    {
        try {
            // Attempt to authenticate the user based on the JWT token in the request header
            $user = JWTAuth::parseToken()->authenticate();

            // If authentication is successful, return the user data
            return response()->json(['user' => $user], 200);
        } catch (\Exception $e) {
            // If an exception occurs, return an error response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout()
    {
        Auth::logout();

        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Logout Successfully']);
    }
}
