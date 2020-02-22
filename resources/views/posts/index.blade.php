@extends('layouts.app')

@section('content')
    <h1>Posts</h1>
    @if(count($posts) > 0)
        @foreach ($posts as $post)
            <div class="card card-inverse" style="background-color: #3333; border-color: #3333;">
                <div class="card-block">
                    <h3 class="card-title"><a href="/posts/{{$post->id}}">{{$post->title}}</a></h3>
                    <small>Written on {{$post->created_at}}</small>
                </div>
            </div>
        @endforeach
        {{$posts->links()}}
    @else
        <example-component> No posts found </example-component>
    @endif

@endsection
