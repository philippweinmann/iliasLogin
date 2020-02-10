/// script to go through the ilias pages

if (window.location.href.indexOf("ilias.studium.kit.edu/login") > -1) {
  clickButtonById('f807');
} else if (window.location.href.indexOf("idp.scc.kit.edu") > -1) {
  // add small timeout so that the browser has time to add in the passwords automatically. (time in milliseconds)
  setTimeout(clickButtonById('sbmt'), 200);
} else if (window.location.href.indexOf("campus.studium.kit.edu") > -1) {
  clickButtonByClass('shib-login shib-button');
} else if (window.location.href.indexOf("ilias.studium.kit.edu/ilias.php?baseClass=ilrepositorygui") > -1) {
  window.location.replace("https://ilias.studium.kit.edu/login.php?target=&client_id=produktiv&cmd=force_login&lang=de");
}


function clickButtonById(id) {
  document.getElementById(id).click();
}

function clickButtonByClass(className) {
  document.getElementsByClassName(className)[0].click();
}