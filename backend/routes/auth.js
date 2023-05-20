const router=require("express").Router();
const User=require("../models/User.js")
const bcrypt=require("bcrypt")
//register
router.post("/register",async (req,res)=>{
    
    try{//generating password
      //chnage1
        const saltRounds=await bcrypt.genSalt(10);;
        const hashedPassword=await bcrypt.hashSync(req.body.password,saltRounds);
        //creating user
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });
        //saving the response
        const user=await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if(!user){ res.status(404).json("user not found"); return;}
     // res.status(200).json(user)

  
      const validPassword = await bcrypt.compareSync(req.body.password,user.password)
      
      if(!validPassword){res.status(400).json("wrong password"); return;}
     
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  });

module.exports=router;