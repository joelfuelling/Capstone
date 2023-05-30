const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken
  // above is shorthand for 'create: create'
};

function createJWT(user) {
  //! This function is used below in 'create' and therefore doesn't get added to the exports above.
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body)
    const token = createJWT(user);
    res.json(token)
  } catch (err) {
    console.log(err)
    // Client will check for non-2xx status code 400 = Bad Request
    res.status(400).json(err)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email})
    if(user){        
      if(bcrypt.compareSync(req.body.password, user.password)){
        console.log(req.body.password)
        const token = createJWT(user);
        res.json(token)
      }else{
        throw new Error("Invalid credentials")
      }
    }else {
      throw new Error("Invalid credentials")
    }
    }catch{
      res.status(400).json('Bad credentials')
    }
}

async function checkToken(req, res){
  res.json(req.exp)
}
