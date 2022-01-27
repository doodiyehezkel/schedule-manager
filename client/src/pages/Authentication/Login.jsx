import { useRef } from "react"
import Authentication from './Authentication'

export default function Login(props) {

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

        if(loginResult.status === 200)
            props.setIsLogedIn(true)
    }

    return (
        <Authentication type='Login' linkMethod='signup' refEmail={refEmail} refPassword={refPassword} onSubmitHandler={onSubmitHandler} />
    )
}

