import {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = (props)=>{
        const [user, setUser] = useState(false); //logged out by default
        const [showLogin, setShowLogin] = useState(false); //Show login form

        const value = {
            user, setUser,
            showLogin, setShowLogin
        }

        return(
            <AppContext.Provider value={value}>
               {props.children}
            </AppContext.Provider>
        )
}

export  default AppContextProvider;