<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use SetupUUID;
    protected $table = 'roles';
    protected $guarded = [];

    public function user()
    {
        return $this->hasMany('App\User');
    }
}
