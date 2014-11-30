$(document).ready(function(){

  var url=window.location.href.split("=");
  var code=url[2];
  mydata=JSON.stringify({code:code})
  console.log(mydata);
    $.ajax({
      url:"https://strva.herokuapp.com/api/v1/tokens",
      type:"post",
      contentType: "application/json",
      data:mydata
        }).done(function(server_data){
          var token=server_data["token"];
          var strava_id=server_data["strava_id"];
          console.log("Authorization", "Bearer "+token);
          $.getJSON( "https://www.strava.com/api/v3/athlete?access_token="+token+"&callback=?", function (data) {
            console.log(data);
              });
          });
});