import {useSelector} from "react-redux";
import {GetUsers} from "./users/GetUsers";
import {AllState} from "./statements/AllState";

export function Admin() {
    const token = useSelector((state) => state.auth.value)

    return (
        <div className="admin">
            {
                token.is_admin === true
                    ?
                    <div>
                        <h1>Добро пожаловать в админку!</h1>
                        <GetUsers />
                        <AllState />
                    </div>
                    :
                    <h1>У вас недостаточно прав!</h1>
            }
        </div>
    )
}