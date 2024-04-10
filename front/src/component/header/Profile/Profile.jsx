import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../../state/slice/authSlice";

export function Profile() {
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    // dispatch(clearToken())

    console.log(token)

    const exit = () => {
        let vop = window.confirm("Вы хотите выйти?");

        if(vop) {
            dispatch(clearToken())
        } else {
            console.log('отмена выхода')
        }
    }

    return (
        <div className="profile">
            {
                token
                    ?
                    <div>
                        <div>Имя: {token.name}</div>
                        <div>Фамилия: {token.last_name}</div>
                        <div>Отчество: {token.middle_name}</div>
                        <div>Почта: {token.email}</div>
                        <div>Номер телефона: {token.phone}</div>

                        <button onClick={exit} className="exit-btn">Выйти</button>
                    </div>
                    :
                    <h1>Вы не вошли в аккаунт!</h1>
            }
        </div>
    )
}