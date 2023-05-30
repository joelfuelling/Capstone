//Authorization Headers debugging
const jwt = require('jsonwebtoken')

module.exports= function(req, res, next){
    let token = req.get('Authorization') || req.query.token
    if(token){
        token = token.replace('Bearer ', '')
        //Call back function below checking for vaild user attached to the request.
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            console.log(decoded)
            console.log(err)
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            return next()
        })
    } else {
        req.user = null
        return next()
    }
}