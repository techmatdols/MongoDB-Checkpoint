const express = require('express')
const router = express.Router()
const {getContact, postContact, updateContact, deleteContact} = require('../controller/controller')

router.get('/', getContact)
router.post('/', postContact)
router.put('/:id', updateContact)
router.delete('/:id',deleteContact)

module.exports = router