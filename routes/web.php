<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\ServiceController;
use App\Models\Articles;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('dashboard', '/dashboard');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');

    // Route::get('services', [ServiceController::class, 'index'])->name('dashboard/services');
    Route::get('articles', [ArticlesController::class, 'index'])->name('dashboard/articles');


    // Route::get('service', function () {
    //     return Inertia::render('service');
    // })->name('service');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
