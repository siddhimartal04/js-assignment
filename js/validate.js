// Get elements by id

var submit=document.getElementById('submit');
var fname=document.getElementById('firstname');
var lname=document.getElementById('lastname');
var about=document.getElementById('aboutyou');
var opt1 = document.getElementById("checkbox_sample18");
var opt2 = document.getElementById("checkbox_sample19");
var opt3= document.getElementById("checkbox_sample20");
var genderM=document.getElementById("residence1");
var genderF=document.getElementById("residence2");
var mobn = document.getElementById("phone");
var offn = document.getElementById("office");
var emails = document.getElementById('email');
var password = document.getElementById('pass');
var confirmpass = document.getElementById('conpass');
var yearr=document.getElementById('year');
var monthh=document.getElementById('month');
var dayy=document.getElementById('day');
var setAge=document.getElementById('age');
window.location.reload=function() {
    document.getElementsById('firstname').value=" ";
}
  

// Event Listener
submit.addEventListener('click',function(e){
    // e.preventDefault();
FirstNameCheck();
LastNameCheck();
PhoneCheck();

EmailCheck();
PassCheck();
ConfirmPassCheck();
AgeCheck();

GenderCheck();
InterestCheck();
AboutCheck();


});

// //Validate function
// function validateform(){  
//     var fnameval=fname.value;
//     var lnameval=lname.value;
//     var alphabets = /^[A-Za-z]+$/;
//     var emailval=emails.value;
//     var aboutval=about.value;
//     var mobnval=mobn.value;
//     var offnval=offn.value;
//     var num = /^[0-9]+$/;
//     var alphanum = /^[a-zA-Z0-9]+$/;
//     var passval=password.value;
//     var confirmpassval=confirmpass.value;
//     var yearVal=yearr.value;
//     var monthVal=monthh.value;
//     var dayVal=dayy.value;
    

//     // first name validation
//     if (fnameval===''){  
//         document.getElementById('f_name').innerHTML ="** Please enter your first name.";
//     }
//     else if (!(fnameval.match(alphabets))){  
//         document.getElementById('f_name').innerHTML ="**First name cannot contain numbers";   
//     }
//     else if (fnameval.length <3||fnameval.length>12){  
//         document.getElementById('f_name').innerHTML ="**First name length should be between 3 to 12 characters"; 
//     }
//     else{
//         document.getElementById('f_name').innerHTML =" ";
//     }

//      // last name validation
//      if (lnameval===''){  
//         document.getElementById('l_name').innerHTML ='**Please enter your last name.';
//     }
//     else if (!(lnameval.match(alphabets))){  
//         document.getElementById('l_name').innerHTML ="**Last name cannot contain numbers";   
//     }
//     else if (lnameval.length <3||lnameval.length>12){  
//         document.getElementById('l_name').innerHTML ="**Last name length should be between 3 to 12 characters"; 
//     }
//     else{
//         document.getElementById('l_name').innerHTML =" ";
//     }

//     // phone number validation
//     if (mobnval == ""){document.getElementById('mobile').innerHTML ="**Provide Phone number";}
//     else if (!(mobnval.match(num))){document.getElementById('mobile').innerHTML ="**Phone number must be numeric"; }
//     else if (mobnval.length != 10){document.getElementById('mobile').innerHTML ="**Phone number must be 10 digit"; }
//     else{
//         document.getElementById('mobile').innerHTML =" ";
//     }

//     // office number validation
//     if (!(offnval.match(num))){document.getElementById('office_no').innerHTML ="**Office number must be numeric"; }
//     else{
//         document.getElementById('office_no').innerHTML =" ";
//     }


