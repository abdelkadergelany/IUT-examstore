<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>epreuvesgratuit</title>
    <link href="/favicon.png" rel="icon" />
    <!-- Styles -->
    <link href="{{ asset('/css/vendors.bundle.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/css/styles.bundle.css') }}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700" rel="stylesheet">

    <!--[if lt IE 9]>-->
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <!--[endif]-->
</head>

<body>
    <div id='root'>
        <!-- @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif -->


    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        $('#toggleSidebar').on('click', function() {
            console.log('Togglesidebar');

            $('body').toggleClass('iconic-sidebar');
        });

        $('#openSidebar').on('click', function(e) {
            console.log('opensidebar');

            e.stopPropagation();
            $('body').removeClass('open-search');
            $('body').addClass('open-sidebar');
            $('#sidebarBackdrop').addClass('show');
            $('#headerBackdrop').removeClass('show');
        });

        $('#hideSidebar').on('click', function() {
            console.log('hidesidebar');
            $('body').removeClass('open-sidebar');
            $('#sidebarBackdrop').removeClass('show');
        });
    </script>
</body>

</html>
