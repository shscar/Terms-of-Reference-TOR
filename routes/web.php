<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing/home');
})->name('home');


Route::get('/welcome', function () {
    return view('welcome');
});