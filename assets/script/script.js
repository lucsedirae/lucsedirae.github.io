//Global variables
var menuList = ["About", "Portfolio", "Contact"]


//Script begin
Init();

function Init() {


    for (var i = 0; i < menuList.length; i++){
        $("#menu-list").append($("<li class='menu-item' id='navBtn"+i+"'>"+ menuList[i] +"</li>"));
        };
    listeners();
    }





function listeners() {
    
    
    };    


