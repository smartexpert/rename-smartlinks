// The following method will be invoked each time Ultradox executes the script
function execute(model) {
  // REPLACE THE BODY OF THIS METHOD WITH YOUR OWN CODE

  // Get input parameters from the model and assign default values if input is not set...
  var link = model.linkToTarget;
  
  // ...do some calculations...
  
  //"images.open-org.com/smartlink.php?id="
  //"phpred.herokuapp.com/smartlink.php?id="
  
  var res = link.replace("www.ultradox.com", "images.open-org.com/smartlink.php?id=");
  
  // ...and return the result
  return { url : res };
}

// Return a description of the input parameters of your script
function getInputParameters() {
  var SINGLE_VALUE = 0;
  var LIST = 1;
  var CONDITION = 2;

  // REPLACE THE FOLLOWING RETURN STATEMENT WITH YOUR INPUT PARAMETER DEFINITION
  return [
          { name : 'link',
            description : 'Ultradox URL',
            type : SINGLE_VALUE
          }
         ];
}

// Return a description of the output parameters of your script
function getOutputParameters() {
  var SINGLE_VALUE = 0;
  var LIST = 1;
  var CONDITION = 2;

  // REPLACE THE FOLLOWING RETURN STATEMENT WITH YOUR OUTPUT PARAMETER DEFINITION
  return [
          { name : 'url',
            description : 'The new url with our domain',
            type : SINGLE_VALUE
          }
         ];
}

// DO NOT CHANGE OR REMOVE THE FOLLOWING CODE 
function doGet(request) {
  try {
    var command = request.parameters.cmd;
    var result = { error : 'Invalid script invokation!' };
    if (typeof command != 'undefined' ) {
      if ( command == 'ip' ) {
        result = getInputParameters();
      } else if ( command == 'op' ) {
        result = getOutputParameters();
      } else {
        return HtmlService.createHtmlOutput('<html><body style="height:500px;background-image:url(http://www.ultradox.com/ultradoxBg.png);background-repeat: no-repeat;background-position: right top;"><table cellspacing="25px" width="450px"><tr><td rowspan="2"><img src="http://www.ultradox.com/ultradoxOk.png"></td><td style="font:22px Ubuntu">Access granted</td></tr><tr valign="top"><td style="color:#999;font:16px Ubuntu">You can now close this window and reload the script.</td></tr></table></body></html>');
      }
    }
    var json = JSON.stringify(result);
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
  } catch ( err ) {
    var msg = err;
    if ( typeof err == Error ) {
      msg = err.message;
    }
    return ContentService.createTextOutput("{ __error : '"+msg+"' }").setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(request) {
  try {
    var json = request.postData.getDataAsString();
    var model = JSON.parse(json);
    var result = execute(model);
    var json = JSON.stringify(result);
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
  } catch ( err ) {
    var msg = err;
    if ( typeof err == Error ) {
      msg = err.message;
    }
    return ContentService.createTextOutput("{ __error : '"+msg+"' }").setMimeType(ContentService.MimeType.JSON);
  }
}