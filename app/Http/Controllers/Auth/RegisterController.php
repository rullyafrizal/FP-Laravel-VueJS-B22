<?php

namespace App\Http\Controllers\Auth;

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

        function generateOTP(){
            $generator = '1234567890';
            $result = "";

            for ($i = 1; $i <= 6; $i++) {
                $result .= substr($generator, (rand()%(strlen($generator))), 1);
            }
            return $result;
        }


        try
        {
            User::create([
                'name' => request('name'),
                'email' => request('email'),
            ]);

            $user = User::where('email', request('email'))->first();

            OTP_Code::create([
                'user_id' => $user->id,
                'otp' => generateOTP(),
                'valid_until' => Carbon::now()->addMinutes(5),
            ]);

            return response()->json([
                'response_code' => '00',
                'response_message' => 'OTP terkirim, silahkan cek email',
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
