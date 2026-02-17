import { createContext, useState } from "react";

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";

  // 👇 logged-in user state
  const [user, setUser] = useState(null);

  return (
    <authDataContext.Provider value={{ serverUrl, user, setUser }}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;