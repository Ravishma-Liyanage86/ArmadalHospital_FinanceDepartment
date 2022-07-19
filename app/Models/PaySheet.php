<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaySheet extends Model
{
    use HasFactory;
    protected $table ='addedpaysheets';
    protected $fillable = [

        'reqid',
        'ename',
        'nic',
        'basic',
        'ot',
        'epf',
        'etf',
        'time',
        'bonuse',
        'channelcharges',
        'total',
        'padate',
    ];
}
