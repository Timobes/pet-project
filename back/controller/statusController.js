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

    async createNewStatus (req, res) {
        try {
            const {status_name} = req.body
            const status = await db.query('INSERT INTO status_table (status_name) VALUES ($1) RETURNING *', [status_name])

            res.json(status.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new StatusRouter
