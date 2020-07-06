<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    //
    protected $guarded = ['id'];

    public function User(){
        return $this->belongsTo(User::class,'id');
     }

}
