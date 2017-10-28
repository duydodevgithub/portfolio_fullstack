
// greeting based on time 
var d = new Date();
d = d.getHours();
if(d > 18) {
    $("#sayHello").html("Good Evening! Welcome to my page");
} else if (d > 12) {
    $("#sayHello").html("Good Afternoon! Welcome to my page");
} else if (d > 0) {
    $("#sayHello").html("Good Morning! Welcome to my page");
} else {
    $("#sayHello").html("Welcome to my page!");    
}