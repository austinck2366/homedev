<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function index() {

        //$title = "Welcome to Austin Krogman's Portfolio Page";
     //   return view('pages.index', compact('title'));
        //return view('pages.index')->with('title', $title);
        return view('welcome');
    }

    public function about(){
       /* return view('pages.about');*/
    }

    public function services(){
        /*$data= array(
            'title' => 'Services',
            'services' => ['Web Design', 'Javascript', 'Vue.js', 'Laravel', 'PHP']

        );
        return view('pages.services')->with($data);*/
}

}
