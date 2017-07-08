<?php


Route::get('/', function () {
    return view('base');
});


Route::post('auth', 'UserController@checkAuth');
Route::resource('user', 'UserController');
Route::resource('page', 'PageController');

