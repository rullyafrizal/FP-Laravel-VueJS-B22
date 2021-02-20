<?php

namespace App;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;

class OTP_Code extends Model
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            try {
                if(!$model->getKey()){
                    $model->{$model->getKeyName()} = (string) Str::uuid();
                }
            } catch (UnsatisfiedDependencyException $e) {
                abort(500, $e->getMessage());
            }
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

    protected $table = 'otp_codes';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
