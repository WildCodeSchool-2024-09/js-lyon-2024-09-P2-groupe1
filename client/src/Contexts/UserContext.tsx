import { type ReactNode, createContext, useContext, useState } from "react";

type UserContextType = {
  showUserLogo: boolean;
  setShowUserLogo: (value: boolean) => void;
  userName: string;
  setUserName: (value: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

//Création de UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Création de UserProvider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [showUserLogo, setShowUserLogo] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Partage des props via le contexte UserContext

  return (
    <UserContext.Provider
      value={{
        showUserLogo,
        setShowUserLogo,
        userName,
        setUserName,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

//Custom hook pour utilisation de UserContext

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
