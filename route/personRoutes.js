const express = require('express');
const router = express.Router();
const Person = require('../models/person');
router.get('/',async(req,res)=>{
  try {
   const data = await Person.find();
   console.log('data fetched');
   res.status(201).json(data);
  } catch (error) {
    console.log(error);
     res.status(500).json({error:'internal Server Error'});
  }
})

router.get('/:worktype',async(req,res)=>{
 try {
   const worktype = req.params.worktype;
  if(worktype=='chef' ||worktype=='waiter'||worktype=='manager'){
    const response  = await Person.find({work:worktype});
    console.log('response fetched');
    res.status(201).json(response);
  }else{
    res.status(404).json({error:'Invalid work type'});
  }
 } catch (error) {
  console.log(error);
     res.status(500).json({error:'internal Server Error'});
 }
})
router.put('/:_id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
        
        runValidators: true
      }
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('//:worktype',async(req,res)=>{
 try {
   const worktype = req.params.worktype;
  if(worktype=='chef' ||worktype=='waiter'||worktype=='manager'){
    const response  = await Person.find({work:worktype});
    console.log('response fetvhed');
    res.status(201).json(response);
  }else{
    res.status(404).json({error:'Invalid work type'});
  }
 } catch (error) {
  console.log(error);
     res.status(500).json({error:'internal Server Error'});
 }
})
router.post('/',async (req,res)=>{
    //  const data = req.body //Assuming the request body contains the person data

    // //Create a new Person 
    // const newPerson = new Person(data);

    // //save the new person to the database
    // newPerson.save((error,person)=>{
    //   if(error){
    //     console.log('Error saving person:',error);
    //     res.status(500).json({error:'Internal server error'});    
    //   }
    //   else{
    //     console.log('data saved successfully:');
    //     res.status(200).json(person);
    //   }
    // })

    try{
      const data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log('data saved ',response);
      res.status(200).json(response);
    }catch(error){
      console.log(error);
      res.status(500).json({error:'internal Server Error'});
    }
  })

module.exports = router;