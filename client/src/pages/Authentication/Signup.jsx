import { useRef } from "react"
import Authentication from './Authentication'

export default function Signup (props){

    const refEmail = useRef()
    const refPassword = useRef()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const data = {
            email: refEmail.current.value,
            password: refPassword.current.value
        }
        const signupResult = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(signupResult.status === 200)
            props.setIsLogedIn(true)
        
    }

    return (
        <Authentication type='Signup' linkMethod='login' refEmail={refEmail} refPassword={refPassword} onSubmitHandler={onSubmitHandler} />
    )
}
