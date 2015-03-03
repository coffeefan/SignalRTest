'use strict';

/**
 * @ngdoc function
 * @name srtestApp.controller:SignalRAngularCtrl
 * @description
 * # SignalRAngularCtrl
 * Controller of the srtestApp
 */
angular.module('srtestApp')
    .factory('SignalRSvc', function ($http,$rootScope) {
        return {
            proxy: null,
            initialize: function (acceptGreetCallback) {
                //Getting the connection object
                var connection =  $.hubConnection('http://localhost:9589');

                //Creating proxy
                this.proxy = connection.createHubProxy('helloWorldHub');

                //Publishing an event when server pushes a greeting message
                this.proxy.on('acceptGreet', function (message) {
                    console.log('new message');
                    $rootScope.$apply(function () {
                        acceptGreetCallback(message);
                    });
                });

                //Starting connection
                connection.start()
                    .done(function(){ console.log('Now connected, connection ID=' + connection.id); })
                    .fail(function(){ console.log('Could not Connect!'); });
                console.log('master');
            },
            sendRequest: function () {
                //Invoking greetAll method defined in hub
                this.proxy.invoke('greetAll');
            }
        };
    }).value('version','0.1')

    .controller('SignalRAngularCtrl', function ($scope,SignalRSvc) {
        console.log('hello');

        $scope.text ='olé';

        $scope.greetAll = function () {
            console.log('hello');
            SignalRSvc.sendRequest();
            console.log('hello');
        };

        var updateGreetingMessage = function (text) {
            $scope.text = text;
        };

        SignalRSvc.initialize(updateGreetingMessage);
    });
