<?php

namespace App\Traits;

use App\Role;
use Illuminate\Support\Str;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;

trait SetupUUID
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            try {
                if(!$model->getKey()){
                    $model->{$model->getKeyName()} = (string) Str::uuid();
                    $model->role_id = Role::where('role_name', 'user')->first()->id;
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
}
