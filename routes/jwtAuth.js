const router = require("express").Router();
const Register_Emp = require("../controllers/auth");

module.exports = router;
 
// Register_auth
router.post('/register',Register_Emp);

// login route 



module.exports = router
