//onload callback function
 function validate() {

    console.log("in main function");
    var myForm  = document.getElementById("send");
    myForm.addEventListener("submit",validateForm);
  }

  //validate callback function 
  function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("send"); 

    if (myForm.firstname.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("firstnameRequiredError").style.display = "inline";
		document.getElementById("firstname").style.backgroundColor = "#900";
		document.getElementById("cross").style.display = "inline";
		document.getElementById("tick").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross 
		 document.getElementById("firstnameRequiredError").style.display = "none";
		 document.getElementById("firstname").style.backgroundColor = "green";
		 document.getElementById("tick").style.display = "inline";
		 document.getElementById("cross").style.display = "none";
	
    } 		

    if (myForm.lastname.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden 
        document.getElementById("lastnameRequiredError").style.display = "inline";
		document.getElementById("lastname").style.backgroundColor = "#900";
		document.getElementById("cross2").style.display = "inline";
		document.getElementById("tick2").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross
         document.getElementById("lastnameRequiredError").style.display = "none";
		 document.getElementById("lastname").style.backgroundColor = "green";
		 document.getElementById("tick2").style.display = "inline";
		 document.getElementById("cross2").style.display = "none";
    }
	
	if (myForm.postcode.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden 
        document.getElementById("postcodeRequiredError").style.display = "inline";
		document.getElementById("postcode").style.backgroundColor = "#900";
		document.getElementById("cross3").style.display = "inline";
		document.getElementById("tick3").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross
         document.getElementById("postcodeRequiredError").style.display = "none";
		 document.getElementById("postcode").style.backgroundColor = "green";
		 document.getElementById("tick3").style.display = "inline";
		 document.getElementById("cross3").style.display = "none";
    }
	
	if (myForm.email.value === "") {
        formValid = false;
        //display error message  + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("emailRequiredError").style.display = "inline";
		document.getElementById("email").style.backgroundColor = "#900";
		document.getElementById("cross4").style.display = "inline";
		document.getElementById("tick4").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross
         document.getElementById("emailRequiredError").style.display = "none";
		 document.getElementById("email").style.backgroundColor = "green";
		 document.getElementById("tick4").style.display = "inline";
		 document.getElementById("cross4").style.display = "none";
    }
	
	if (myForm.number.value === "") {
        formValid = false;
        //display error message  + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("numberRequiredError").style.display = "inline";
		document.getElementById("number").style.backgroundColor = "#900";
		document.getElementById("cross5").style.display = "inline";
		document.getElementById("tick5").style.display = "none";	
		//stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross
         document.getElementById("numberRequiredError").style.display = "none";
		 document.getElementById("number").style.backgroundColor = "green";
		 document.getElementById("tick5").style.display = "inline";
		 document.getElementById("cross5").style.display = "none";
    }
	
	if (myForm.message.value === "") {
        formValid = false;
        //display error message  + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("messageRequiredError").style.display = "inline";
		document.getElementById("cross6").style.display = "inline";
		document.getElementById("tick6").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' + displays green tick + hides red cross
         document.getElementById("messageRequiredError").style.display = "none";
		 document.getElementById("tick6").style.display = "inline";
		 document.getElementById("cross6").style.display = "none";
    }

  }
  //changes the background colour of the input fields when a key is pressed down
  function keyDown() {
	  document.getElementById("firstname").addEventListener("textInput", green);
	  document.getElementById("lastname").addEventListener("textInput", green2);
	  document.getElementById("postcode").addEventListener("textInput", green3);
	  document.getElementById("email").addEventListener("textInput", green4);
	  document.getElementById("number").addEventListener("textInput", green5);
	  document.getElementById("postcodeRequiredError").style.display = "none";
	  document.getElementById("cross").style.display = "none";
  }
  //displays background colour of input fields to green
  function green() {
	  document.getElementById("firstname").style.backgroundColor = "green";
  }
  function green2() {
	  document.getElementById("lastname").style.backgroundColor = "green";
  }
  function green3() {
	  document.getElementById("postcode").style.backgroundColor = "green";
  }
  function green4() {
	  document.getElementById("email").style.backgroundColor = "green";
  }
  function green5() {
	  document.getElementById("number").style.backgroundColor = "green";
  }
// changes background colour of input field to #900(dark red) when field is focused on/selected
function changeRed() {
	var input = document.getElementById("firstname").value;
	var input2 = document.getElementById("lastname").value;
	var input3 = document.getElementById("postcode").value;
	var input4 = document.getElementById("email").value;
	var input5 = document.getElementById("number").value;
	
	if (input === "") {
		document.getElementById("firstname").addEventListener("focusin", myFocusFunction);	
		}
	if (input2 === "") {
		document.getElementById("lastname").addEventListener("focusin", myFocusFunction2);	
		}
	if (input3 === "") {
		document.getElementById("postcode").addEventListener("focusin", myFocusFunction3);	
		}
	if (input4 === "") {
		document.getElementById("email").addEventListener("focusin", myFocusFunction4);	
		}
	if (input5 === "") {
		document.getElementById("number").addEventListener("focusin", myFocusFunction5);	
		}	
}
function myFocusFunction() {
    document.getElementById("firstname").style.backgroundColor = "#900";  
}
function myFocusFunction2() {
    document.getElementById("lastname").style.backgroundColor = "#900";  
}
function myFocusFunction3() {
    document.getElementById("postcode").style.backgroundColor = "#900";  
}
function myFocusFunction4() {
    document.getElementById("email").style.backgroundColor = "#900";  
}
function myFocusFunction5() {
    document.getElementById("number").style.backgroundColor = "#900";  
}
//google map for solent pizzeria
 function myMap() {
  var myCenter = new google.maps.LatLng(50.9121,-1.4034);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 18};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter, animation:google.maps.Animation.BOUNCE});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Solent Pizzeria, <br>46, London Rd, <br>Southampton <br>SO15 2AH"
    });
  infowindow.open(map,marker);
  });
}