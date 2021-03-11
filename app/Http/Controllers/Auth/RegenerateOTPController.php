<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\OTP_Code;
use App\User;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RegenerateOTPController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        try {
            $user = User::where('email', request('email'))->first();

            if (!$user) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Alamat Email Salah'
                ], 200);
            }

            if($user->email_verified_at !== null){
                return response()->json([
                   'response_code' => '01',
                   'response_message' => 'Gagal, Email Sudah Terverifikasi'
                ]);
            }

            $data['user'] = $user;

            $user_id = User::with('otp_code')->where('email', request('email'))
                ->firstOrFail()
                ->otp_code()
                ->firstOrFail();

            OTP_Code::where('user_id', $user_id->user_id)->update([
                'user_id' => $user->id,
                'otp' => User::generateOTP(),
                'valid_until' => Carbon::now()->addMinutes(5),
            ]);

            $otp = OTP_Code::where('user_id', $user->id)->first();;

            event(new UserRegisteredEvent($user, $otp));

            return response()->json([
                'response_code' => '00',
                'response_message' => 'OTP baru telah terkirim, silahkan cek email',
                'data' => $data
            ]);

        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
