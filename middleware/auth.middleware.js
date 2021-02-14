const aws = require('aws-sdk');

module.exports = {
    validateUser : (req, res, next) => {
        let token = req.headers['x-access-token'];
        if(token){
            token = module.exports.decodeJWT(token);
            let cst = (new Date().getTime()/1000);
            if(token && token.exp >= cst)
                next();
            else 
                res.status(401).send({message : "Access token has expired"});
        } else {
            res.status(401).send({message : "Unauthorized Access"});
        }
        
    },
    decodeJWT : (token) => {
        const base64string = token.split('.')[1];
        const decodedVal = JSON.parse(Buffer.from(base64string, 'base64').toString('ascii'));
        return decodedVal;
    }
}