<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PaySheet;


class PaysheetController extends Controller

{
    public function paysheet(Request $request)
    {
        $Paysheet = new PaySheet;
        $Paysheet->reqid =$request->input('reqid');
        $Paysheet->ename =$request->input('ename');
        $Paysheet->nic=$request->input('nic');
        $Paysheet->basic=$request->input('basic');
        $Paysheet->ot=$request->input('ot');
        $Paysheet->epf=$request->input('epf');
        $Paysheet->etf=$request->input('etf');
        $Paysheet->time=$request->input('time');
        $Paysheet->bonuse=$request->input('bonuse');
        $Paysheet->channelcharges=$request->input('channelcharges');
        $Paysheet->	total=$request->input('total');
        $Paysheet->padate=$request->input('padate');
        $Paysheet->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Paysheet added successfuly',
        ]);

    } 

    public function searchPaysheet($key)
    {

        
         return PaySheet::where('nic','Like',"%$key%")->get();

        // return PaySheet:: where('nic','Like',"%$key%")->get();
    }


}
