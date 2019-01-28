var page = 1;


$("#HomePage").hover(function () {
      $(this).css("color","gold"); 
            
    }, function () {
        $(this).css("color","white");   
        
    }
);


$("#ProjectPage").hover(function () {
    $(this).css("color","gold"); 
      
  }, function () {
    $(this).css("color","white");    
  }
);
$("#ExperiencePage").hover(function () {
    $(this).css("color","gold"); 
;        
  }, function () {
    $(this).css("color","white");    
  }
);
$(".MainContent2").hide();
$(".MainContent3").hide();



console.log(page);
$("#HomePage").click(function (e) { 
    e.preventDefault();
    if(page == 2){
        $("#ProjectPage").css("animation-name","Shrink2"); 
        $("#HomePage").css("animation-name","Enlarge2");      
       $("#ExperiencePage").css("animation-name","Enlarge");
        $(".MainContent2").css("animation-name", "Test2");
        $("#sideNav").css("animation-play-state", "running");
        page = 1;

        console.log(page);
        setTimeout(()=>{
            $("#sideNav").css("animation-play-state", "paused");
            $("#sideNav").css("animation-name", "ColorForwards")
            $(".MainContent2").hide();
            $(".MainContent2").css("animation-name", "Test");
        }
        ,1000)
        return;
    }
    if(page == 3){
        $("#ProjectPage").css("animation-name","Enlarge"); 
        $("#HomePage").css("animation-name","Enlarge2");      
       $("#ExperiencePage").css("animation-name","Shrink2");
        $(".MainContent3").css("animation-name", "Test2");
        $("#sideNav").css("animation-play-state", "running");
        page = 1;
        console.log(page);
        setTimeout(()=>{
            $("#sideNav").css("animation-play-state", "paused");
            $("#sideNav").css("animation-name", "ColorForwards")
            $(".MainContent3").hide();
            $(".MainContent3").css("animation-name", "Test");
        }
        ,1000)
        return;
    }
   
});

$("#ProjectPage").click(function (e) { 
    e.preventDefault();
    if(page == 2){
        return
    }
    $("#ProjectPage").css("animation-name","Enlarge2"); 
     $("#HomePage").css("animation-name","Shrink");      
    $("#ExperiencePage").css("animation-name","Shrink");
    console.log(page);
    if(page == 3){
        
        $("#ProjectPage").css("animation-name","Enlarge3"); 
        $("#HomePage").css("animation-name","Shrink");      
        $("#ExperiencePage").css("animation-name","Shrink3");
        
        $(".MainContent3").css("animation-name", "Test2");
        page = 2;
        console.log(page);
        setTimeout(()=>{
    
            $(".MainContent3").hide();
            $(".MainContent3").css("animation-name", "Test");
        }
        ,1000)
        $(".MainContent2").show();
        return;
    }

    $("#sideNav").css("animation-play-state", "running");
    $(".MainContent2").show();
    page = 2;
    console.log(page);
    setTimeout(()=>{
        $("#sideNav").css("animation-play-state", "paused");
        $("#sideNav").css("animation-name", "ColorBackwards");
    },1000)
});

$("#ExperiencePage").click(function (e) { 
    e.preventDefault();
    if(page == 3){
        return
    }
    $("#ProjectPage").css("animation-name","Shrink"); 
     $("#HomePage").css("animation-name","Shrink");      
    $("#ExperiencePage").css("animation-name","Enlarge2");
    console.log(page);
    if(page == 2){

        $("#ProjectPage").css("animation-name","Shrink3"); 
        $("#HomePage").css("animation-name","Shrink");      
       $("#ExperiencePage").css("animation-name","Enlarge3");
        $(".MainContent2").css("animation-name", "Test2");
        console.log(page);
        page = 3;
        console.log(page);
        setTimeout(()=>{
    
            $(".MainContent2").hide();
            $(".MainContent2").css("animation-name", "Test");
        }
        ,1000)
        $(".MainContent3").show();
        return;
    }

    $("#sideNav").css("animation-play-state", "running");
    $(".MainContent3").show();
    page = 3;
    console.log(page);
    setTimeout(()=>{
        $("#sideNav").css("animation-play-state", "paused");
        $("#sideNav").css("animation-name", "ColorBackwards");
    },1500)
    
});