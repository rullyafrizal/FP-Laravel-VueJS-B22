<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\OTP_Code;
use App\User;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request)
    {
        try {
            $kodeOTP = OTP_Code::where('otp', request('otp'))->first();

            if (!$kodeOTP) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Kode OTP Salah'
                ], 200);
            }

            $currentTime = Carbon::now()->toTimeString();

            if ($currentTime > $kodeOTP->valid_until) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Kode OTP sudah tidak valid, silahkan generate ulang',
                ], 200);
            }

            $user = User::find($kodeOTP->user_id);
            $user->email_verified_at = Carbon::now();
            $user->save();

            $kodeOTP->delete();
            $data['user'] = $user;

            return response()->json([
                'response_code' => '00',
                'response_message' => 'verifikasi berhasil',
                'data' => [
                    'user' => $user->toArray(),
                ]
            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }



    }
}
