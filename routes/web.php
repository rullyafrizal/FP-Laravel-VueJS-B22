<?php

Route::middleware(['auth', 'emailVerified'])->group(function () {
    Route::get('/route-1', 'PageController@route1');
});

Route::middleware(['auth', 'emailVerified', 'admin'])->group(function () {
    Route::get('/route-2', 'PageController@route2');
});

Route::view('/{any?}', 'app')->where('any', '.*');


