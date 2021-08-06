<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::apiResource('marcas', \App\Http\Controllers\MarcaController::class)->middleware('api');
Route::apiResource('productos', \App\Http\Controllers\ProductoController::class);
Route::get('complementos/marcas', [\App\Http\Controllers\ComplementosController::class, 'getMarcas']);
