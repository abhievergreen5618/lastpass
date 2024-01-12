<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('folder');
            $table->string('title');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('lastname');
            $table->string('username');
            $table->string('gender');
            $table->string('birthday');
            $table->string('company');
            $table->string('address1');
            $table->string('address2');
            $table->string('address3');
            $table->string('city');
            $table->string('county');
            $table->string('state');
            $table->string('postalcode');
            $table->string('country');
            $table->string('timezone');
            $table->string('email');
            $table->string('phone');
            $table->string('eveningphone');
            $table->string('mobilephone');
            $table->string('fax');
            $table->string('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
