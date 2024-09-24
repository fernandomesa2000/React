import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "Pocholo",
        email: "pochoman@amigo.edu.co",
        number: 3022432253
    });

    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);