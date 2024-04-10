import {Reg} from "../header/auth/Reg";
import {Login} from "../header/auth/Login";

export function Main() {
    return (
        <main>
            <div className='auth'>
                <Reg />
                <Login />
            </div>
        </main>
    )
}