var fs = require('fs');



fs.readdir("./", (err, files) => {
    files.forEach(file => {
        var filename = file.split("/")[file.split("/").length - 1]
        
        if(filename.split(" ").length >= 2){
            console.log("has space",file.split(" ").join("-"));
            fs.rename(file, file.split(" ").join("-"), function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
        }
            
            else
            console.log("ok with: ",file);
    });
  });