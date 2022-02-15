import { useRef ,useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Authentication from './Authentication'

export default function Signup (){

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
      
        const signupResult = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
      
        if(signupResult.status === 200){
            const data = await signupResult.json();
            setUserId(data.userId)
        }
    }

    return (
        <Authentication type='Signup' linkMethod='login' refEmail={refEmail} refPassword={refPassword} onSubmitHandler={onSubmitHandler} />
    )
}
