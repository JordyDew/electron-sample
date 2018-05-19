/**
 * This file takes care of the 
 **/
function runprogram(exe)
{
    // Set input and output vairables
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    
    // Empty the output
    output.innerHTML = "";
    
    // Execute the asked command
    executor("bin/" + exe + ".exe", [input.value], function (txt) {
        output.innerHTML = txt;
    });
}