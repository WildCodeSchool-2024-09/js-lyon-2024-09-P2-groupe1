import { type ReactNode, createContext, useContext, useState } from "react";

type UserContextType = {
  showUserLogo: boolean;
  setShowUserLogo: (value: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [showUserLogo, setShowUserLogo] = useState(false);

  return (
    <UserContext.Provider value={{ showUserLogo, setShowUserLogo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
