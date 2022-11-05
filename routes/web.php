<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\PropertiesController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\NewsLetterSubscribersController;
use App\Http\Controllers\PropertyImagesController;
use Illuminate\Support\Facades\Storage;


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

//Logo
Route::get('/getLogo',function(){
    $url = Storage::url('logo.png');
    return response()->json($url); 
});

//properties
Route::get('/properties/getSomeProperties',[IndexController::class,'index']);
Route::post('/properties/saveProperty',[PropertiesController::class,'store']);
Route::delete('/properties/{id}/deleteProperty',[PropertiesController::class,'destroy']);
Route::post('/properties/{id}/updateProperty',[PropertiesController::class,'update']);
Route::get('/properties/getInventory',[PropertiesController::class,'index']);
Route::get('/properties/{id}/getDetails',[PropertiesController::class,'show']);
Route::delete('/properties/images/{id}/deleteImage',[PropertyImagesController::class,'destroy']);
Route::post('/properties/searchProperties',[PropertiesController::class,'search']);


//News letter
Route::post('/newsLetter/addSubscriber',[NewsLetterSubscribersController::class,'store']);


//dashboard
Route::get('/dashboard/getPropertiesData',[PropertiesController::class,'propertiesDashboardData']);
Route::get('/dashboard/getUsersData',[UsersController::class,'usersDashboardData']);

//events
Route::get('/events/getEvents',[EventController::class,'index']);
Route::post('/events/addEvent',[EventController::class,'store']);
Route::delete('/events/{id}/dropEvent',[EventController::class,'destroy']);

//Frontend
Route::get('/Inventory', function () {
    
    return Inertia::render('ShowInventory', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/addProperty', function () {
    return Inertia::render('AddPropertyForm');
})->middleware(['auth', 'verified']);

Route::get('/{id}/Update', function ($id) {
    return Inertia::render('PropertyUpdate',['id'=>$id]);
})->middleware(['auth', 'verified']);

Route::get('/{id}/Details', function ($id) {
    return Inertia::render('PropertyDetails',[
        'id'=>$id,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/{*}',[IndexController::class,'index']);

require __DIR__.'/auth.php';
