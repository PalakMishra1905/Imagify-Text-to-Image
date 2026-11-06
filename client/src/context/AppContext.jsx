import {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = (props)=>{
        const [user, setUser] = useState(false); //logged out by default
        const [showLogin, setShowLogin] = useState(false); //Show login form
        const [token, setToken] = useState(localStorage.getItem('token'))
        const backend_url = import.meta.env.VITE_BACKEND_URL
        const [credit, setCredit] = useState(false)

        const value = {
            user, setUser,
            showLogin, setShowLogin,
            token, setToken,
            credit, setCredit,
            backend_url
        }

        return(
            <AppContext.Provider value={value}>
               {props.children}
            </AppContext.Provider>
        )
}

export  default AppContextProvider;