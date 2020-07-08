<?php

namespace App\Http\Controllers;

use App\PdfModel;
use Illuminate\Http\Request;
use Mockery\Matcher\Closure;
use Symfony\Component\HttpFoundation\Response;

class PdfController extends Controller
{
    //
    public function index(Request $request)
    {
    }
    public function downloadPdf(Request $request)
    {    $headers =null;
      //  return response()->download(public_path('storage/pdf/CSE_4678_Midterm2017pdf.pdf'),$headers);
        $headers = array(
            'Content-Type: application/pdf'
            );
            $filename = $request->pdf;
                     //  return Response::download($file,"Input Group.pdf",$headers);
           return response()->download(public_path('storage/pdf/'.$filename), $filename,$headers);

    }
    public function getPdf(Request $request)
    {
        $res = null;
        if ($request->year == 'all' & $request->type == 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)->where('semester', 'like', (int) $request->sem)->paginate(3);
        }

        if ($request->year != 'all' & $request->type == 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('year', 'like', $request->year)
                ->where('semester', 'like', (int) $request->sem)->paginate(3);
        }
        if ($request->year == 'all' & $request->type != 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('type', 'like', $request->type)
                ->where('semester', 'like', (int) $request->sem)->paginate(3);
        }
        if ($request->year != 'all' & $request->type != 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('year', 'like', $request->year)
                ->where('type', 'like', $request->type)
                ->where('semester', 'like', (int) $request->sem)->paginate(3);
        }


        return ($res);
    }
}
