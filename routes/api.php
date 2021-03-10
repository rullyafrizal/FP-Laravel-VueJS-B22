<?php

Route::namespace('Auth')->prefix('auth')->group(function () {
    Route::post('/register', 'RegisterController');
    Route::post('/login', 'LoginController');//->middleware('emailVerified');
    Route::post('/logout', 'LogoutController')->middleware('auth:api');
    Route::post('/verification', 'VerificationController');
    Route::post('/regenerate-otp', 'RegenerateOTPController');
    Route::post('/update-password', 'UpdatePasswordController')->middleware('emailVerified');
    Route::post('/check-token', 'CheckTokenController')->middleware('auth:api');

    //Socialite
    Route::get('/social/{provider}', 'SocialiteController@redirectToProvider');
    Route::get('/social/{provider}/callback', 'SocialiteController@handleProviderCallback');
});


Route::group(['prefix' => 'profile', 'middleware' => ['auth:api']], function () {
    Route::get('/get-profile', 'UserController');
    Route::post('/update-profile', 'UpdateProfileController');
});


Route::group(['middleware' => ['api', 'emailVerified', 'auth:api']], function(){
    Route::get('profile/show', 'ProfileController@show');
    Route::post('profile/update', 'ProfileController@update');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'campaign',
], function(){
    Route::get('random/{count}', 'CampaignController@random');
    Route::post('store', 'CampaignController@store');
    Route::get('/', 'CampaignController@index');
    Route::get('/{id}', 'CampaignController@detail');
    Route::get('/search/{keyword}', 'CampaignController@search');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'blog',
], function(){
    Route::get('random/{count}', 'BlogController@random');
    Route::post('store', 'BlogController@store');
});

