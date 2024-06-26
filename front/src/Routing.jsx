import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";

import {Profile} from "./component/header/Profile/Profile";
import {Reg} from "./component/header/auth/Reg";
import {Login} from "./component/header/auth/Login";
import {Admin} from "./component/ADpanel/Admin";
import {User} from "./component/main/users/User";
import {StatementsCreate} from "./component/main/statements/StatementsCreate";

export function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/user/:id" element={<User />} />

                <Route path="/state" element={<StatementsCreate />} />

                <Route path="/reg" element={<Reg />} />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={<Admin />} />

                <Route path="*" element={<h1>Ошибка в адресе!</h1>} />
            </Routes>
        </BrowserRouter>
    )
}