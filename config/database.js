const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports=
{
    uri:'mongodb://localhost:27017/database_meanstack',
    secret: crypto,
    db: 'database_meanstack'
}