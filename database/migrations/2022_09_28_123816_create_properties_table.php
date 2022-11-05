<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->float('price');
            $table->float('surface');
            $table->enum('contract_type',['sale','rental']);
            $table->enum('property_type',['commercial','residential']);
            $table->enum('property_sub_type',['apartment','house','villa','land','garage','shop','warehouse','building','office']);
            $table->boolean('papers_done');
            $table->enum('state',['New','Good','Nice','Bad','Unfinished']);
            $table->integer('number_of_rooms');
            $table->integer('number_of_toilets');
            $table->integer('number_of_floors');
            $table->string('wilaya');
            $table->string('city');
            $table->string('title');
            $table->longText('description');
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
        Schema::dropIfExists('properties');
    }
};
