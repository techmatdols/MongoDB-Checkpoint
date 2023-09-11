const async = require('express-async-handler')
const contactlist = require('../model/schema')


const getContact = async(async(req,res)=>{
    const contact = await contactlist.find()

    res.status(200).json(contact)

});
const postContact = async(async(req, res)=>{
    if(!req.body.lastname, !req.body.firstname, !req.body.email && !req.body.age){
        res.status(400)
        throw new Error('please add a content')

    }

    const contact = await contactlist.create({
        lastname:req.body.lastname,
        firstname:req.body.firstname,
        email:req.body.email,
        age:req.body.age

    
    })
    res.status(200).json(contact)
   
});
const updateContact = async(async( req ,res)=>{
    const contact = await contactlist.findById(req.params.id)

    
    if(!contact){
        res.status(400)
        throw new Error('contact not found')
    }

        const updatedcontact = await contactlist.updateOne({ _id :("64f969f1a26926d6ebc0dad2") }, { $set: { firstname: "Kefi Anis" } })
    res.status(200).json(updatedcontact)
    
        
        
});
const deleteContact = async(async( req ,res)=>{
    const contact = await contactlist.findByIdAndRemove(req.params.id)

    
    if(!contact){
        res.status(400)
        throw new Error('contact not found')
    }
    await contactlist.deleteMany({ age: { $lt: 5 } })
    res.status(200).json({id:req.params.id})
});
module.exports = {
    getContact,postContact,updateContact, deleteContact
}