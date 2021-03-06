<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use SetupUUID;

    protected $table = 'campaigns';
    protected $guarded = [];
}
