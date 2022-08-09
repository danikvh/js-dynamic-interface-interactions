//DROP DOWN MENU
function showDropDown(event) {
    const option = event.getAttribute("option")
    const menu = document.getElementById(`drop-down-options-${option}`)
    menu.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-down-main')) {
      const dropdowns = document.getElementsByClassName("drop-down-options");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }