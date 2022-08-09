//DROP DOWN MENU
function showDropDown(event) {
    checkDropDownMenus()

    event.classList.add("drop-down-main-selected")
    const option = event.getAttribute("option")
    const menu = document.getElementById(`drop-down-options-${option}`)
    menu.classList.add("drop-down-option-show");
}

function checkDropDownMenus() {
    const dropButtons = document.querySelectorAll(".drop-down-main")
    dropButtons.forEach(function(button) {
        if (button.classList.contains("drop-down-main-selected")) {
            button.classList.remove("drop-down-main-selected")
        }
    })

    const menus = document.querySelectorAll(".drop-down-options")
    menus.forEach(function(menu) {
        if (menu.classList.contains("drop-down-option-show")) {
            menu.classList.remove("drop-down-option-show")
        }
    })
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-down-main-selected')) {
        checkDropDownMenus()
    }
  }