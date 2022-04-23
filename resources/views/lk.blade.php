@extends('layouts.app')

@section('content')
<div class="container">
    <a href="/game">Играть</a>
    Статистика игр <br>
    @foreach ($users as $game)
        {{ $game->result }}
    @endforeach
</div>
@endsection

