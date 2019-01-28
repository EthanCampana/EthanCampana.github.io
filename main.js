var text = "Now Loading...";
 var Fact = ["Campana actually means Bell in spanish.","Ethan's favorite breed of dog is the Chow Chow.","Ethan urban skates in his spare time.","Ethan is AWS Solutions Architect Certified as of January 2019","Ethan coded this whole website in about a week!","Ethan chose to go to Purdue by looking it up on google images." ];
for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}
$(".container-fluid").hide();
let randint =Math.floor(Math.random() * Fact.length);
$("#card-text").append(Fact[randint]);
randint++;
$("#card-title").append("Fact #" + randint);

setInterval(()=> { $(".container-fluid").show();
},4500);

