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
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Reference the 'id' column in the 'users' table
            $table->string('name')->nullable();
            $table->string('folder')->nullable();
            $table->string('title')->nullable();
            $table->string('firstname')->nullable();
            $table->string('middlename')->nullable();
            $table->string('lastname')->nullable();
            $table->string('username')->nullable();
            $table->string('gender')->nullable();
            $table->string('birthday')->nullable();
            $table->string('company')->nullable();
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('address3')->nullable();
            $table->string('city')->nullable();
            $table->string('county')->nullable();
            $table->string('state')->nullable();
            $table->string('postalcode')->nullable();
            $table->foreignId('country')->constrained('countries')->onDelete('cascade');
            $table->string('timezone')->nullable();
            $table->string('email')->nullable();
            $table->foreignId('phone')->constrained('phone_codes')->onDelete('cascade')->nullable();
            $table->string('eveningphone')->nullable();
            $table->string('mobilephone')->nullable();
            $table->string('fax')->nullable();
            $table->string('notes')->nullable();          
            $table->string('phoneno')->nullable();
            $table->string('street')->nullable();
            $table->string('apt')->nullable();
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
