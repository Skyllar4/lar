<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Крестики нолики</title>
    <script src="{{ asset('js/script.js') }}" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <style>
        button {
            min-width: 100px;
            height: 100px;
        }

        div {
            max-width: 393px;
            height: 500px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .main-container {
            position: absolute;
            top: 20%;
            left: 36%;
        }

        .endGameHidden {
            display: none;
        }

        .endGameTitle {
            display: block;
            margin-left: 83px;
        }

        .bc {
            font-size: 83px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="main-container">
        <div class="container" id="div">
            <button id="1"></button>
            <button id="2"></button>
            <button id="3"></button>
            <button id="4"></button>
            <button id="5"></button>
            <button id="6"></button>
            <button id="7"></button>
            <button id="8"></button>
            <button id="9"></button>
        </div>
        <h1 class="endGameHidden" id="endGame">Игра окончена</h1>
    </div>
    <div class="container">
        <a href="/lk">Статистика</a>
    </div>
</body>

</html>
