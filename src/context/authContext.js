import { createContext, useState, Children } from "react";
export const AuthContext = createContext()

export const AuthProvider = ({}) =>{
    // usuario estaticp (de momento no existe)
    const [user, setUser] = useState(null)

    const data = {
        user,
    }

    // contexto
    return <AuthContext value={data}>{Children}</AuthContext>
}