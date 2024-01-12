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
        Schema::create('phone_codes', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('user_id')->constrained('users'); // Reference the 'id' column in the 'users' table
            $table->string("countrycode");
            $table->string("name");
            $table->string("phonecode");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phone_codes');
    }
};
