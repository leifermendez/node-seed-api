const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/hotels')

//TODO: Turbo 🐱‍🏍  cache!
router.get(
    '/',
    checkOrigin,
    cacheInit, //TODO: <--- 😨 ¿WTF?
    getItems
)

router.get('/:id', checkOrigin, getItem)

router.post('/', checkOrigin, cacheInit, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router