import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearToken} from "../../state/slice/authSlice";

export function Main() {

    const token = useSelector((state) => state.auth.value)
    const nav = useNavigate()

    // const dispatch = useDispatch()
    // dispatch(clearToken())

    console.log(token)

    if (token.length === 0) {
        nav('/reg')
    }

    return (
        <main>
            <div className='auth'>
                {/*<Reg />*/}
                {/*<Login />*/}
                <h1>Глав страница</h1>
            </div>
        </main>
    )
}