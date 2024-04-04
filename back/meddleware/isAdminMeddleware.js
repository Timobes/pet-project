const bd = require('../db')

module.exports = async function(req, res, next)  {
    const token = req.headers.token

    console.log(token)

    const isAdmin = await bd.query('SELECT is_admin FROM users WHERE passwords = $1', [token])

    console.log(isAdmin.rows[0].is_admin)

    if(isAdmin.rows[0].is_admin === true) {
        next()
    } else {
        res.json({message: "Нет прав админа!"})
    }
}

