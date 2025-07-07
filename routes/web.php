<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing/home');
})->name('home');

// contoh layouts
Route::get('/layouts-01', function () {
    return Inertia::render('landing/layouts-1');
})->name('layouts-01');
Route::get('/layouts-02', function () {
    return Inertia::render('landing/layouts-2');
})->name('layouts-02');
Route::get('/layouts-03', function () {
    return Inertia::render('landing/layouts-3');
})->name('layouts-03');
Route::get('/layouts-04', function () {
    return Inertia::render('landing/layouts-4');
})->name('layouts-04');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';