<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\OTP_Code;

use App\User;
use Carbon\Carbon;
use Illuminate\Database\QueryException;

class RegisterController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param RegisterRequest $request
     * @param $identifier
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(RegisterRequest $request, User $user)
    {


        try {
            User::create([
                'name' => request('name'),
                'email' => request('email'),
            ]);

            $user = User::where('email', request('email'))->first();

            OTP_Code::create([
                'user_id' => $user->id,
                'otp' => User::generateOTP(),
                'valid_until' => Carbon::now()->addMinutes(5),
            ]);

            $otp = OTP_Code::where('user_id', $user->id)->first();

            event(new UserRegisteredEvent($user, $otp));

            $data['user'] = $user;

            return response()->json([
                'response_code' => '00',
                'response_message' => 'OTP terkirim, silahkan cek email',
                'data' => $data,
            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
