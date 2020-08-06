<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Favorite;
use Illuminate\Support\Facades\DB;
use App\PdfModel;
use Exception;
use JWTAuth;
use Validator;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\Global_;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    //
    protected $user;


    public function __construct()
    {
        $this->user = new User;
    }
    public function  deletefavorite(Request $request)
    {
        try{
            $fav = Favorite::where('user',$request->id)->where('pdf',$request->pdf)->first();
            $fav->delete();
            return response()->json([
                "success" => true,
                "message" => 'deleted successfully',
            ], 400);
        }catch(\Exception $e){
            return response()->json([
                "success" => false,
                "message" => 'error',
            ], 400);
        }

    }
    public function getfavorite(Request $request)
    {
        try{
            $user_token = $request->token;
            $user = auth("users")->authenticate($user_token);
            $user_id = $user->id;
            $favlist = null;
            if ($user_id != null){
               // $favlist = Favorite::where('user', $user_id)->paginate(2);
                $favlist =  DB::table('pdf_models')
            ->join('favorites', function ($join) use ($user_id) {
                $join->on('pdf_models.id', '=', 'favorites.pdf')
                    ->where('favorites.user', '=', $user_id);
            })->paginate(3);
            return response()->json([
                "success" => true,
                "message" => 'loaded',
                "data" => $favlist
            ], 200);
            }
            else{
                return response()->json([
                    "success" => false,
                    "message" => 'empty favorite',
                ], 200);
            }


        }catch(\Exception $e){
            return response()->json([
                "success" => false,
                "message" => 'error',
            ], 400);
        }

    }
    public function savefavorite(Request $request)
    {


      try{  $user_token = $request->token;
        $user = auth("users")->authenticate($user_token);
        $user_id = $user->id;
        if ($user_id != null) {
            $fav =  Favorite::firstOrCreate([
                'user' => $user_id,
                'pdf' => $request->id
            ]);
            return response()->json([
                "success" => true,
                "message" => 'saved to your favorite',
            ], 200);
        }
        else
        {
            return response()->json([
                "success" => false,
                "message" => 'login to save as favorite',
            ], 400);

        }}catch(\Exception $e){
            return response()->json([
                "success" => false,
                "message" => 'saving error',
            ], 400);
        }

    }

    public function register(Request $request)
    {

        //return ("salo");
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'required|email',
                'password' => 'required|string|min:6',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->messages()->toArray(),
            ], 400);
        }

        $check_email = $this->user->where("email", $request->email)->count();
        if ($check_email > 0) {
            return response()->json([
                'success' => false,
                'message' => 'this email already exist please try another email'
            ], 200);
        }


        $registerComplete = $this->user::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        if ($registerComplete) {
            return $this->login($request);
        }
    }




    public function login(Request $request)
    {
        $validator = Validator::make(
            $request->only('email', 'password'),
            [
                'email' => 'required|email',
                'password' => 'required|string|min:6',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->messages()->toArray(),
            ], 400);
        }

        $jwt_token = null;

        $input = $request->only("email", "password");

        if (!$jwt_token = auth('users')->attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'invalid email or password'
            ]);
        }

        $user = auth("users")->authenticate($jwt_token);
        $user_name = $user->name;
       // $user_name = 'alyu';
        return response()->json([
            'success' => true,
            'token' => $jwt_token,
            'name' => $user_name
        ]);
    }
}
