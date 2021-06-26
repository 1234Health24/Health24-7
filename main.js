

  rdmnmbr = Math.floor(100000 + Math.random() * 900000)
 
  ThunkableWebviewerExtension.postMessage(rdmnmbr)

  function CheckforCode()
  {
    userincode = document.getElementById('code').value
    
      x= document.getElementById('submit')
      x.style.display = "none"
      window.location.href = "videocll.html";
      document.getElementById('result').innerHTML = 'Logging you in'
    
  }
  