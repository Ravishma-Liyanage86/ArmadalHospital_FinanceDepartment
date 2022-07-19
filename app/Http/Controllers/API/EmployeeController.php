<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function viewEmployee()
    {
 
        $viewEmployees = Employee::all();
        return response()->json([
 
         'status'=>200,
         'viewEmployees'=> $viewEmployees,
     ]);
 
    }
}
