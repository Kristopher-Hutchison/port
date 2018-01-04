<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Kristopher Hutchison — Technical Director</title>

        <link href="/css/app.css" rel="stylesheet" type="text/css">
        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css"> -->
        <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed:700|Montserrat:300,400,500,700" rel="stylesheet">

        
    </head>
    <body>
        <div class="flex-center position-ref full-height" id="app">
           
            <div class="container nav-title">

                @include ('layouts.nav')
            
            </div>


           
            <transition name="fade">
                <router-view></router-view>
            </transition>

          
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
