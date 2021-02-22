<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UpdatePasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        try {
            $email = User::where('email', request('email'))->first();

            if (!$email) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Alamat Email Salah'
                ], 200);
            }

            User::updateOrCreate(
                ['email' => request('email')],
                ['password' => bcrypt(request('password'))]
            );

            $data['user'] = $email;

            return response()->json([
                'response_code' => '00',
                'response_message' => 'Password berhasil diubah',
                'data' => $data,

            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
