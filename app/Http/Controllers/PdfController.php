<?php

namespace App\Http\Controllers;
use App\PdfModel;
use Illuminate\Http\Request;

class PdfController extends Controller
{
    //
    public function index(Request $request)
    {

    }
    public function getPdf(Request $request)
    {
        $res = PdfModel::where('dept','like',$request->dept)->where('semester','like',(int)$request->sem)->get();

        return ($res);
    }
}
