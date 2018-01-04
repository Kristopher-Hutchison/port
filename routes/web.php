<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return redirect('portfolio');
});

Route::get('/about', function () {
    return view('welcome');
});

Route::get('/cv', function () {
    return view('welcome');
});

Route::get('/resume', function () {
    return view('welcome');
});

Route::get('/portfolio', function () {
    return view('welcome');
});
Route::get('/portfolio/naturipe', function () {
    return view('welcome');
});
Route::get('/portfolio/sweetango', function () {
    return view('welcome');
});
Route::get('/portfolio/ctgc', function () {
    return view('welcome');
});
Route::get('/portfolio/vmware', function () {
    return view('welcome');
});
Route::get('/portfolio/cisco', function () {
    return view('welcome');
});
Route::get('/portfolio/canned-pears', function () {
    return view('welcome');
});
Route::get('/portfolio/verizon-meet', function () {
    return view('welcome');
});
Route::get('/portfolio/pear-reports', function () {
    return view('welcome');
});
Route::get('/portfolio/verizon-connectivity', function () {
    return view('welcome');
});
Route::get('/portfolio/mwl', function () {
    return view('welcome');
});
Route::get('/portfolio/imbibe', function () {
    return view('welcome');
});
Route::get('/portfolio/mine', function () {
    return view('welcome');
});


Auth::routes();

///Route::get('/home', 'HomeController@index')->name('home');

