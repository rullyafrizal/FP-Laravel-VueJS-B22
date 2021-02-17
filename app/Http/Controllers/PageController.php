<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function route1()
    {
        return 'berhasil masuk route1, email anda telah terverifikasi';
    }

    public function route2()
    {
        return 'berhasil masuk route2, anda adalah admin dan email anda telah terverifikasi';
    }
}
