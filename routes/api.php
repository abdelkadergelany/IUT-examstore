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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/admin', 'AdminController@addPaper')->name('addPaper');

Route::get('/pdf', 'PdfController@getPdf')->name('home');
Route::get('/downloadPdf','PdfController@downloadPdf');
Route::post('/post-paper','PdfController@postpaper');

Route::post('/postpdf','AdminController@adminpdf')->name('adminpost');



Route::group([
    'prefix'=>'user',
    'namespace'=>'User',
],
function(){

    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');
    Route::post('save-favorite','AuthController@savefavorite');
    Route::get('get-favorite','AuthController@getfavorite');
    Route::get('delete-favorite','AuthController@deletefavorite');

}
);
