<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    //

    function register(Request $req)
    {
        $user = new User;
        $user->A_name= $req->input('A_name');
        $user->NIC= $req->input('NIC');
        $user->email= $req->input('email');
        $user->dob= $req->input('dob');
        $user->gender= $req->input('gender');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user ;
    }
}
