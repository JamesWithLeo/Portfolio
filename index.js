

// first way to close the dropdown menu is if its open and the body is click .

document.addEventListener('click', function(event){
  
  if (document.getElementById('headerButtonsContainer').style.display == "block" 
    && window.screen.width <= 430) {
    // console.log(document.getElementById('menu').style.display == "")
    closeMenu()
    // console.log('body click event closes the dropdownMenu')
  } 
  else {
    // console.log('body click event, but the dropdownMenu is not open')
  }
})

function closeMenu() {
  let parentOfNavButton = document.getElementById('headerButtonsContainer').style;
  parentOfNavButton.display = "none"
}
function openMenu() {
  let parentOfNavButton = document.getElementById('headerButtonsContainer').style;
  parentOfNavButton.display = "block"
}




document.getElementById('menu').addEventListener('click', function(event) {
  // second way to close the dropDownMenu is, if menuButton is click and
  //  the headerButtonsContainer display property is block,
  //  This function also toggle the menu to open the headerButtonsContainer .
  if (document.getElementById('headerButtonsContainer').style.display === "block") {
    closeMenu()
  } else { openMenu() }
  event.stopPropagation()
})


// Third waay to close the dropDownMenu is by resizing the window,
function headerNavChange() {
  if (this.window.screen.width <= 430) { closeMenu() }
  else { 
    // always open for large device
    openMenu() 
  }
}
// detect screen changes . To know if headerNav will be full button or burger button 
window.addEventListener('resize',headerNavChange);



function goto(destination) {
  window.location.href = destination
  headerNavChange()
  // console.log('button click')
}

document.getElementById('homeButton').addEventListener('click', function(event){
  goto('#top');
  event.stopPropagation();
});

document.getElementById('projectsButton').addEventListener('click', function(event){
  goto('#section__project');
  event.stopPropagation();

});

document.getElementById('aboutButton').addEventListener('click', function(event) {
  goto('#section__about');
  event.stopPropagation();
});




// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   // Google Chrome requires returnValue to be set.
//   event.returnValue = '';
  
// });

// disable tab index in heroText
let grandparent = document.getElementById('heroText').children
for (i = 0; i < grandparent.length; i++){
  let parent = grandparent[i].children;

  for (j = 0; j < parent.length; j++) {
    parent[j].setAttribute('tabindex', '-1');
    // console.log(parent[j].getAttribute('tabindex'))
  }
}
