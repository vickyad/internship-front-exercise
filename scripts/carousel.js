import carousel from './otherTitlesData.js'

const init = () => {
    const carousel_itens = carousel.map((item) => {
        const markup = `
            <div class="game-title">
                <a class="img-overlay" href="https://www.nintendo.com/games/detail/${item.url}" title="go to ${item.title} game page">
                    <span></span>
                    <img alt="${item.title} banner" src="assets/other_titles/${item.image}">
                </a>
                <p class="game-title__date">${item.release_date}</p>
                <a href="https://www.nintendo.com/games/detail/${item.url}" title="go to ${item.title} game page">
                    <h3 class="game-title__title">${item.title}</h3>
                </a>
                <p class="game-title__price">${item.price}</p>
                <div class="game-title__extra-info">
                    <span class="game-info__console">${item.plataform}</span>
                    <button class="add-to-wishlist-icon" onclick="handleWishlist('${item.id}')" href="https://accounts.nintendo.com/authorize_guide?redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3De56201e414c97a10%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%2Btoken%26scope%3DeshopAlps%2BmissionStatus%2BmissionStatus%253Aprogress%2Bopenid%2BpointWallet%2Buser%2Buser.birthday%2Buser.links%255B%255D.id%2Buser.mii%2Buser.wishlist%2BuserNotificationMessage%253AanyClients%2BuserNotificationMessage%253AanyClients%253Awrite%26state%3Dcc82042204bc1e3a95da9d14cb27687e%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com&type=mixed" target="_blank" title="go to Wishlist page">
                        <i class="far fa-heart" id="${item.id}"></i>
                    </button>
                </div>
            </div>
        `
        return markup
    })

    const slides = []
    carousel_itens.forEach((item, index) => {
        let slide_number = Math.floor(index / 5)

        if (slides[slide_number] === undefined) {
            slides[slide_number] = []
        }
        slides[slide_number].push(item)
    })

    const slides_markup = slides.map((item) => {
        const joined_itens = item.join('')
        const markup = `
            <li class="glide__slide">
                <div class="display-flex">
                    ${joined_itens}
                </div>
            </li>
        `
        return markup
    })

    const ul_carousel = document.querySelector('.customer-also-viewed__carrosel .glide__slides')
    ul_carousel.innerHTML = slides_markup.join('')
}
export default init

