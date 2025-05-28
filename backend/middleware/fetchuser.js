const jwt = require('jsonwebtoken');
const JWT_SECRET = "RIDA_IS_A_JZSIOSDNMNJKXDFJDJJIIDFKMNDFNMJISDJNS";

const fetchuser = (req , res , next)=>{
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).send("plz authenticate using valid token");
    }

    try {

        const data = jwt.verify(token , JWT_SECRET);
        req.user = data.user
        next();

    } 
    catch (error) {
        res.status(401).send("plz authenticate using valid token");
    }
   
}

module.exports = fetchuser;
