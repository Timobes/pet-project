import {useState} from "react";
import {auth, reg} from "../../ApiServis";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../../state/slice/authSlice";

export function Login() {
    const [data, setData] = useState()

    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()

        const parent = e.target.parentElement.children
        let mas = []

        for (let i = 0; i < parent.length - 1; i++) {
            mas.push(parent[i].value)
            console.log(mas)
        }

        auth({login: mas[0], passwords: mas[1]})
            .then(response => {
                console.log(response)
                setData(response.message)
                console.log(response.users[0])
                dispatch(setToken(response.users[0]))
            })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form>
                <input type="text" className="" placeholder="Логин" name="name" required/>
                <input type="password" className="" placeholder="Пароль" name="name" required/>
                <input type="submit" value="Отправить" onClick={submit}/>
            </form>
            <div>{data}</div>
        </div>
    )
}