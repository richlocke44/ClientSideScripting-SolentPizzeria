var myIndex = 0;
carousel();

function carousel() {
    var change;
    // Grab the 'slides' divs
    var slide = document.getElementsByClassName("slides");
    // Hides other slide images
    for (change = 0; change < slide.length; change++) {
       slide[change].style.display = "none";  
    }
    // Displays next slide image
    myIndex++;
    if (myIndex > slide.length) {myIndex = 1}    
    slide[myIndex-1].style.display = "block";  
    // This chnages the image every 3 seconds
    setTimeout(carousel, 3000);
}


//rollover image 1
function rollover1(my_image)
    {

        my_image.src = "images/homepizzatopping2.jpg";

    }
	
function rollout1(my_image){
	my_image.src = "images/homepizzatopping.png";
}
//rollover image 2
function rollover2(my_image)
    {

        my_image.src = "images/homepizzatopping3.jpg";

    }
	
function rollout2(my_image){
	my_image.src = "images/rolloverpizza.jpg";
}
//rollover image 3	
function rollover3(my_image)
    {

        my_image.src = "images/hotwings.jpg";

    }
	
function rollout3(my_image){
	my_image.src = "images/fast-food-1839052_640.jpg";
}
//rollover image 4
function rollover4(my_image)
    {

        my_image.src = "images/fantacan.jpg";

    }
	
function rollout4(my_image){
	my_image.src = "images/cokecan.jpg";
}