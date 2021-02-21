<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UpdateProfileController extends Controller
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
            'name' => 'required|string',
            'photo' => 'required|file|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        try {
            $tujuan_upload = 'user_pp';
            $filePhoto = $request->file('photo');
            $nama_file = "pp_" . $request->user()->id . "." . $filePhoto->getClientOriginalExtension();
            $filePhoto->move($tujuan_upload, $nama_file);


            $user = $request->user();
            $user->name = request('name');
            $user->photo = $nama_file;
            $user->save();

            return response()->json([
                'response_code' => '00',
                'response_message' => 'Profile berhasil diperbarui',
                'data' => [
                    'profile' => $request->user()->toArray(),
                ]
            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
