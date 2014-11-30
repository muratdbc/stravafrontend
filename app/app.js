(function(){
  "use strict";
  var app=angular.module("Strava",
                          ["ui.router"]);
  app.config(["$stateProvider",
              "$urlRouterProvider",
              function($stateProvider,$urlRouterProvider){
              $urlRouterProvider.otherwise("/profile");

              $stateProvider
                .state("profile",{
                  url: "/profile",
                  templateUrl: "app/profile/profileView.html"
                })
                .state("match",{
                  url: "/match",
                  templateUrl: "app/match/matchView.html"
                })
                .state("team",{
                  url: "/team",
                  templateUrl: "app/teams/teamsView.html"
                })
                .state("about",{
                  url: "/about",
                  templateUrl: "app/about/aboutView.html"
                })

              }]
            );

}());