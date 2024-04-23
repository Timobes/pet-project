import {useSelector} from "react-redux";
import {delOneUser} from "../../ApiServis";

export function DeleteUsers(props) {
    const token = useSelector((state) => state.auth.value)
    const id = props.userid
    const del = () => {
        let vop = window.confirm("Вы уверены, что хотите удалить пользователя?");

        if(vop) {
            delOneUser(id, {headers:{token: token.passwords}})
        } else {
            console.log('отмена удаления')
        }
    }

    return (
        <>
            <button onClick={del}>Удалить пользователя</button>
        </>
    )
}