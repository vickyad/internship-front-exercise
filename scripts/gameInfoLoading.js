import data from './gameData.js'

const init = () => {
    let markup = `<img alt="${data.info.title} banner" class="game-banner__img" height="613" src="assets/${data.info.banner}">`
    const gameBanner = document.querySelector('.game-banner')
    gameBanner.innerHTML = [markup, gameBanner.innerHTML].join('')

    markup = `
    <span class="game-console">${data.info.plataform}</span>
    <div class="game-info">
        <section>
            <div class="game-info__title">
                <h1>${data.info.title}</h1>
                <p>${data.info.availability}</p>
            </div>
            <button class="game-info__wishlist center-flex wishlist-item" target="_blank" onclick="handleWishlist('${data.info.id}')">
                <i class="far fa-heart" id="${data.info.id}"></i>
                <span class="link-underline">Add to Wish List</span>
            </button>
        </section>
        <section class="game-info__actions">
            <p class="price">${data.info.price}</p>
            <div class="buy-game">
                <button class="button">
                    <span>Buy digital</span>
                    <i class="fas fa-chevron-right go-right-icon"></i>
                </button>
                <div class="buy-game__points-info">
                    <img alt="" src="assets/money.png">
                    <a class="link-underline">Eligible for up to ${data.info.points} points</a>
                </div>
            </div>
        </section>
    </div>
    `
    document.querySelector('.main-game-info-wrapper').innerHTML = markup

    const gallery_itens = data.gallery.map((item) => {
        const markup = `
        <div class="img-overlay" onclick="handleImgClick('${item.id}')">
            <span>
                <i class="fas fa-search-plus"></i>
            </span>
            <img alt="game-screenshot" src="assets/screenshot/${item.url}">
        </div>
        `
        return markup
    })

    const expanded_itens = data.gallery.map((item) => {
        const markup = `
        <li class="expanded-img" id="${item.id}" onclick="handleImgClick('${item.id}')">
            <div>
                <img alt="game-screenshot" src="assets/screenshot/${item.url}">
                <span></span>
            </div>
        </li>
        `
    })
    document.querySelector('.expanded-img-list').innerHTML = expanded_itens.join('')

    const slides = []
    gallery_itens.forEach((item, index) => {
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
                <div class="game-gallery__img-set">
                    ${joined_itens}
                </div>
            </li>
        `
        return markup
    })

    document.querySelector('.game-gallery-wrapper .glide__slides').innerHTML = slides_markup.join('')
}
export default init