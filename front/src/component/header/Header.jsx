import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
export function Header() {

    const token = useSelector((state) => state.auth.value)

    // const dispatch = useDispatch()
    // dispatch(clearToken())

    return (
        <header className="header">
            <Link to="/">
                <div className="logo">
                    Нарушениям.Нет
                </div>
            </Link>

            <Link to="/profile">
                <div className="profile">
                    Профиль
                    {
                        token
                            ?
                                <div>
                                    <div>{token.login}</div>
                                    {
                                        token.is_admin === true
                                            ?
                                            <Link to="/admin">Админка</Link>
                                            :
                                            <h1></h1>
                                    }
                                    <Link to="/state">Создать заявление</Link>
                                </div>
                            :
                                <h1></h1>
                    }
                </div>
            </Link>
        </header>
    )
}