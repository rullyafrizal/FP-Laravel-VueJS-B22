<?php

namespace App;

use App\Traits\SetupUUID;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SetupUUID;

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

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
        if ($this->email_verified_at !== null) {
            return true;
        }
        return false;
    }

    public function isAdmin()
    {
        //query uuid dari admin
        $admin = Role::where('role_name', 'admin')->first()->id;

        //logika midleware
        if ($this->role_id == $admin) {
            return true;
        }
        return false;
    }

    public static function generateOTP()
    {
        $generator = '1234567890';
        $result = "";

        for ($i = 1; $i <= 6; $i++) {
            $result .= substr($generator, (rand() % (strlen($generator))), 1);
        }
        return $result;
    }

}