// first name validation    
var FirstNameCheck = function() {
    var fnameval=fname.value;
    var alphabets = /^[A-Za-z]+$/;
    if (fnameval===''){  
        document.getElementById('f_name').innerHTML ="** Please enter your first name.";
    }
    else if (!(fnameval.match(alphabets))){  
        document.getElementById('f_name').innerHTML ="**First name cannot contain numbers or special characters";   
    }
    else if (fnameval.length <3||fnameval.length>12){  
        document.getElementById('f_name').innerHTML ="**First name length should be between 3 to 12 characters"; 
    }
    else{
        document.getElementById('f_name').innerHTML =" ";
    }
  }

  // last name validation
  var LastNameCheck = function() {
    var lnameval=lname.value;
    var alphabets = /^[A-Za-z]+$/;
    if (lnameval===''){  
        document.getElementById('l_name').innerHTML ="** Please enter your last name.";
    }
    else if (!(lnameval.match(alphabets))){  
        document.getElementById('l_name').innerHTML ="**Last name cannot contain numbers or special characters";   
    }
    else if (lnameval.length <3||lnameval.length>12){  
        document.getElementById('l_name').innerHTML ="**Last name length should be between 3 to 12 characters"; 
    }
    else{
        document.getElementById('l_name').innerHTML =" ";
    }
  }

  // Phone number validation
  var PhoneCheck = function() {
    var mobnval=mobn.value;
    var num = /^[0-9]+$/;
    if (mobnval == ""){document.getElementById('mobile').innerHTML ="**Provide phone number";}
else if (!(mobnval.match(num))){document.getElementById('mobile').innerHTML ="**Phone number must be numeric"; }
else if (mobnval.length != 10){document.getElementById('mobile').innerHTML ="**Phone number must be 10 digit"; }
else{
    document.getElementById('mobile').innerHTML =" ";
}
  }

  function restrictAlphabets(e){
    var x = e.which || e.keycode; //which is used for unicode value
    if((x>=48 && x<=57))
        return true;
    else
        return false;
}


