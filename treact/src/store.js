import { createContext, useContext, useState } from "react";

const AppContext = createContext('default value');
function AppProviders({children}){
    const [signin, setSignin] = useState(false)
    const [ user, setUser] = useState('')
    let data = {
        signin:{
            status: signin,
            set: setSignin
        },
        user:{
            status: user,
            set: setUser
        }
    }
    return <AppContext.Provider value= {data} >
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProviders}