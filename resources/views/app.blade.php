<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
       
        @routes
        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/js/app.jsx','resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="container m-0 p-0" style="overflow-x:hidden;">
        @inertia
        <div class="class" id="root" data-logo={{ URL('storage/logo.png') }}></div>
    </body>
</html>
