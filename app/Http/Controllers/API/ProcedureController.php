<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SalaryProcedure;
use Illuminate\Support\Facades\Validator;

class ProcedureController extends Controller
{

   public function viewPr()
   {

       $viewProcedure = SalaryProcedure::all();
       return response()->json([

        'status'=>200,
        'viewProcedure'=> $viewProcedure,
    ]);

   }




    public function stores(Request $request)
  {

        $validator = Validator:: make($request->all(),[

            'staff_category'=> 'required|max:191|max:191',
            'basic'=> 'required|max:191',
            'ot_rate'=> 'required|max:191',
            'work_hrs' => 'required|numeric|max:191',
           // 'day' => 'required|max:191',
            // 'gridRadios' => 'required|max:191',
            'EPF'=> 'required|max:191',
            'ETF'=> 'required|max:191',
            
            'start_date'=> 'required|max:20',
              'closing_date' => 'required|max:20',
           

        ]);
        if($validator ->fails()){
             
            return response()->json([

               'validate_error' => $validator ->messages(),
            ]);




        }
        else
        {

        $SalaryProcedure = new SalaryProcedure;
        $SalaryProcedure ->staff_category=$request->input('staff_category');
        $SalaryProcedure ->basic=$request->input('basic');
        $SalaryProcedure ->ot_rate=$request->input('ot_rate');
        $SalaryProcedure ->work_hrs=$request->input('work_hrs');
        $SalaryProcedure ->day=$request->input('day') == true ? '1': '0';
        $SalaryProcedure ->week=$request->input('week') == true ? '1': '0';
        $SalaryProcedure ->applicable=$request->input('applicable')== true ? '1': '0';
        $SalaryProcedure ->training=$request->input('training')== true ? '1': '0';
        $SalaryProcedure ->allStaff=$request->input('allStaff')== true ? '1': '0';
        $SalaryProcedure ->EPF=$request->input('EPF');
        $SalaryProcedure ->ETF=$request->input('ETF');
        $SalaryProcedure ->Sp_bonus=$request->input('Sp_bonus');
        $SalaryProcedure ->start_date=$request->input('start_date');
        $SalaryProcedure ->closing_date=$request->input('closing_date');
        $SalaryProcedure ->channel_rate=$request->input('channel_rate');

        
        $SalaryProcedure->save();
        return response()->json([

            'status'=>200,
            'message'=>'Salary Procedure Created succesfully',
        ]);

        }
  }
  

  public function edit($Pay_pro_id)
  {
           

        $procedure = SalaryProcedure::find($Pay_pro_id);


        if($procedure)
        {
          return response() ->json([
            'status' => 200,
            'procedure' => $procedure,
          ]);

          
        }

        else
        {
          return response() ->json([
            'status' => 404,
            'message' => 'No such a Salary Procedure Found',
          ]);

        }
       

  }


  public function update(Request $request,$Pay_pro_id)

  {
    $validator = Validator:: make($request->all(),[

      'staff_category'=> 'required|max:191|max:191',
      'basic'=> 'required|max:191',
      'ot_rate'=> 'required|max:191',
      'work_hrs' => 'required|numeric|max:191',
     // 'day' => 'required|max:191',
      // 'gridRadios' => 'required|max:191',
      'EPF'=> 'required|max:191',
      'ETF'=> 'required|max:191',
      
      'start_date'=> 'required|max:20',
        'closing_date' => 'required|max:20',
     

  ]);
  if($validator ->fails()){
       
      return response()->json([

         'validate_error' => $validator ->messages(),
      ]);




  }
  else
  {
    
    $SalaryProcedure =  SalaryProcedure::find($Pay_pro_id);

    if($SalaryProcedure)
    {

        
   
        $SalaryProcedure ->staff_category=$request->input('staff_category');
        $SalaryProcedure ->basic=$request->input('basic');
        $SalaryProcedure ->ot_rate=$request->input('ot_rate');
        $SalaryProcedure ->work_hrs=$request->input('work_hrs');
        $SalaryProcedure ->day=$request->input('day') == true ? '1': '0';
        $SalaryProcedure ->week=$request->input('week') == true ? '1': '0';
        $SalaryProcedure ->applicable=$request->input('applicable')== true ? '1': '0';
        $SalaryProcedure ->training=$request->input('training')== true ? '1': '0';
        $SalaryProcedure ->allStaff=$request->input('allStaff')== true ? '1': '0';
        $SalaryProcedure ->EPF=$request->input('EPF');
        $SalaryProcedure ->ETF=$request->input('ETF');
        $SalaryProcedure ->Sp_bonus=$request->input('Sp_bonus');
        $SalaryProcedure ->start_date=$request->input('start_date');
        $SalaryProcedure ->closing_date=$request->input('closing_date');
        $SalaryProcedure ->channel_rate=$request->input('channel_rate');

    
        $SalaryProcedure->save();
        return response()->json([

        'status'=>200,
        'message'=>'Salary Procedure Updated succesfully',
        ]);
    }

    else
    {
      return response() ->json([
        'status' => 404,
        'message' => 'No such a Salary Procedure Found',
      ]);
    }
  }
  }




  public function delete($Pay_pro_id){

    $salary = SalaryProcedure::find($Pay_pro_id);

    $salary -> delete();
    return response()->json([

      'status'=>200,
      'message'=>'Salary Procedure deleted succesfully',
  ]);

  }

 
}
