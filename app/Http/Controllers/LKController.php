<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LKController extends Controller
{
    public function index()
    {
        $users = DB::table('game')->paginate(15);

        return view('lk', ['users' => $users]);
    }
}
