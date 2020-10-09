/// script to go through the ilias and campus pages

if (window.location.href.indexOf("ilias.studium.kit.edu/login") > -1) {
  console.log("URL detected");
  clickButtonById('f807');
} else if (window.location.href.indexOf("campus.studium.kit.edu") > -1) {
  console.log("URL detected");
  clickButtonByClass('shib-login shib-button');
} else if (window.location.href.indexOf("idp.scc.kit.edu") > -1) {
  clickButtonById('sbmt');
} else if (window.location.href.indexOf("ilias.studium.kit.edu/ilias.php?baseClass=ilrepositorygui") > -1) {
  console.log("URL detected");
  window.location.replace("https://ilias.studium.kit.edu/login.php?target=&client_id=produktiv&cmd=force_login&lang=de");
}


function clickButtonById(id) {
  document.getElementById(id).click();
  console.log("button clicked");
}

function clickButtonByClass(className) {
  console.log("clickButtonByClass is called with className = " + className);
  var shibButton = document.getElementsByClassName(className)[0];
  console.log("button about to be clicked: " + shibButton);
  shibButton.click();
  console.log("button clicked");
}
