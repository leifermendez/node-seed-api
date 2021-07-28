const { httpError } = require('../helpers/handleError')
const hotelModel = require('../models/hotels')

const getItems = async (req, res) => {
    try {
        const listAll = await hotelModel.find({})

        //TODO: Simular delay 2 segundos

        setTimeout(() => {
            res.send({ data: listAll })
        }, 3000)


    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, price, room } = req.body
        const resDetail = await hotelModel.create({
            name, price, room
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }