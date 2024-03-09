import { createContext, useState, ReactNode } from "react";
type UserState = {
  loggedIn: boolean;
  userData: any;
}


export const AuthContext = createContext({ loggedIn: false, userData: {}, setUser: () => {} } as any);


const Context = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserState>(() => ({
    loggedIn: false,
    userData: {},
  }));

  return <AuthContext.Provider value={{...user, setUser}}>{children}</AuthContext.Provider>;
};

export default Context;
