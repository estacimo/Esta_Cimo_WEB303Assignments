function JSONPage()
{
   $.getJSON('team.json', function(team)
    {
      $.each(team, function(index,value)
        { 
             let name = $('<h2>' + value.name + '</h2>');
             let position = $('<h5>' + value.position + '</h5>');
             let bio = $('<p>' + value.bio + '</p>');
             $('#team').append(name, position, bio);
        });
    });
}
function retrieveData() 
{
   $.ajax({
        type: "GET", 
        url: "team.json",
        dataType: "json",
        timeout: 3000, 
       
        beforeSend: function () 
        {
            $("#team").text("Loading...");
        },
     
        error: function () 
        {
            $("#team").text("Error: content is unretrievable.");
        },
     
        success: function (team) 
        {
            $('#team').empty();
            $.each(team, function (index, value) 
            {
                let name = $("<h2>" + value.name + "</h2>");
                let position = $("<h5>" + value.position + "</h5>");
                let bio = $("<p>" + value.bio + "</p>");
 
                $("#team").append(name, position, bio);
            });
        }
    });
}

$(function() {
    retrieveData();
});