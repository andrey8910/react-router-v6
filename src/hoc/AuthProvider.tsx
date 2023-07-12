import {createContext, useState} from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}:any): any => {
    const [user, setUser] = useState(null);
    const signIn: any = (newUser:any, cb:any): void =>{
        setUser(newUser);
        cb()
    };
    const signOut = (cb: any) =>{
        setUser(null);
        cb();
    };

    const value: any = {user, signIn, signOut}
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
