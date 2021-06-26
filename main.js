// when we get a message from the app, display it on the page
ThunkableWebviewerExtension.receiveMessage(function(message) {
    // Do something with your message
    alert(message)
  });

  ThunkableWebviewerExtension.postMessage('hello world');