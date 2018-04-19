/*The code below is for the scroll up button*/
window.onscroll = function() {
	scrollFunction()
};
function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("scrollupBtn").style.display = "block";
	} else {
		document.getElementById("scrollupBtn").style.display = "none";
	}
}
//button's action
function topFunction() {
	document.documentElement.scrollTop = 0;
}

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 2000); // Change image every 2 seconds
}
/*The code below is for the hamburger icon, so that once its active and you click it it displays the dropdown*/
function myFunction() {
	var x = document.getElementById("myNavi");
	if (x.className === "navi") {
		x.className += " responsive";
	} else {
		x.className = "navi";
	}
}

// javascript for slide gallery.Taken From W3schools.com
var slideIndex = 1;// slideindex with value 1
showSlides(slideIndex);//calling slide show function and setting value of n by inserting value of slide index i.e 1
//function for slides increment and decrement by pressing "<" ">"
function plusSlides(n) {
	showSlides(slideIndex += n);
}
//function for controlling present slide i.e thumbnail
function currentSlide(n) {
	showSlides(slideIndex = n);
}
//function for slide show
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");//calling slides from class my slide
	var dots = document.getElementsByClassName("demo cursor");//calling slides from class demo cursor
	var captionText = document.getElementById("caption");//calling captions from id caption
	if (n > slides.length) 
	{slideIndex = 1}
	if (n < 1) 
	{slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) //for looping slides less than the length of slides to let them not repeat when clicking cursor
		{
		slides[i].style.display = " none";
	}
	for (i = 0; i < dots.length; i++)
		{
		dots[i].className = dots[i].className.replace(" active", " ");//to make thumbnail picture active when current slide display by clicking arrow cursors
	}
	slides[slideIndex-1].style.display = " block";//display pics in block
	dots[slideIndex-1].className += " active";//to keep thumbnail pics active
	captionText.innerHTML = dots[slideIndex-1].alt;//for changing captions when change in slide
}

function myDelivery(){
	window.alert("Thank you. Your order will be arriving in 45 mins.\nAny inquiries at 083 66664444");
}
function myTakeaway(){
	window.alert("Thank you. Your order will be ready in 30 mins.\nAny inquiries at 083 66664444");
}


//javascript for map
function Myhtml(){
	var mapProperties= {
		center:new google.maps.LatLng(53.349805,-6.260310),//calling latitude and longitude method
		zoom:10,//how much want to zoom in the map when page uploaded 
	};
	var map=new google.maps.Map(document.getElementById("map"),mapProperties);//calling map method and inserting map properties variable values
}
// javascript for action upon pressing contact button
function myAlert()
	{
	alert("Kindly,Please fill in all * sections before click on submit button");
	}
// submit button javascript
function sub() {
	myWindow=window.open("");//for showing message seperate window
	myWindow.document.write("<h3>Your feedback is submitted.<br/>Thank you..</h3>");
}

// Wait for window load
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});