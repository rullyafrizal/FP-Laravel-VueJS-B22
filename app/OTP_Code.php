<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Database\Eloquent\Model;

class OTP_Code extends Model
{
    use SetupUUID;

    protected $table = 'otp_codes';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
