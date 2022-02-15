import { useRef, useContext } from "react"
import Authentication from './Authentication'

import { UserContext } from "../../context/UserContext"

export default function Login() {

    const { name, id } = useContext(UserContext)
    const [userName, setUserName] = name
    const [userId, setUserId] = id

    const refEmail = useRef()
    const refPassword = useRef()


    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const data = {
            email: refEmail.current.value,
            password: refPassword.current.value
        }

        const loginResult = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(loginResult.status === 200){
            const data = await loginResult.json();
            setUserId(data.userId)
        }
           
    }

    return (
        <Authentication type='Login' linkMethod='signup' refEmail={refEmail} refPassword={refPassword} onSubmitHandler={onSubmitHandler} />
    )
}

