import addEvent from '../modules/add-active.js'

const initBookmark = () => {
    const btnBookmark = document.querySelector( '[data-btn="bookmark"]' )

    addEvent( btnBookmark, 'click', btnBookmark )
}

export default initBookmark