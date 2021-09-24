const handleWishlist = (name) => {
    wishlistString = localStorage.getItem('wishlist-status')
    wishlistArray = JSON.parse(wishlistString)
    const element = document.getElementById(name)

    if (wishlistArray.indexOf(name) !== -1) {
        element.style.fontWeight = 'normal'
        wishlistArray = wishlistArray.filter((item) => item !== name)
    } else {
        element.style.fontWeight = '900'
        wishlistArray = [...wishlistArray, name]
    }
    localStorage.setItem('wishlist-status', JSON.stringify(wishlistArray))
}

const handleImgClick = (id) => {
    const img = document.getElementById(id)
    img.classList.toggle('expanded')
}