function compute()
{
    var principal = document.getElementById("principal").value;
    validateprin(principal);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    
    var year = new Date().getFullYear()+parseInt(years);  
   
    //the main block of output and calculations
    var resulting = "<p>Interest:</p><p>If you deposit <mark>$" + Intl.NumberFormat('en-US').format(principal) + "</mark><br> at an interest rate of <mark>" + rate + "%</mark><br> You will receive an amount of <mark><b>$" + Intl.NumberFormat('en-US').format(interest) + "</b></mark><br>in the year <mark>" + year + "</mark>.";
    
    document.getElementById("result").innerHTML=resulting;


}

// fuction to validate the user-input of Prinicpal for a positive number
function validateprin(prini){
    if (prini == "" || prini <= 0)
        alert("Enter a positive number");
        document.getElementById("principal").focus();

}


// Updates the value present to the right of the slide-bar selector
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
    compute();
}
