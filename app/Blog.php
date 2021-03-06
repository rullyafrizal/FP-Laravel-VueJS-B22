<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use SetupUUID;

    protected $table = 'blogs';
    protected $guarded = [];
}
