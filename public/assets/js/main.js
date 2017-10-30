
// greeting based on time 
var d = new Date();
d = d.getHours();
if(d > 18) {
    $("#sayHello").html("Good Evening!");
} else if (d > 12) {
    $("#sayHello").html("Good Afternoon!");
} else if (d > 0) {
    $("#sayHello").html("Good Morning!");
} else {
    $("#sayHello").html("Welcome to my page!");    
}