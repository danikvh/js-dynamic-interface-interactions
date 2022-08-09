//DROP DOWN MENU

const dropDownButtons = document.querySelectorAll(".drop-down-main")


dropDownButtons.forEach((button) => {
    button.addEventListener("hover", showDropDown)
})

function showDropDown() {
    const menu = document.getElementById("drop-down-option-1")
    menu.style.visibility = visible
}