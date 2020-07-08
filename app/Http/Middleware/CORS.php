<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // return $next($request)
        // ->header('Access-Control-Allow-Origin','*')
        // ->header('Access-Control-Allow-Methods','PUT, GET, POST,DELETE,OPTIONS,PATCH')
        // ->header('Access-Control-Allow-Headers','Origin, Content-Type, Accept, Authorization, X-Request-With, cache-control')
        // ->header('Access-Control-Allow-Credentials','true');

        $handle = $next($request);

        if(method_exists($handle, 'header'))
        {
            $handle->header('Access-Control-Allow-Origin' , '*')
                   ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
                   ->header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With, Application')
                   ->header('Access-Control-Allow-Credentials','true');
        }

        return $handle;
    }
}
