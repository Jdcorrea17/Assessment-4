let games = require('./db.json')
let globalID = 11

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A golden egg of opportunity falls into your lap this month.', 'A good friendship is often more important than a passionate romance', 'A good time to finish up old tasks', 'A hunch is creativity trying to tell you something', 'A lifetime friend shall soon be made', 'A lifetime of happiness lies ahead of you', 'A light heart carries you through all the hard times']

        let random = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[random];
      
        res.status(200).send(randomFortune);
    },

    getGame: (req, res) => {
        res.status(200).send(games)
    },
    // deleteGame: (req, res) => {
    //     let index = games.findIndex(elem => elem.id === +req.params.id)
    //     games.splice(index, 1)
    //     res.status(200).send(games)
// }
    deleteGame: (req, res) => {
        const {id} = (req.params.id)
        games.splice(id, 1)
        res.status(200).send(games)
    },
    createGame: (req, res) => {
        const {title, price, imageURL} = req.body
        let newVideoGame = {
            id: globalID, 
            title: title,
            price: price,
            imageURL
        }
        games.push(newVideoGame)
        globalID++
        res.status(200).send(games)
}, 
updateGame: (req, res) => {
    const {type} = req.body
    let index = games.findIndex(elem => elem.id === +req.params.id)
    if(type === 'plus'){
        games[index].price += 10
        res.status(200).send(games)
    } else if(type === 'minus'){
        games[index].price -= 10
        res.status(200).send(games)
    } else {
        res.status(400).send('price at 0')
    }
}
}