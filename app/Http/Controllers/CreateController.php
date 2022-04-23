<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CreateController extends Controller
{
    public function index()
    {
        dd($_POST);
        return view('create');
    }

    public function post(Request $request){

        var_dump($request->message);

        die;
        $response = array(
            'status' => 'success',
            'msg' => $request->message,
        );
        return response()->json($response);
     }
}
