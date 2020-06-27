<?php

namespace App\Http\Controllers;
use App\PdfModel;
use Illuminate\Http\Request;

class PdfController extends Controller
{
    //
    public function index(Request $request)
    {
        $pdf = PdfModel::where('dept',$request->dept)->where('semester',$request->semester)->get();
        return  $pdf;
    }
}
