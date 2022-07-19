<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalaryProcedure extends Model
{
    use HasFactory;
    protected $table = 'salary_procedure';
    protected $fillable = [
        'staff_category',
        'basic',
        'ot_rate',
        'work_hrs',
        'day',
        'week',
        'applicable',
        'training',
        'allStaff',
        'EPF',
        'ETF',
        'Sp_bonus',
        'start_date',
        'closing_date',
        'channel_rate',


    ];
}
