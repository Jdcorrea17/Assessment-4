const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const gamesContainer = document.querySelector('#games-container')
const form = document.querySelector('form')
/*const deleteGame = id => {
    axios.delete(`http://localhost:4000/api/games/${id}`)
    .then(res => )
}
*/

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
})
}
const baseURL ="http://localhost:4000/api/games/"

const gamesCallback = ({ data: games }) => displayGames(games)
const errCallback = err => alert(err.response.data)

const getAllGames = () => axios.get(baseURL).then(gamesCallback).catch(errCallback)
const createGame = body => axios.post(baseURL, body).then(gamesCallback).catch(errCallback)
const deleteGame = id => axios.delete(`${baseURL}${id}`).then(gamesCallback).catch(errCallback)
const updateGame = (id, type) => axios.put(`${baseURL}${id}`, {type}).then(gamesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        price: price.value,
        imageURL: imageURL.value
    }

    createGame(bodyObj)

    title.value = ''
    price.value = ''
    imageURL.value = ''
}

function createGameCard(game) {
    const gameCard = document.createElement('div')
    gameCard.classList.add('game-card')

    gameCard.innerHTML = `<img alt='game cover' src=${game.imageURL} class="game-cover"/>
    <p class="game-title">${game.title}</p>
    <div class="btns-container">
    <button onclick="updateGame(${game.id}, 'plus')">+</button>
    <p class="game-price">$${game.price}</p>
    <button onclick="updateGame(${game.id}, 'minus')">-</button>
    </div>
    <button onclick="deleteGame(${game.id})">Delete</button>
    `

    gamesContainer.appendChild(gameCard)
}

function displayGames(arr) {
    gamesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGameCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllGames()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
gamesContainer.addEventListener('click',  )
