/// script to go through the ilias and campus pages

if (window.location.href.indexOf("ilias.studium.kit.edu/login") > -1) {
  console.log("URL detected");
  clickButtonById('f807');
} else if (window.location.href.indexOf("campus.studium.kit.edu") > -1) {
  console.log("URL detected");
  setTimeout(function () { clickButtonByClass('shib-login shib-button'); }, 100); //
} else if (window.location.href.indexOf("idp.scc.kit.edu") > -1) {
  // Careful, here chrome doesn't load the passwords in properly (Not exactly clear why)
  // Before clicking on submit, we will use a trick and click on some text beforehand.

  // only text, not an actual button. Index = 1 because with Index = 0 
  // is a class with a button in it which we do not want to click on
  clickButtonByClass('text full', 1);
  
  clickButtonById('sbmt'); // the actual button
} else if (detectMoreComplexUrl()) {
  console.log("URL detected");
  clickListElement("ilTopBarNav", 10)
}

function detectMoreComplexUrl() {
  // return false for an URL to a forum Link
  if (window.location.href.toLowerCase().indexOf("https://ilias.studium.kit.edu/ilias.php?baseclass=ilrepositorygui&cmd=viewthread") > -1) {
    console.log("Forum Link detected, IliasLogin not executing because you should already be logged in.")
    return false
  }

  // return true for any other URL which links to Magazin but is not a forum URL. If you are already logged in, the login Button is not there so it won't fire
  if (window.location.href.toLowerCase().indexOf("https://ilias.studium.kit.edu/ilias.php?baseclass=ilrepositorygui") > -1) {
    console.log("Magazin URL detected, Extensions firering")
    return true
  }
}

function clickButtonById(id) {
  document.getElementById(id).click();
  console.log("button clicked");
}

function clickButtonByClass(className, index = 0) {
  var shibButton = document.getElementsByClassName(className)[index];
  console.log("button about to be clicked: " + shibButton);
  shibButton.click();
  console.log("button clicked");
}

function clickListElement(listId, elementNumber) {
  console.log("ClickListElementFct firing")
  tagNameListElement = "li"
  urlElement = "a"
  var listElement = document.getElementById(listId).getElementsByTagName(tagNameListElement)[elementNumber].getElementsByTagName(urlElement)[0]
  console.log("listElement URL: " + listElement + " about to be clicked")
  listElement.click()
  console.log("listElement URL clicked on")
}
