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
                                    <br/>
                                    <Link to="/state">Создать заявление</Link>
                                </div>
                            :
                                // <h1>Профиль</h1>
                                <Link to="/reg">Регистрация</Link>
                    }
                </div>
            </Link>
        </header>
    )
}