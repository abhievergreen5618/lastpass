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
        Schema::create('payment_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Reference the 'id' column in the 'users' table
            $table->string('name')->nullable();
            $table->string('folder')->nullable();
            $table->string('cardholder')->nullable();
            $table->foreignId('expmonth')->constrained('months')->onDelete('cascade'); 
            $table->string('expyear')->nullable(); 
            $table->string('number')->nullable();
            $table->string('cvvno')->nullable();
            $table->foreignId('startdate')->constrained('months')->onDelete('cascade');
            $table->string('type')->nullable();
            $table->string('startyear')->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_cards');
    }
};
