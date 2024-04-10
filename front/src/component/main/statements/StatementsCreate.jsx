import {useState} from "react";
import {createState} from "../../ApiServis";
import {useSelector} from "react-redux";

export function StatementsCreate() {
    const [data, setData] = useState()
    const token = useSelector((state) => state.auth.value)

    const submit = (e) => {
        e.preventDefault()

        const parent = e.target.parentElement.children
        let mas = []

        for (let i = 0; i < parent.length - 1; i++) {
            mas.push(parent[i].value)
            console.log(mas)
        }

        createState()
            .then(response => {
                setData(response.message)
            })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='state'>
                <form>
                    <input type="text" className="" placeholder="Номер авто" name="num_auto" required/>
                    <textarea className="" placeholder="Описание" name="name" required></textarea>
                    <input type="submit" value="Отправить" onClick={submit}/>
                </form>
                <div>{data}</div>
            </div>
        </>
    )
}