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
        $res = null;
        if($request->year == 'all' & $request->type == 'all'){
            $res = PdfModel::where('dept','like',$request->dept)->where('semester','like',(int)$request->sem)->paginate(3);

        }

        if($request->year != 'all' & $request->type == 'all'){
            $res = PdfModel::where('dept','like',$request->dept)
            ->where('year','like',$request->year)
            ->where('semester','like',(int)$request->sem)->paginate(3);

        }
        if($request->year == 'all' & $request->type != 'all'){
            $res = PdfModel::where('dept','like',$request->dept)
            ->where('type','like',$request->type)
            ->where('semester','like',(int)$request->sem)->paginate(3);

        }
        if($request->year != 'all' & $request->type != 'all'){
            $res = PdfModel::where('dept','like',$request->dept)
            ->where('year','like',$request->year)
            ->where('type','like',$request->type)
            ->where('semester','like',(int)$request->sem)->paginate(3);

        }


        return ($res);
    }
}
