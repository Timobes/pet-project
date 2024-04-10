import {useSelector} from "react-redux";

export function Admin() {
    const token = useSelector((state) => state.auth.value)

    return (
        <div className="admin">
            {
                token.is_admin === true
                    ?
                        <h1>Добро пожаловать в админку!</h1>
                    :
                        <h1>У вас недостаточно прав!</h1>
            }
        </div>
    )
}