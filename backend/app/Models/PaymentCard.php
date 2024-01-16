<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'folder',
        'cardholder',
        'expmonth',
        'expyear',
        'number',
        'cvvno',
        'startdate',
        'type',
        'startyear',
        'notes',
    ];
}
