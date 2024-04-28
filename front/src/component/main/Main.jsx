import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearToken} from "../../state/slice/authSlice";
import {StatementsCreate} from "./statements/StatementsCreate";
import {Reg} from "../header/auth/Reg";

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
                {
                    token.login > 0
                        ?
                            <StatementsCreate />
                        :
                            <Reg />
                }
            </div>
        </main>
    )
}