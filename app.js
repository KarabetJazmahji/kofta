$(window).on("load",function() {
  $("#container").css("display", "none");
});

let ImagesArray = ["./images/baklava.jpg" , "./images/view.jpg" , "./images/falafel.jpg" ,
                   "./images/kebab.jpg" , "./images/hummus.jpg" , "./images/lentil.jpg" ,
                   "./images/shewarma.jpg" , "./images/dolma.jpg" , "./images/worker.jpeg"];

let index = 0;

function openBox(){
    document.getElementById("box").style.display = "block";
    document.getElementById("img").style.display = "block";
    document.getElementById("img").src = ImagesArray[index];
}

function closeBox(){
    document.getElementById("box").style.display = "none";
}

function forward(){
   index = index + 1;
   if(index < ImagesArray.length){
   document.getElementById("img").src = ImagesArray[index];
   }
   else{
    index = 0;
    document.getElementById("img").src = ImagesArray[index];
   }
}

function openCalendar(){
    document.getElementById("calendar").style.display = "block";
    document.getElementById("calendar").style.visibility = "visible";
}

function closeCalendar(){
    document.getElementById("calendar").style.visibility = "hidden";
    document.getElementById("calendar").style.display = "none";

}


function displayDate(){
    d = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    document.getElementById("date_txt").innerHTML =  months[d.getMonth()]+ " " + d.getDate() + ", " + d.getFullYear();
}

window.onload = displayDate;


function forwardCalendar(){
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    index = index + 1;
    if(index < months.length){
      document.getElementById(months[index-1]).style.display = "none";
      document.getElementById(months[index]).style.visibility = "visible";
    }
    else{
      alert("no reservations for next year!!");
      document.getElementById("calendar").style.display = "none";
      location.reload();
    }
    
 }

 function takevalue(){ 
    $('td').click(function(e){
      var attr = $(this).attr("title");
      document.getElementById("date").value = attr;
      document.getElementById("date_txt").innerHTML = attr;
      if(attr ==undefined){
        document.getElementById("date_txt").innerHTML = " ";
      }
    });
 }

 document.querySelectorAll(".undisplay-class").forEach(item =>{
     item.addEventListener("click", function(){
    document.getElementById("calendar").style.visibility = "hidden";
  })
});




$(document).ready(function(){
  $("#find-table").click(function(){
    $("#personal-section").css("visibility","visible");
  });
});


function dropdown() {
  var x = document.getElementById("dropdown");
  if (x.className === "nav-menu") {
    $(".icon i").addClass("fa fa-times");
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
    $(".icon i").removeClass("fa fa-times");
    $(".icon i").addClass("fa fa-bars");
  }
}




