<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>Started application in Angular JS</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap-lumen.min.css') }}">
    <link rel="stylesheet" href="{{asset('bower_components/angular-loading-bar/build/loading-bar.min.css')}}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/all.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script>
        var baseUrl = "{{ url('/') }}/";
        var csrfToken = "{{ csrf_token() }}";
    </script>
</head>

<body id="login" ng-controller="globalController">
        <div ng-view></div>
    <script type="text/javascript" src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- Metis Menu Plugin JavaScript -->
    <script src="{{asset('js/metisMenu.min.js')}}"></script>
    <!-- Graph JavaScript -->
{{--    <script src="{{asset('js/d3.v3.js')}}"></script>--}}
{{--    <script src="{{asset('js/rickshaw.js')}}"></script>--}}
{{--    <script src="{{asset('js/custom.js')}}"></script>--}}


    <script src="{{asset('js/underscore-min.js')}}" type="text/javascript"></script>
    <script src= "{{asset('js/moment-2.2.1.js')}}" type="text/javascript"></script>
    {{--<script src="{{asset('js/clndr.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{asset('js/site.js')}}" type="text/javascript"></script>--}}



    <script type="text/javascript" src="{{asset('bower_components/angular/angular.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js') }}"></script>
    <script type="text/javascript" src="{{url(elixir('js/app.js'))}}"></script>
    <script type="text/javascript" src="{{url(elixir('js/models.js'))}}"></script>
    <script type="text/javascript" src="{{url(elixir('js/controllers.js'))}}"></script>
</body>
</html>
