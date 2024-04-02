const db = require('../db')

class StatementsController {
    async getAllState (req, res) {
        try {

            const state = await db.query('SELECT * FROM statements')
            res.json(state.rows)

        } catch (e) {
            console.log(e)
        }
    }

    async getOneState (req, res) {
        try {

            const [id] = req.params.id
            const state = await db.query('SELECT * FROM statements WHERE statement_id = $1', [id])
            res.json(state.rows)

        } catch (e) {
            console.log(e)
        }
    }

    async createState (req, res) {
        try {
            const {num_auto, status_id, description, author_id} = req.body

            const state = await db.query('INSERT INTO statements (num_auto, status_id, description, author_id) ' +
                'VALUES ($1, $2, $3, $4) RETURNING *', [num_auto, status_id, description, author_id])

            res.json(state.rows)

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new StatementsController