// create an angular module, which matches the ng-app="Weather" in body tag
var app = angular.module('Weather', []);

// create a WeatherApi object containing several methods using angular factory function
app.factory('WeatherApi', function($http) {

    // declare an object
    var obj = {};

    // the getLoc() method gets a JS object, which contains the location info

    // this is an example of the returned location object
    // /**/ typeof JSON_CALLBACK === 'function' && JSON_CALLBACK({
    //     "ip": "110.174.5.186",
    //     "hostname": "No Hostname",
    //     "city": "Sydney",
    //     "region": "New South Wales",
    //     "country": "AU",
    //     "loc": "-33.8603,151.2016",
    //     "org": "AS7545 TPG Telecom Limited",
    //     "postal": "2000"
    // });
    obj.getLoc = function() {
        return $http.jsonp("http://ipinfo.io/?callback=JSON_CALLBACK");
    };

    // getCurrent() gets a JS object, which contains the weather info
    // $http.jsonp("http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&APPID=dbd636d359406b7c46a6ed075dff431e&callback=JSON_CALLBACK")

    // this is an example of the returned weather object
    // {"coord":
    // {"lon":145.77,"lat":-16.92},
    // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
    // "base":"cmc stations",
    // "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
    // "wind":{"speed":5.1,"deg":150},
    // "clouds":{"all":75},
    // "rain":{"3h":3},
    // "dt":1435658272,
    // "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
    // "id":2172797,
    // "name":"Cairns",
    // "cod":200}
    obj.getCurrent = function(city) {
        var api = "http://api.openweathermap.org/data/2.5/weather?q=";
        var units = "&units=metric";
        var appid = "&APPID=dbd636d359406b7c46a6ed075dff431e";
        var cb = "&callback=JSON_CALLBACK";

        return $http.jsonp(api + city + units + appid + cb);
    };

    // return the object
    return obj

});




// create a controller
app.controller('MainCtrl', function($scope, WeatherApi) {

    $scope.Data = {};
    $scope.Data.unit = 'C';
    $scope.Data.sysChange = false;

    // get the location object and if the object returned successfully then passes it to a callback function
    WeatherApi.getLoc().success(function(data) {

        var city = data.city;
        $scope.Data.city = data.city;

        // get the weather object and if the object returned successfully then passes it to a callback function
        WeatherApi.getCurrent(city).success(function(data) {
            CurrentWeather(data)
        });
    });

    // search the weather info for other city
    $scope.searchCity = function () {

        // retrieve the city name from the input
        $scope.Data.city = $scope.cityname;

            // get the weather object and if the object returned successfully then passes it to a callback function
            WeatherApi.getCurrent($scope.Data.city).success(function(data) {

                // if the city is known
                // hide the current icon;
                $('div.drizzle').addClass('hide');
                $('div.clouds').addClass('hide');
                $('div.rainy').addClass('hide');
                $('div.snow').addClass('hide');
                $('div.clear').addClass('hide');
                CurrentWeather(data)
            });

    };

    // handle the enter press
    $scope.goSearch = function(keyEvent) {
        if (keyEvent.which === 13){
            $scope.searchCity();
        }
    }

    // extract the weather info from the weather object
    // "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37}
    // "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
    function CurrentWeather(data) {
        $scope.Data.temperature = Math.round(data.main.temp);
        $scope.Data.Cel = Math.round(data.main.temp);
        // the description of the weather condition
        $scope.Data.description = data.weather[0].main;
        // convert the Celsius to Fahrenheit
        $scope.Data.Fah = Math.round(($scope.Data.temperature * 9) / 5 + 32);
        //
        return IconGenerate($scope.Data.description);
    }

    function IconGenerate(weatherCondition) {

        var weatherCondition = weatherCondition.toLowerCase();

        // determine the current weather condition
        switch (weatherCondition) {
            case 'drizzle':
                $scope.Data.comment = "Well, a drizzle is not that bad.";
                addIcon(weatherCondition);
                break;
            case 'clouds':
                $scope.Data.comment = "I love clouds, do you?";
                addIcon(weatherCondition);
                break;
            case 'rain':
                $scope.Data.comment = "Hmmm... I kinda hate a rainy day.";
                addIcon(weatherCondition + "y"); // add a 'y' to avoid name clash with the icon class name
                break;
            case 'snow':
                $scope.Data.comment = "Time to make a snowman!";
                addIcon(weatherCondition);
                break;
            case 'clear':
                $scope.Data.comment = "Let's hit the beach!";
                addIcon(weatherCondition);
                break;
            case 'thunderstorm':
                $scope.Data.comment = "Better stay at home and... code...";
                addIcon(weatherCondition);
                break;
            default:
                $scope.Data.comment = "Cloudy... again...";
                $('div.clouds').removeClass('hide');
        }
    }

    function addIcon(weatherCondition) {
        $('div.' + weatherCondition).removeClass('hide');
    }

    // switch between Celsius and Fahrenheit
    $scope.Data.sys = function() {
        
        if ($scope.Data.sysChange) {
            $scope.Data.unit = 'C';
            $scope.Data.temperature = $scope.Data.Cel;
            return $scope.Data.sysChange = false;
        }
        
        $scope.Data.unit = 'F';
        $scope.Data.temperature = $scope.Data.Fah;
        return $scope.Data.sysChange = true;
    }

});