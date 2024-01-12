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
        Schema::create('recents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users'); // Reference the 'id' column in the 'users' table
            // $table->foreignId('folder_id')->constrained('folders'); // Reference the 'id' column in the 'users' table
            $table->string('folder_id');
            $table->string("name");
            $table->string("url");
            $table->string("username");
            $table->string("password");
            $table->string("notes")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recents');
    }
};
