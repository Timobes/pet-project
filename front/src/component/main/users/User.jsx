import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export function User() {
    const {id} = useParams()
    const [data, setData] = useState([])

    return (
        <div className="profile">

        </div>
    )
}