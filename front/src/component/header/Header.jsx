import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Popup from "reactjs-popup";
import {Login} from "./auth/Login/Login";
import {Reg} from "./auth/Reg/Reg";
import './style.css'
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

            {
                token
                    ? <div className="profile">
                        <Link to="/profile">
                            <p className="username">{token[0].username}</p>
                            {
                                token[0].roles === 9
                                    ? <Link to="/admin">Admin panel</Link>

                                    : <></>

                            }
                        </Link>
                    </div>
                    :
                    <div>
                        <Popup trigger={<button className="header-login-btn"> Войти</button>} modal position="center">
                            <Login/>
                        </Popup>
                        <hr/>
                        <Popup trigger={<button className="header-login-btn">Зарегаться</button>} modal
                               position="center">
                            <Reg/>
                        </Popup>
                    </div>
            }
        </header>
    )
}