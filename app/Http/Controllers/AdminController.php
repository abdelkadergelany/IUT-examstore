<?php

namespace App\Http\Controllers;

use App\PdfModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class AdminController extends Controller
{
    //

    public function addPaper(Request $request)
    {
        return view('admin');

    }
    public function adminpdf(Request $request)
    {
        try{

        $data =  $request->all();
        $pdf_name = $data['coursecode'].'_'.$data['type'].'_'.$data['year'].'.pdf';
        //$path = 'public/pdf/'.$data['department'].'/'.'semester'.$data['semester'].'/'. $pdf_name;
        $path = 'pdf/'.$data['department'].'/'.'semester'.$data['semester'].'/'. $pdf_name;
        $file = $data['file'];
        if($file != null) {

           $temp =   Storage::disk('local')->putFile('public/temp',  $file);
           $test =  Storage::disk('local')->move( $temp, $path);


        }

        $paper =  PdfModel::create([
            'dept' => $data['department'],
            'semester' => $data['semester'],
            'type' => $data['type'] ,
            'year' => $data['year'],
            'title' => $data['coursecode'].'_'.$data['type'].'_'.$data['year'],
            'program' => $data['program'],
            'keywords' => $data['keywords'],
            'course_name' => $data['coursename'],
            'course_Code' => $data['coursecode'],
            'pdf' => $path

        ]);

      return redirect('/api/admin')->with('uploaded','uploaded successfully');

    }catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e,
            ], 500);
        }


    }

}
