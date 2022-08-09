//DROP DOWN MENU
function showDropDown(event) {
    checkDropDownMenus()

    event.classList.add("drop-down-main-selected")
    const option = event.getAttribute("option")
    const menu = document.getElementById(`drop-down-options-${option}`)
    menu.classList.add("drop-down-option-show");
    const options = document.querySelectorAll(`#drop-down-options-${option} > .drop-down-option`)
    options.forEach((option) => option.classList.add("drop-down-animation"))
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

    const options = document.querySelectorAll(".drop-down-option")
    options.forEach((option) => option.classList.remove("drop-down-animation"))
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-down-main-selected')) {
        checkDropDownMenus()
    }
}


//IMAGE SLIDER

const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const dotButtons = document.querySelectorAll("#image-slider-button")

leftArrow.addEventListener("click", leftCarrousel)
rightArrow.addEventListener("click", rightCarrousel)
dotButtons.forEach((button) => button.addEventListener("click", dotClick))


function leftCarrousel() {
    const imgContainer = document.querySelector(".image-container")
    const style = getComputedStyle(imgContainer)
    imgContainer.classList.remove("image-container-animation")
    if (style.right === "0px") {
        deactivateButton(document.querySelector(`button[name="0"]`))
        activateButton(document.querySelector(`button[name="800"]`))
        imgContainer.style.right= "800px";
        imgContainer.classList.add("image-container-animation")
    } else { 
        let value = parseInt(style.right.match(/(\d+)/)[0])
        deactivateButton(document.querySelector(`button[name="${value}"]`))
        value -= 200
        activateButton(document.querySelector(`button[name="${value}"]`))
        imgContainer.style.right= ` ${value}px`;
        imgContainer.classList.add("image-container-animation")
    }
}

function rightCarrousel() {
    const imgContainer = document.querySelector(".image-container")
    const style = getComputedStyle(imgContainer)
    imgContainer.classList.remove("image-container-animation")
    if (style.right === "800px") {
        deactivateButton(document.querySelector(`button[name="800"]`))
        activateButton(document.querySelector(`button[name="0"]`))
        imgContainer.style.right = "0px";
        imgContainer.classList.add("image-container-animation")
    } else { 
        let value = parseInt(style.right.match(/(\d+)/)[0])
        deactivateButton(document.querySelector(`button[name="${value}"]`))
        value += 200
        activateButton(document.querySelector(`button[name="${value}"]`))
        imgContainer.style.right = ` ${value}px`
        imgContainer.classList.add("image-container-animation")
    }
}

function dotClick(event) {
    const imgContainer = document.querySelector(".image-container")
    imgContainer.classList.remove("image-container-animation")
    if (event.currentTarget.classList.contains("filter-active")) return
    else {
        deactivateButton(document.querySelector(`button[class="filter-active"]`))
        activateButton(event.currentTarget)
        imgContainer.style.right = ` ${event.currentTarget.name}px`
        imgContainer.classList.add("image-container-animation")
    }
}

function activateButton(button) {
    button.classList.remove("filter-inactive")
    button.classList.add("filter-active")    

}

function deactivateButton(button) {
    button.classList.remove("filter-active")
    button.classList.add("filter-inactive")
}