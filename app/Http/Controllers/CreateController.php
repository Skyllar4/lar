<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Game;

class CreateController extends Controller
{
    public function index()
    {
        $table = Game::all();
        
        dd($table);
        return view('create');
    }

    public function post(Request $request){

        $table = DB::table('users');
        
        Game::create([
            'result' => $request->message, //$data['name'],
            'user_id' => 9999
            // 'email' => $data['email'],
            // 'password' => Hash::make($data['password']),
        ]);
        
        // var_dump($table);

        // die;
        $response = array(
            'status' => 'success',
            'msg' => $request->message,
        );
        return response()->json($response);
     }
}
