const checkOrigin = (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop()
    if (token === '123456') {
        next()
    } else {
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }


}

module.exports = checkOrigin