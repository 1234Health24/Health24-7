// when we get a message from the app, display it on the page
ThunkableWebviewerExtension.receiveMessage(function(message) {
    // Do something with your message
    
  });

  rdmnmbr = Math.floor(100000 + Math.random() * 900000)
  document.getElementById('code').innerHTML= rdmnmbr
  
  ThunkableWebviewerExtension.postMessage(rdmnmbr)
  