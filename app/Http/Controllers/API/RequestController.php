<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PaYSheetRequest;
use Illuminate\Support\Facades\Validator;

class RequestController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator:: make($request->all(),[

            
        'name' =>'required|max:191',
        'select'=> 'required|max:191',
        'jobstatus'=> 'required|max:191',
        'nic'=> 'required|max:12|min:10',
        'eid'=> 'required|max:191',
        'othrs'=> 'required|max:191',
        'time'=> 'required|max:191',
        'redate'=> 'required|max:191',
           

        ]);
        if($validator ->fails()){
             
            return response()->json([

               'validate_error' => $validator ->messages(),
            ]);




        }
        else
        {









        $Pay = new PaYSheetRequest;
        $Pay->name =$request->input('name');
        $Pay->select=$request->input('select');
        $Pay->jobstatus=$request->input('jobstatus');
        $Pay->nic=$request->input('nic',);
        $Pay->eid=$request->input('eid');
        $Pay->othrs=$request->input('othrs');
        $Pay->time=$request->input('time');
        $Pay->redate=$request->input('redate');
        $Pay->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Paysheet rquest make successfuly',
        ]);
    }

    }

    
    public function viewPaysheetRequests()
    {
 
        $viewPayrequest = PaYSheetRequest::all();
        return response()->json([
 
         'status'=>200,
         'viewPayrequest'=> $viewPayrequest,
     ]);
 
    }
 




    
}
