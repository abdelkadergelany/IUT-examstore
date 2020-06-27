<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePdfModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pdf_models', function (Blueprint $table) {
            $table->id();
            $table->string('dept');
            $table->string('type');
            $table->string('year');
            $table->integer('semester');
             $table->string('course_Code');
            $table->string('title');
            $table->string('pdf');
            $table->string('submitted_By')->nullable();
            $table->string('cover_pict')->default('cover.png');
             $table->longText('keywords');
             $table->integer('validated');
             $table->string('program');
             $table->string('semester_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pdf_models');
    }
}
