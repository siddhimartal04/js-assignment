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

// Event Listener
submit.addEventListener('click',function(e){
    e.preventDefault();
    validateform();

});

//Validate function
function validateform(){  
    var fnameval=fname.value;
    var lnameval=lname.value;
    var alphabets = /^[A-Za-z][A-Za-z ]+$/;
    var emailval=emails.value;
    var aboutval=about.value;
    var mobnval=mobn.value;
    var offnval=offn.value;
    var num = /^[0-9]+$/;
    var alphanum = /^[a-zA-Z0-9]+$/;
    var passval=password.value;
    var confirmpassval=confirmpass.value;
    var yearVal=yearr.value;
    var monthVal=monthh.value;
    var dayVal=dayy.value;
    

    // first name validation
    if (fnameval===''){  
        document.getElementById('f_name').innerHTML ="** Please enter your first name.";
    }
    else if (!(fnameval.match(alphabets))){  
        document.getElementById('f_name').innerHTML ="**First name cannot contain numbers";   
    }
    else if (fnameval.length <3||fnameval.length>12){  
        document.getElementById('f_name').innerHTML ="**First name length should be between 3 to 12 characters"; 
    }
    else{
        document.getElementById('f_name').innerHTML =" ";
    }

     // last name validation
    if (lnameval===''){  
        document.getElementById('l_name').innerHTML ='**Please enter your last name.';
    }
    else if (!(lnameval.match(alphabets))){  
        document.getElementById('l_name').innerHTML ="**Last name cannot contain numbers";   
    }
    else if (lnameval.length <3||lnameval.length>12){  
        document.getElementById('l_name').innerHTML ="**Last name length should be between 3 to 12 characters"; 
    }
    else{
        document.getElementById('l_name').innerHTML =" ";
    }

    // phone number validation
    if (mobnval == ""){document.getElementById('mobile').innerHTML ="**Provide Phone number";}
    else if (!(mobnval.match(num))){document.getElementById('mobile').innerHTML ="**Phone number must be numeric"; }
    else if (mobnval.length != 10){document.getElementById('mobile').innerHTML ="**Phone number must be 10 digit"; }
    else{
        document.getElementById('mobile').innerHTML =" ";
    }

    // office number validation
    if (!(offnval.match(num))){document.getElementById('office_no').innerHTML ="**Office number must be numeric"; }
    else{
        document.getElementById('office_no').innerHTML =" ";
    }
    

    // email id validation
    if(emailval === ''){
        document.getElementById('emailids').innerHTML =" ** Please fill the email id field";
        
    }
   else  if(emailval.indexOf('@') <= 0 ){
        document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
       
    }

   else if((emailval.charAt(emailval.length-4)!='.') && (emailval.charAt(emailval.length-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . Invalid Position";
      
    }
    else{
        document.getElementById('emailids').innerHTML =" ";
    }

     // password  validation
    if(passval === ''){
        document.getElementById('passwords').innerHTML =" ** Please fill the password field";
    }

    else if((passval.length >12) || (passval.length < 8)) {
        document.getElementById('passwords').innerHTML =" ** Passwords lenght must be between  8 and 12";	
    }
    else if(!(passval.match(alphanum)) ){
        document.getElementById('passwords').innerHTML =" ** Password must be alphanumeric";	
    }
    else  {
        document.getElementById('passwords').innerHTML =" ";	
    }

     // confirm password validation
    if(confirmpassval == ""){
        document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
    }
    else if(passval!=confirmpassval){
        document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
    }
    else  {
    document.getElementById('confrmpass').innerHTML =" ";	
    }

    // gender validation
    if(genderM.checked==false && genderF.checked==false ) {
        document.getElementById('gender').innerHTML ="**You must select male or female";
            
    }
    else{
        document.getElementById('gender').innerHTML =" ";
    }

    // interests validation
    if (!(opt1.checked) && !(opt2.checked) && !(opt3.checked))
    {
        document.getElementById('interest').innerHTML ="**Provide atleast one interest"; 
        } 
        else{
            document.getElementById('interest').innerHTML =" ";
        }

     // About You validation
     if (aboutval===''){  
        document.getElementById('about').innerHTML ="**Please enter this field";
    }

    let monthIndex=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
    let crrDate=new Date();
    let birthDate=new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
    let diffInMS=crrDate.valueOf() -birthDate.valueOf();
    let age=Math.floor(diffInMS /(1000*60*60*24*365.25));
    let days=Math.floor(diffInMS %(1000*60*60*24*365.25))/(1000*60*60*24);
    let months=Math.floor(days/30)/100;
    ageValue=age+months;
    setAge.value=ageValue;
    console.log(setAge.value);




    }  

    