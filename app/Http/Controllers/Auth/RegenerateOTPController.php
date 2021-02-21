<?php

namespace App\Http\Controllers\Auth;

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

        function generateOTP()
        {
            $generator = '1234567890';
            $result = "";

            for ($i = 1; $i <= 6; $i++) {
                $result .= substr($generator, (rand() % (strlen($generator))), 1);
            }
            return $result;
        }

        try {
            $email = User::where('email', request('email'))->first();

            if (!$email) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Alamat Email Salah'
                ], 200);
            }

            $user = $email->toArray();

            $user_id = User::with('otp_code')->where('email', request('email'))
                ->firstOrFail()
                ->otp_code()
                ->firstOrFail()
                ->user_id;

            OTP_Code::where('user_id', $user_id)->update([
                'user_id' => User::where('email', request('email'))->first()->id,
                'otp' => generateOTP(),
                'valid_until' => Carbon::now()->addMinutes(5),
            ]);

            return response()->json([
                'response_code' => '00',
                'response_message' => 'OTP baru telah terkirim, silahkan cek email',
                'data' => [
                    'user' => $user
                ]
            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
