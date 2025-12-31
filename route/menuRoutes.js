const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

router.get('/',async(req,res)=>{
    try {
        const response = await Menu.find();
        console.log(response);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internet Server Error'});
    }
})
router.post('/',async(req,res)=>{
  try {
    const data = req.body;
    const newItem  = new Menu(data); 
    const response = await newItem.save();
    console.log('data saved ',response);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internet Server Error'});
  }
})
router.get("/:taste",async(req,res)=>{
  try {
   const tastetype = req.params.taste;
   
  const response = await Menu.countDocuments({taste:tastetype});
  res.status(201).json(response);
   console.log(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internet Server Error'});
  }
})
router.put('/:id',async(req,res)=>{
  try {
    const itemId = req.params.id;
    const updateItem = await Menu.findByIdAndUpdate(
       itemId,
      req.body,
      {
        new:true , runValidators:true
      }
    );
    if(!updateItem){
      res.status(400).json({error:'Item Not Found'});
    }
    res.status(200).json(updateItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internet Server Error'});
  }
})
router.delete('/:id',async(req,res)=>{
  try {
    const deletedItem = await Menu.findByIdAndDelete(req.params.id);
    if(!deletedItem){
      res.status(404).json({error:'Item Not Found'});
    }
    res.status(201).json(deletedItem);
  } catch (error) {
   console.log(error);
    res.status(500).json({error:'Internet Server Error'});
  }
})
//export
module.exports = router;