const db = require('../db')
const jwt = require('jsonwebtoken')
const {decode} = require("jsonwebtoken");

class authController {
    async reg(req, res) {
        try{
            const {name, last_name, middle_name, login, passwords, phone, email} = req.body
            const JWTpass = jwt.sign({password: passwords}, "secret", )

            const users = await db.query(`INSERT INTO users (name, last_name, middle_name, login, passwords, phone, email) 
                VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, last_name, middle_name, login, JWTpass, phone, email])

            res.json({message: 'Вы создали аккаунт!', token: JWTpass})
        } catch (e) {
            console.log(e)
        }
    }

    async auth(req, res) {
        try{
            const {login, passwords} = req.body

            const pass = await db.query("SELECT passwords FROM users WHERE login = $1", [login])

            const DEJWT = jwt.decode(pass.rows[0].passwords)

            if(passwords == DEJWT.password) {
                const users = await db.query("SELECT * FROM users WHERE login = $1 AND passwords = $2", [login, pass.rows[0].passwords])

                if(users.rows) {
                    // res.json(pass.rows[0].passwords)
                    res.json({message: "Добро пожаловать!", users: users.rows})
                } else {
                    res.json('Пользователя нет')
                }
            } else {
                res.json('Неправильный пароль!')
            }
        } catch (e) {
            console.log(e)
            res.json('Ошибка')
        }
    }

    async profile(req, res){
        try {
            const token = req.headers.token

            const users = await db.query("SELECT * FROM users WHERE passwords = $1", [token])
            res.json(users.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController