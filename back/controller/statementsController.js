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

    async deleteState (req, res){
        try {
            const id = req.params.id
            const user = await db.query('DELETE FROM statements WHERE statement_id = $1', [id])

            res.json(user.rows)
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

    async changeStatusState (req, res) {
        try {
            const [id] = req.params.id
            const {status_id} = req.body

            const status = await db.query('UPDATE statements SET status_id = $1 WHERE statement_id = $2 RETURNING *', [status_id, id])

            res.json(status.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new StatementsController