// Office number validation
  var OfficeCheck = function() {
    var offnval=offn.value;
    var num = /^[0-9]+$/;
    if (!(offnval.match(num))){document.getElementById('office_no').innerHTML ="**Office number must be numeric"; }
    else if (offnval.length != 10){document.getElementById('office_no').innerHTML ="**Office number must be 10 digit"; }
    else{
            document.getElementById('office_no').innerHTML =" ";
        }
  }

    // email id validation
    var EmailCheck = function() {
        var emailval=emails.value;
        var mailformat = /^[A-Za-z]{1}[A-Za-z0-9_.]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;;
        


        if(emailval===''){
            document.getElementById('emailids').innerHTML ="Please enter your email id";
        }else if (!emailval.match(mailformat)){
            document.getElementById('emailids').innerHTML ="Please enter valid email id";
        }else {
            document.getElementById('emailids').innerHTML ="";
        }
}

     // password  validation
     var PassCheck = function() {
        var passval=password.value;
        var confirmpassval=confirmpass.value;
        var alphanum =/^(?=.*?[A-Za-z])(?=.*?[0-9])[A-Za-z0-9]+$/;
        document.getElementById('passwords').innerHTML =" ";	
    if(passval === ''){
        document.getElementById('passwords').innerHTML =" ** Please fill the password field";
    }

    else if((passval.length >12) || (passval.length < 8)) {
        document.getElementById('passwords').innerHTML =" ** Password lenght must be between  8 and 12";	
    }
    else if(!(passval.match(alphanum)) ){
        document.getElementById('passwords').innerHTML =" ** Password must be alphanumeric";	
    }

    else if(passval!=confirmpassval){
        document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
    }
    else  {
        document.getElementById('passwords').innerHTML =" ";	
    }
    }

    //password show text on eye click
    var ShowText = function(x) {
       
        if(password.type=== "password"){
            
            password.type="text";
            x.classList.toggle("fa-eye-slash");
        }
        else{
            password.type="password";
        }
    }


     // confirm password validation
     var ConfirmPassCheck = function() {
        var passval=password.value;
        var confirmpassval=confirmpass.value;
    if(confirmpassval == ""){
        document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
    }
    else if(passval!=confirmpassval){
        document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
    }
    else  {
    document.getElementById('confrmpass').innerHTML =" ";	
    }
}

    // gender validation
    var GenderCheck = function() {
    if(genderM.checked==false && genderF.checked==false ) {
        document.getElementById('gender').innerHTML ="**You must select male or female";
            
    }
    else{
        document.getElementById('gender').innerHTML =" ";
    }
}

    // interests validation
    var InterestCheck = function() {
    if (!(opt1.checked) && !(opt2.checked) && !(opt3.checked))
    {
        document.getElementById('interest').innerHTML ="**Provide atleast one interest"; 
        } 
        else{
            document.getElementById('interest').innerHTML =" ";
        }
    }

     // About You validation
     var AboutCheck = function() {
        var aboutval=about.value;
     if (aboutval===''){  
        document.getElementById('about').innerHTML ="**Please enter this field";
    }
    else  if(aboutval.indexOf(' ') == 0 ){
        document.getElementById('about').innerHTML ="**Remove extra space from the beginning of the text";}
    else{
        document.getElementById('about').innerHTML =" ";
    }
}
var validateDate=function() {
    let monthVal = monthh.value;
    let dayVal = parseInt(dayy.value);
    let yearVal = parseInt(yearr.value); 
    // console.log(monthVal,dayVal,yearVal);

    // Months With 30 days---------------

    if (monthVal ==3 || monthVal == 5 || monthVal == 8 || monthVal == 10) {
        if (dayVal > 30) {
            document.getElementById('date_er').innerHTML ="**Invalid date";
            AgeCheck(false);
            
        }
        else{
            document.getElementById('date_er').innerHTML =" ";
            AgeCheck();
        }
    }

    // Check Leap Year or Not---------

   else if (monthVal == 1) {
        let leapYear = false;
        // console.log('Feb');

        if ( ( ((yearVal % 4) == 0) && ((yearVal % 100) != 0) )|| ((yearVal % 400) == 0) ) {
            leapYear = true;
            // console.log('Leap');
        }


        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            document.getElementById('date_er').innerHTML ="**Invalid date";
            AgeCheck(false);
            // setAge.value = '';
            
        }
        // else{
        //     document.getElementById('date_er').innerHTML =" ";
        // }
        // if Year is not a Leap year then day should not be greater than 28-----

        else if ((leapYear == false) && dayVal >28) {
            document.getElementById('date_er').innerHTML ="**Invalid date";
            // console.log('Not leap but greater that 28');
            AgeCheck(false);
            
            // setAge.value = '';
            
        }
        else{
            document.getElementById('date_er').innerHTML =" ";
            AgeCheck();
        }

    }
    else{
        document.getElementById('date_er').innerHTML =" ";
        AgeCheck();
    }
}
// var DateCheck=function(){
//     var monthVal=monthh.value;
//     var dayVal=parseInt(dayy.value);  
//     let yearVal=parseInt(year.value);  
//     if(monthVal=='april')
// }
var AgeCheck = function() {
        var yearVal=yearr.value;
    var monthVal=monthh.value;
    var dayVal=dayy.value;    
    // let monthIndex=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
    let crrDate=new Date();
    var birthDate=new Date(yearVal,monthVal,dayVal);
    console.log(birthDate);
    // var daysinmonth=new Date(yearVal,monthIndex.indexOf(monthVal)+1,0).getDate();
    let diffInMS=crrDate.valueOf() -birthDate.valueOf();
    let age=Math.floor(diffInMS /(1000*60*60*24*365.25));
    let days=Math.floor(diffInMS %(1000*60*60*24*365.25))/(1000*60*60*24);
    let months=Math.floor(days/30)/100;
    ageValue=age+months;
    setAge.value=ageValue;
    setAgeInt=Math.floor(setAge.value);

    if(ageValue<0){
        setAge.value="";

    }
    else 
    {
        setAge.value=ageValue;
    }

    if(setAgeInt<0){
        document.getElementById('agee').innerHTML =" ";
        document.getElementById('date_er').innerHTML ="**Birth date should be on or before today's date";
    }
    else if(setAgeInt<18){
        document.getElementById('agee').innerHTML ="**Your age should be 18 or above";
        document.getElementById('date_er').innerHTML =" ";
    }
    
    else{
        document.getElementById('agee').innerHTML =" ";
    }

}


    

      // year options
      for(var i=1950; i<=(new Date()).getFullYear(); i++){
        var select = document.getElementById("year");
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = i;
        option.value = i;
    }

    var dispDays =function() {
    var yearVal=parseInt(yearr.value);
    var monthVal=parseInt(monthh.value);
    var select = document.getElementById("day");
    select.innerHTML="";    //to reset list so that dropdown options don't keep appending
    var daysinmonth=new Date(yearVal,monthVal+1,0).getDate();
    // console.log(yearVal,monthVal,daysinmonth);
    for(var i=1; i<=daysinmonth; i++){ 
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = i;
        option.value = i;
    }
    AgeCheck();
}
