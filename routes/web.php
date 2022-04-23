<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('lk',  [App\Http\Controllers\LKController::class, 'index'])->name('lk');

Route::get('game',  [App\Http\Controllers\GameController::class, 'index'])->name('game');

// Route::get('create',  [App\Http\Controllers\CreateController::class, 'index'])->name('create');

Route::post('game/post',  [App\Http\Controllers\CreateController::class, 'post'])->name('post');
