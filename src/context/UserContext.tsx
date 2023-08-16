import { createContext, ReactNode, useState } from "react";
import { UsersResponseDataModel } from "../api/models";

type UserProviderProps = {
  children: ReactNode;
};

type UserContext = {
  user: UsersResponseDataModel | null;
  setUser: (user: UsersResponseDataModel | null) => void;
};

export const UserContext = createContext({} as UserContext);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UsersResponseDataModel | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
