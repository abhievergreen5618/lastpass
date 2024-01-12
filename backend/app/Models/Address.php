<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'folder',
        'title',
        'firstname',
        'middlename',
        'lastname',
        'username',
        'gender',
        'birthday',
        'company',
        'address1',
        'address2',
        'address3',
        'city',
        'county',
        'state',
        'postalcode',
        'country',
        'timezone',
        'email',
        'phone',
        'eveningphone',
        'mobilephone',
        'fax',
        'notes',
        'phoneno',
        'street',
        'apt',
    ];
}
