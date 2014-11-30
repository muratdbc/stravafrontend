(function(){
  "use strict";
  angular
    .module("Strava")
    .controller("ProfileCtrl",function($scope,$http){
      //Refactor this please.Too brittle
      var code=window.location.href.split("=")[2].split("#")[0];
      console.log(code);
      $http.post('https://strva.herokuapp.com/api/v1/tokens',{code:code}).success(function(data,status,header,config){
        $scope.profile=data;
          var url="https://www.strava.com/api/v3/athlete?access_token="+$scope.profile.token+"&callback=JSON_CALLBACK";
          console.log(url);
          $http.jsonp(url).success(function(stravadata){
            console.log(stravadata)
            $scope.stravaProfile=stravadata;
          });
      });
    });
}());