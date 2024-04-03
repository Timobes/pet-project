const db = require('../db')

class UserController {
    async getUser(req, res) {
        try{
            const id = req.params.id
            const user = await db.query("SELECT * FROM users WHERE user_id = $1", [id])

            res.json(user.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async getUsers(req, res) {
        try {
            const user = await db.query('select * from users')
            res.json(user.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id
            const user = await db.query('DELETE FROM users WHERE user_id = $1', [id])

            console.log(`User id = ${id} deleted`)
            res.json(user.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async updateUser(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController




