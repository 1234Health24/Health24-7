verified = 'false'
verifiedapp ='no'
rdmnmbr = Math.floor(100000 + Math.random() * 900000)
// when we get a message from the app, display it on the page
ThunkableWebviewerExtension.receiveMessage(function(message) {
  // Do something with your message
  if(message == 'App Downloaded')
  {verifiedapp = 'yes'}
});
ThunkableWebviewerExtension.postMessage(rdmnmbr)
alert(rdmnmbr)
function Checkforcode() {

  userincode = document.getElementById('code').value
  if (userincode == rdmnmbr) {
    verified = 'yes'
    window.open("videocll.html");
    document.getElementById('result').innerHTML = 'Logging you in'
    verified = 'yes'
    console.log(verified)
  }
  else
    document.getElementById('result').innerHTML = 'Code Invalid'


}
function checkifverified() {

  if (verified == "false") {
    if(verifiedapp =='no')
     console.log(verified)
    window.open("index.html" , "_self");
  }
}