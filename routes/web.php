<?php

use Illuminate\Support\Facades\Route;

// Since we are building a SPA we want to direct all our traffic to our root react entry point.
Route::any('{all}', function () {
    return view('welcome');
})
    ->where(['all' => '.*']);
