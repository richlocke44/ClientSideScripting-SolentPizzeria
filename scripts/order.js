function main() {

    var form = document.getElementById("order");
    form.addEventListener("change", formChanged);
	
	
  }


  function formChanged(event){
	 var form = document.getElementById("order");
     var total = 0;
	 var pizza = "";
	 var topping = "";	 
	 var extra = "";
	 var drink = "";

     for(var i = 0; i < form.size.length; i++) {

         if (form.size[i].checked){
            //convert the data attribute value from a string to a int
            itemPrice = parseFloat(form.size[i].dataset.price );
            //update total 
            total = total + itemPrice;
            //concatinate the new choice to our choices string 
            pizza = pizza + "<p>" + form.size[i].dataset.humanDesc   +  "<p>";
			
         }
		 
     }
	 document.getElementById("pizza").innerHTML = pizza;
     document.getElementById("price").innerHTML = "£" + total;
	 
	 
	 for(var i = 0; i < form.topping.length; i++) {

         if (form.topping[i].checked){
            //convert the data attribute value from a string to a int
            itemPrice = parseFloat(form.topping[i].dataset.price );
            //update total 
            total = total + itemPrice;
            //concatinate the new choice to our choices string 
            topping = topping + "<p>" + form.topping[i].dataset.humanDesc   +  "<p>";
			
         }
     }

		document.getElementById("pizza2").innerHTML = topping;
		document.getElementById("price").innerHTML = "£" + total;
		
		
		for(var i = 0; i < form.extra.length; i++) {

         if (form.extra[i].checked){
            //convert the data attribute value from a string to a int
            itemPrice = parseFloat(form.extra[i].dataset.price );
            //update total 
            total = total + itemPrice;
            //concatinate the new choice to our choices string 
            extra = extra + "<p>" + form.extra[i].dataset.humanDesc   +  "<p>";
			
         }
     }
	 document.getElementById("extra").innerHTML = extra;
	 document.getElementById("price").innerHTML = "£" + total;
	 
	 
	 for(var i = 0; i < form.drink.length; i++) {

         if (form.drink[i].checked){
            //convert the data attribute value from a string to a int
            itemPrice = parseFloat(form.drink[i].dataset.price );
            //update total 
            total = total + itemPrice;
            //concatinate the new choice to our choices string 
            drink = drink + "<p>" + form.drink[i].dataset.humanDesc   +  "<p>";
			
         }
     }
	 document.getElementById("drink").innerHTML = drink;
	 document.getElementById("price").innerHTML = "£" + total;
	 console.log("form complete");
   }
   function validate() {

    console.log("in main function");
    var myForm  = document.getElementById("order");
    myForm.addEventListener("submit",validateForm);
  }
  
   function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("order"); 

    if (myForm.address1.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("address1RequiredError").style.display = "inline";
		document.getElementById("address1").style.backgroundColor = "#900";
		document.getElementById("cross").style.display = "inline";
		document.getElementById("tick").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } 
	else {
		// removes 'required' + displays green tick + hides red cross 
		 document.getElementById("address1RequiredError").style.display = "none";
		 document.getElementById("address1").style.backgroundColor = "green";
		 document.getElementById("tick").style.display = "inline";
		 document.getElementById("cross").style.display = "none";
		 
	
    }
	
	if (myForm.address2.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("address2RequiredError").style.display = "inline";
		document.getElementById("address2").style.backgroundColor = "#900";
		document.getElementById("cross2").style.display = "inline";
		document.getElementById("tick2").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } 
	else {
		// removes 'required' + displays green tick + hides red cross 
		 document.getElementById("address2RequiredError").style.display = "none";
		 document.getElementById("address2").style.backgroundColor = "green";
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
    } 
	else {
		// removes 'required' + displays green tick + hides red cross 
		 document.getElementById("postcodeRequiredError").style.display = "none";
		 document.getElementById("postcode").style.backgroundColor = "green";
		 document.getElementById("tick3").style.display = "inline";
		 document.getElementById("cross3").style.display = "none";
		 
	
    }
	
	if (myForm.number.value === "") {
        formValid = false;
        //display error message + changes background colour to red + displays red cross + keeps green tick hidden
        document.getElementById("numberRequiredError").style.display = "inline";
		document.getElementById("number").style.backgroundColor = "#900";
		document.getElementById("cross4").style.display = "inline";
		document.getElementById("tick4").style.display = "none";	
        //stop form from submitting
        event.preventDefault();
    } 
	else {
		// removes 'required' + displays green tick + hides red cross 
		 document.getElementById("numberRequiredError").style.display = "none";
		 document.getElementById("number").style.backgroundColor = "green";
		 document.getElementById("tick4").style.display = "inline";
		 document.getElementById("cross4").style.display = "none";
		 
	
    }
	
	}
	
   function keyDown() {
	  document.getElementById("address1").addEventListener("textInput", green);
	  document.getElementById("address2").addEventListener("textInput", green2);
	  document.getElementById("postcode").addEventListener("textInput", green3);
	  document.getElementById("number").addEventListener("textInput", green4);
	  
  }
  //displays background colour of input fields to green
  function green() {
	  document.getElementById("address1").style.backgroundColor = "green";
  }
  function green2() {
	  document.getElementById("address2").style.backgroundColor = "green";
  }
  function green3() {
	  document.getElementById("postcode").style.backgroundColor = "green";
  }
  function green4() {
	  document.getElementById("number").style.backgroundColor = "green";
  }
   
   // changes background colour of input field to #900(dark red) when field is focused on/selected
function changeRed() {
	var input = document.getElementById("address1").value;
	var input2 = document.getElementById("address2").value;
	var input3 = document.getElementById("postcode").value;
	var input4 = document.getElementById("number").value;
	
	if (input === "") {
		document.getElementById("address1").addEventListener("focusin", myFocusFunction);	
		}
	if (input2 === "") {
		document.getElementById("address2").addEventListener("focusin", myFocusFunction2);	
		}
	if (input3 === "") {
		document.getElementById("postcode").addEventListener("focusin", myFocusFunction3);	
		}
	if (input4 === "") {
		document.getElementById("number").addEventListener("focusin", myFocusFunction4);	
		}
		
}
function myFocusFunction() {
    document.getElementById("address1").style.backgroundColor = "#900";  
}
function myFocusFunction2() {
    document.getElementById("address2").style.backgroundColor = "#900";  
}
function myFocusFunction3() {
    document.getElementById("postcode").style.backgroundColor = "#900";  
}
function myFocusFunction4() {
    document.getElementById("number").style.backgroundColor = "#900";  
}

function reset() {
	  var form = document.getElementById("order");
    form.addEventListener("reset", resetForm);
	
	
  }
  function resetForm(event){
	  document.getElementById("order").reset()
  }
   