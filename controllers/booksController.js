const Book = require('../models').Book;

module.exports = {
    list(req, res) {
        return Book
        .findAll({
            include: [],
            order: [
            ['createdAt', 'DESC'],
            ],
        })
        .then((books) => res.status(200).send(books))
        .catch((error) => { res.status(400).send(error); });
    },
    add(req, res) {
        console.log(req);
    }
}