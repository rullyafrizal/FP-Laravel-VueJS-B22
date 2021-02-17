<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, SetupUUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function otp_code()
    {
        return $this->hasOne('App\OTP_Code');
    }

    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function emailVerified()
    {
        if($this->email_verified_at !== null)
        {
            return true;
        }
        return false;
    }

    public function isAdmin()
    {
        if($this->role_id == 0)
        {
            return true;
        }
        return false;
    }
}
