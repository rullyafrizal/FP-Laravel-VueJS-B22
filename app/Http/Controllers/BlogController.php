<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function random($count)
    {
        $blogs = Blog::select('*')->inRandomOrder()->limit($count)->get();

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Data blogs berhasil ditampilkan',
            'data' => $data
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'description' => 'required|min:50|max:1000',
            'image' => 'required|mimes:jpg,jpeg,png'
        ]);

        $blogs = Blog::create([
            'title' => request('title'),
            'description' => request('description'),
        ]);

        if($request->hasFile('image'))
        {
            $img = $request->file('image');
            $img_ext = $img->getClientOriginalExtension();
            $img_name = $blogs->id . '.' . $img_ext;
            $img_folder = '/photos/blogs/';
            $img_location = $img_folder . $img_name;

            try{
                $img->move(public_path($img_folder), $img_name);
                $blogs->update([
                    'image' => $img_location
                ]);

            } catch (\Exception $e){
                $data['blogs'] = $blogs;
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'Photo gagal diupload',
                    'data' => $data
                ]);
            }
        }
    }
}
