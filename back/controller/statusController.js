const db = require('../db')

class StatusRouter {
    async getAllStatus (req, res) {
        try {
            const status = await db.query('SELECT * FROM status_table')

            res.json(status.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async getOneStatus (req, res) {
        try {
            const id = req.params.id
            const status = await db.query('SELECT * FROM status_table WHERE status_id = $1', [id])

            res.json(status.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new StatusRouter
