/// script to go through the ilias and campus pages

if (window.location.href.indexOf("ilias.studium.kit.edu/login") > -1) {
  console.log("URL detected");
  clickButtonById('f807');
} else if (window.location.href.indexOf("campus.studium.kit.edu") > -1) {
  console.log("URL detected");
  setTimeout(function(){clickButtonByClass('shib-login shib-button');}, 100); //
} else if (window.location.href.indexOf("idp.scc.kit.edu") > -1) {
  // Careful, here chrome doesn't load the passwords in properly (Not exactly clear why)
  // Before clicking on submit, we will use a trick and click on some text beforehand.
  clickButtonByClass('text full', 1); // only text, not an actual button. Index = 1 because with Index = 0 is a class with a button in it which we do not want to click on
  clickButtonById('sbmt'); // the actual button
} else if ((window.location.href.indexOf("https://ilias.studium.kit.edu/ilias.php?baseClass=ilRepositoryGUI") > -1) | (window.location.href.indexOf("https://ilias.studium.kit.edu/ilias.php?baseClass=ilrepositorygui") > -1)) {
  console.log("URL detected");
  window.location.replace("https://ilias.studium.kit.edu/login.php?target=&client_id=produktiv&cmd=force_login&lang=de");
}


function clickButtonById(id) {
  document.getElementById(id).click();
  console.log("button clicked");
}

function clickButtonByClass(className, index = 0) {
  console.log("clickButtonByClass is called with className = " + className);
  console.log("document state: " + document.readyState);
  var shibButton = document.getElementsByClassName(className)[index];
  console.log("button about to be clicked: " + shibButton);
  shibButton.click();
  console.log("button clicked");
}
