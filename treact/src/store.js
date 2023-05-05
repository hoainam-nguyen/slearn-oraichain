import { createContext, useContext, useState } from "react";

const AppContext = createContext('default value');
function AppProviders({children}){
    const [signin, setSignin] = useState(false)
    const [ user, setUser] = useState('')
    const [ like, setLike] = useState({})
    const [ upvote, setUpvote] = useState({})
    const [ downvote, setDownvote] = useState({})
    let data = {
        signin:{
            status: signin,
            set: setSignin
        },
        user:{
            status: user,
            set: setUser
        },
        like:
        {
            status: like,
            set: setLike
        }, 
        upvote:
        {
            status: upvote,
            set: setUpvote
        }, downvote:
        {
            status: downvote,
            set: setDownvote
        }
    }
    return <AppContext.Provider value= {data} >
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProviders}