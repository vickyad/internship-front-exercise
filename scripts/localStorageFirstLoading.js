const init = () => {
    let wishlistString = localStorage.getItem('wishlist-status')
    let wishlistArray = JSON.parse(wishlistString)

    if (!wishlistArray) {
        wishlistArray = []
    }

    wishlistArray.forEach((item) => {
        const element = document.getElementById(item)
        element.style.fontWeight = '900'
    })

    const mobileDialog = document.getElementById('menu-dialog-mobile')
    const hamburguerMenu = document.getElementById('hamburguer-menu-button')
    hamburguerMenu.addEventListener('click', () => {
        hamburguerMenu.classList.toggle('dialog-opened')
        mobileDialog.classList.toggle('display-none')
    })
}
export default init