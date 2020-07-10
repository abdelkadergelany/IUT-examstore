<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function addPaper(Request $request)
    {
        return view('admin');

    }
}
