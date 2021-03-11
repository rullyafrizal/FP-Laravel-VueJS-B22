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
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'address' => 'required',
            'occupation' => 'required',
            'phone' => 'required'
        ]);

        try {
            $filePhoto = $request->file('photo');
            $nama_file = "pp_" . $request->user()->id . "." . $filePhoto->getClientOriginalExtension();
            $folder = '/user_pp/';
            $path_file = $folder . $nama_file;
            $filePhoto->move(public_path($folder), $nama_file);



            $user = $request->user();
            $user->name = request('name');
            $user->address = request('address');
            $user->occupation = request('occupation');
            $user->phone = request('phone');
            $user->photo = $path_file;
            $user->save();

            $data['profile'] = $user;

            return response()->json([
                'response_code' => '00',
                'response_message' => 'Profile berhasil diperbarui',
                'data' => $data,

            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
