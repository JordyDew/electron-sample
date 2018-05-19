/**
 * This file takes care of the execution itself
 * @param {string} exe - the path to the executable
 * @param {array} args - the arguments needed for the executable
 * @param {function} callback - - The code that runs when the script finishes
 **/
 
 function executor(exe, args, callback)
 {
     // Add the Node.JS Child-Process module to make this work
     var chpr = require('child_process');
     
     // Now, execute all it
     chpr.execFile(exe, args, function(error, stdout, stderr) {
         // This contains some error handling, but it doesn't make it more difficult
         // IF there is an error- either eror or stderr- write it to the console
         // When everything's okay, send it back to the runprogram function which edits the view
         if(error) console.log(error);
         if(stderr) console.log(steerr);
         if(callback) callback(stdout);
     });
 }