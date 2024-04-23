import {useEffect, useState} from "react";
import {getUsers} from "../../ApiServis";
import {useSelector} from "react-redux";
import {DeleteUsers} from "./DeleteUsers";

export function GetUsers() {
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)

    console.log(token.passwords)

    useEffect(() => {
        getUsers({headers: {token: token.passwords} })
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            {data.map((users) => (
                <>
                    <h1>Все пользователи</h1>
                    <div className="user-table" key={users.user_id}>
                        <div>Id: {users.user_id}</div>
                        <div>Имя: {users.name}</div>
                        <div>Фамилия: {users.last_name}</div>
                        <div>Отчество: {users.middle_name}</div>
                        <div>логин: {users.login}</div>
                        <div>Телефон: {users.phone}</div>
                        <div>Почта: {users.email}</div>
                    </div>
                    <DeleteUsers userid={users.user_id}/>
                    <hr className="line"/>
                </>
            ))}
        </div>
    )
}