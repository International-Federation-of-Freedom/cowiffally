var showButton = document.getElementById("showNavbarButton");
var hiddenDiv = document.getElementById("hiddenDiv");
var links = hiddenDiv.getElementsByTagName("a");
var hideTimeout;

disableLinks();

showButton.addEventListener("click", function() {
  hiddenDiv.classList.add("fade");
  hiddenDiv.classList.add("visible");
  hiddenDiv.style.display = "block";

  setTimeout(function() {
    hiddenDiv.style.opacity = "1";
    enableLinks();
  }, 100);
});

function hideDiv() {
  hiddenDiv.classList.remove("visible");
  hiddenDiv.style.opacity = "0";
  disableLinks();

  setTimeout(function() {
    hiddenDiv.style.display = "none";
  }, 500);
}

function disableLinks() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.pointerEvents = "none";
  }
}

function enableLinks() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.pointerEvents = "auto";
  }
}

hiddenDiv.addEventListener("mouseenter", function() {
  clearTimeout(hideTimeout);
});

hiddenDiv.addEventListener("mouseleave", function() {
  hideTimeout = setTimeout(hideDiv, 5000);
});

setTimeout(function() {
  hideTimeout = setTimeout(hideDiv, 5000);
}, 5000);