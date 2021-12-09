function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    
    var year = new Date().getFullYear()+parseInt(years);  
   
    //document.getElementById("result").innerHTML="<p>result" + interest +"</p>";

    var resulting = "<p>If you deposit " + principal + "<br> at an interest rate of " + rate + "<br> You will receive an ammount of " + interest + "<br>in the year " + year + ".";
    
    document.getElementById("result").innerHTML=resulting;
    //window.alert(resulting)

}



function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
