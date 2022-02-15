import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Logout() {

    const { id } = useContext(UserContext)
    const [userId, setUserId] = id

    const logoutHandler = async () => {
        const logoutProcess = await fetch('/api/logout')
        if(logoutProcess.ok){
            setUserId(undefined)
        }
    }

    return (
        <button onClick={logoutHandler}> Logout </button>
    )
}