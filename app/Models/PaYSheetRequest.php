<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaYSheetRequest extends Model
{
    use HasFactory;
    protected $table ='paysheetrequest';
    protected $fillable = [

        'name',
        'select',
        'jobstatus',
        'nic',
        'eid',
        'othrs',
        'time',
        'redate',
    ];
}
