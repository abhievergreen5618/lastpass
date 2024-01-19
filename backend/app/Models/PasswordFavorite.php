<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordFavorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'folder_id',
        'name',
        'url',
        'username',
        'password',
        'notes',
    ];
}
