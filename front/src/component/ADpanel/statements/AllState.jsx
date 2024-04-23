import {useEffect, useState} from "react";
import {getState} from "../../ApiServis";
import {useSelector} from "react-redux";
import {DeleteState} from "./DeleteState";

export function AllState() {
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)

    useEffect(() => {
        getState({headers:{token: token.passwords}})
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <h1>Все статьи</h1>
            {
                data.map((state) => (
                    <>
                        <div>{state.statement_id}</div>
                        <div>{state.num_auto}</div>
                        <div>{state.description}</div>
                        <hr className="line"/>
                        <DeleteState id={state.statement_id}/>
                    </>
                ))
            }
        </>
    )
}