/// script to go through the ilias and campus pages

if (window.location.href.indexOf("ilias.studium.kit.edu/login") > -1) {
  console.log("URL detected");
  clickButtonById('button_shib_login');
} else if (window.location.href.indexOf("campus.studium.kit.edu") > -1) {
  console.log("URL detected");
} else if (window.location.href.indexOf("idp.scc.kit.edu") > -1) {
  onUsernamePopulated(function(){clickButtonById('sbmt')}); // the actual button})

} else if (detectMoreComplexUrl()) {
  console.log("URL detected");
  clickELementByAriaLabel('Anmelden')
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

function clickELementByAriaLabel(label){
  element = document.querySelector('[aria-label='+label+']').click()
  console.log("element about to be clicked: " + shibButton);
  element.click();
  console.log("element clicked");
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

function onUsernamePopulated(thenFunction) {
  console.log(thenFunction)
  if(document.getElementById('name').value == '') {
    window.setTimeout(onUsernamePopulated.bind(null, thenFunction), 100); /* this checks the flag every 100 milliseconds*/
  } else {
    thenFunction()
  }
}
