<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Illuminate\Support\Facades\Auth;

class EmailVerifiedMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = User::where('email', request('email'))->first();
        if($user->email_verified_at !== null){
            return $next($request);
        }
        return response()->json([
            'response_code' => '01',
            'response_message' => 'Email belum terverifikasi, silahkan verifikasi terlebih dahulu'
        ]);
    }
}
