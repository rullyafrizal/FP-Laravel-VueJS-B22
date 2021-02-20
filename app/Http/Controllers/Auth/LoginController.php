<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);


        if(!$token = auth()->attempt($request->only('email', 'password')))
        {
            return response()->json([
                'response code' => '01',
                'response_message' => 'Email/Password Salah'
            ], 401);
        }

        $user = User::where('email', request('email'))->first()->toArray();

        return response()->json([
            'response_code' => '00',
            'response_message' => 'User berhasil login',
            'data' => [
                'token' => $token,
                'user' => $user
            ]
        ]);
    }
}
