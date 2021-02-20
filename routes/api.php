<?php


Route::namespace('Auth')->prefix('auth')->group(function () {
    Route::post('/register', 'RegisterController');
    Route::post('/login', 'LoginController')->middleware('emailVerified');
    Route::post('/logout', 'LogoutController');
    Route::post('/verification', 'VerificationController');
    Route::post('/regenerate-otp', 'RegenerateOTPController');
    Route::post('/update-password', 'UpdatePasswordController')->middleware('emailVerified');
});


Route::group(['prefix' => 'profile', 'middleware' => ['auth']], function () {
    Route::get('/get-profile', 'UserController');
    Route::post('/update-profile', 'UpdateProfileController');
});

