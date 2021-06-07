import addEvent from "../modules/add-active.js"


const initMenu = ( ) => {
    const menu = document.querySelector('[data-menu="container-menu"]')
    const btnMenu = document.querySelector('[data-btn="menu-btn"]')

    addEvent( btnMenu, 'click', btnMenu, menu )
}

export default initMenu