<?php

namespace App\Http\Controllers;

use App\PdfModel;
use App\Submited_Paper;
use Illuminate\Http\Request;
use Mockery\Matcher\Closure;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;


class PdfController extends Controller
{
    //
    public function index(Request $request)
    {
    }
    public function postpaper(Request $request)
    {

       //   return ($request->input('department'));
       try{
             $data =  $request->all();

             // return $data['file'];

        $folder_name = Str::random(6);
        $files = $data['file'];
        if(!empty($files)) {
            foreach($files as $file) {
              Storage::disk('local')->putFile('public/submited_pdf/'.$folder_name,  $file);

            }
        }

        $paper =  Submited_Paper::create([
            'department' => $data['department'],
            'semester' => $data['semester'],
            'type' => $data['type'] ,
            'year' => $data['year'],
            'folder' => $folder_name

        ]);
              return response()->json([
                "success" => true,
                "message" => 'uploaded succesfully',
            ], 200);
        }
        catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e,
            ], 500);
        }

    }
    public function downloadPdf(Request $request)
    {
       try {
            $headers = null;
            $headers = array(
                'Content-Type: application/pdf'
            );
            $filename = $request->pdf;
            $outputName = basename($request->pdf).PHP_EOL;
            return response()->download(public_path('storage/' . $filename), $outputName, $headers);
            //return response()->download(public_path('/' . $filename), $outputName, $headers);

        }
        catch (\Exception $e) {
            return $e;
            return ("404!!!  SORRY FILE NOT FOUND");
        }
    }

    public function getPdf(Request $request)
    {
        $res = null;
        if ($request->year == 'all' & $request->type == 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)->where('semester', 'like', (int) $request->sem)->paginate(10);
        }

        if ($request->year != 'all' & $request->type == 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('year', 'like', $request->year)
                ->where('semester', 'like', (int) $request->sem)->paginate(10);
        }
        if ($request->year == 'all' & $request->type != 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('type', 'like', $request->type)
                ->where('semester', 'like', (int) $request->sem)->paginate(10);
        }
        if ($request->year != 'all' & $request->type != 'all') {
            $res = PdfModel::where('dept', 'like', $request->dept)
                ->where('year', 'like', $request->year)
                ->where('type', 'like', $request->type)
                ->where('semester', 'like', (int) $request->sem)->paginate(10);
        }


        return ($res);
    }
}
