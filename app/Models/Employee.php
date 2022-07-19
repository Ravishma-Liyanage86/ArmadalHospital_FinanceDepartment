<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'staff';
    protected $fillable = [
        'id',
        'name',
        'phone',
        'stafftype',
        'email',
        


    ];
    

}
