//Global variables
var menuList = ["Portfolio", "Contact", "About"]


//Script begin
Init();

function Init() {
    for (var i = 0; i < menuList.length; i++){
        $("#menuList").append($("<li class='list-group-item menu-item'>"+ menuList[i] +"</li>"));
        $(".menu-item").click(){
            
        }
    }
};