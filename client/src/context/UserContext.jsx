import { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [userName, setUserName] = useState()
    const [userId, setUserId] = useState()
    
    return (
        <UserContext.Provider value={{
            name: [userName, setUserName],
            id: [userId, setUserId]
        }}>
            {props.children}
        </UserContext.Provider>
    )


}



