import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)
    //more states can be made and passed on to the context provider value props in the form of object
    return(
        <UserContext.Provider value={{user, setUser}}>
            {/* The componenets written inside this context provider tag can get the access to the global user made here  */}
            {/* like we provide here user and the method setUser in the value field*/}
            {children}
            {/* children is the any component which can further conain more nested componenets */}
        </UserContext.Provider>
    )
}

export default UserContextProvider