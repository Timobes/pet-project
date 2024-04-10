import {useState} from "react";
import {reg} from "../../ApiServis";

export function Reg() {

    const [data, setData] = useState()

    const submit = (e) => {
        e.preventDefault()

        const parent = e.target.parentElement.children
        let mas = []

        for (let i = 0; i < parent.length - 1; i++) {
            mas.push(parent[i].value)
            console.log(mas)
        }

        reg({name: mas[0], last_name: mas[1], middle_name: mas[2], login: mas[3], passwords: mas[4], phone: mas[5], email: mas[6]})
            .then(response => {
                console.log(response)
                setData(response.message)
            })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form>
                <input type="text" className="" placeholder="Имя" name="name" required/>
                <input type="text" className="" placeholder="Фамилия" name="name" required/>
                <input type="text" className="" placeholder="Отчество" name="name" required/>
                <input type="text" className="" placeholder="Логин" name="name" required/>
                <input type="password" className="" placeholder="Пароль" name="name" required/>
                <input type="tel" className="" placeholder="Номер телефона" name="name" required/>
                <input type="email" className="" placeholder="Почта" name="name" required/>
                <input type="submit" value="Отправить" onClick={submit}/>
            </form>
            <div>{data}</div>
        </div>
    )
}