document.getElementById('video').style.visibility = "hidden"

rdmnmbr = Math.floor(100000 + Math.random() * 900000)

ThunkableWebviewerExtension.postMessage(rdmnmbr)

function Checkforcode() {

  userincode = document.getElementById('code').value
  if (userincode == rdmnmbr) {
    document.getElementById('video').style.visibility = "visible"
    document.getElementById('verify').remove()

   
  }
  else
    document.getElementById('result').innerHTML = 'Code Invalid'


}
