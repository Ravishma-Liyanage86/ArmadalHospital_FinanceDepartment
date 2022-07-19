<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RequestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\API\ProcedureController;
use App\Http\Controllers\API\PaysheetController;
use App\Http\Controllers\API\EmployeeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('viewProcedure',[ProcedureController::class,'viewPr']);
Route::get('viewPayrequest',[RequestController::class,'viewPaysheetRequests']);
Route::post('/addPaySheetRequest',[RequestController::class,'store']);
Route::get('/EditStudent/{Pay_pro_id}',[ProcedureController::class,'edit']);
Route::put('/updateStudent/{Pay_pro_id}',[ProcedureController::class,'update']);
Route::delete('deleteProcedure/{Pay_pro_id}',[ProcedureController::class,'delete']);
//Route::post('/storeSalaryProcedure',[ProcedureController::class,'stores']);
Route::post('/storeSalaryProcedureRequest',[ProcedureController::class,'stores']);
Route::post('/addPaySheet',[PaysheetController::class,'paysheet']);
Route::get('/search/{key}',[PaysheetController::class,'searchPaysheet']);
Route::get('viewEmployees',[EmployeeController::class,'viewEmployee']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();


    


});


//Route::post('storeSalaryProcedure',[ProcedureController::class,'store']);



//Route::post('register',[UserController::class,'register']);


//salaryProcedure
