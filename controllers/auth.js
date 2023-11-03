const client = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require('../utilis/jwtGenerator')

const Register_Emp = async (req,res)=>{
        try {
            // 1. destructure the req.body (name, email, password)
    
            const {name, email, password} = req.body;
    
            // 2. check if user exits (if user exist then throw error)
            
            const users = await client.query("SELECT * FROM employees WHERE user_email = $1", [ email ]);
            
            // client.end();
            if (users.rows.length > 0) {
                return res.status(400).json({ error: "User with this email already exists" });
            }
            
             
            // 3. Bcypt the user password
    
    
            const bcryptpassword = await bcrypt.hash(password, 10);
            // console.log(bcryptpassword)
            // res.json(bcryptpassword)
    
    
            // 4. enter the new user inside the database
    
            const newUser = await client.query("INSERT INTO employees (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptpassword]);
    
            // 5. genrating our jwt token
    
            const token = jwtGenerator(newUser.rows[0].user_name);
            res.json({
                user: newUser.rows[0],
                token: token, // Send the JWT token along with the user data
              });
              
    
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error")
        }
}
module.exports = Register_Emp;