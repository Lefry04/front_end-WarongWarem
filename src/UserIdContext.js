// import React, { createContext, useContext, useState } from 'react';

// const UserIdContext = createContext();

// export const UserIdProvider = ({ children }) => {
//   const [userId, setUserId] = useState({});

//   const setUserIdValue = (id) => {
//     setUserId(id);
//     console.log(id);
//   };

//   return (
//     <UserIdContext.Provider value={{ userId, setUserIdValue }}>
//       {children}
//     </UserIdContext.Provider>
//   );
// };

// export const useUserId = () => {
//   const context = useContext(UserIdContext);

//   if (!context) {
//     throw new Error('useUserId must be used within a UserIdProvider');
//   }

//   return context;
// };
// UserIdProvider.js

// UserIdContext.js
// UserIdContext.js
// import React, { createContext, useContext, useState } from "react";

// const UserIdContext = createContext();

// export const UserIdProvider = ({ children }) => {
//     const [userId, setUserId] = useState(null);

//     return (
//         <UserIdContext.Provider value={{ userId, setUserId }}>
//             {children}
//         </UserIdContext.Provider>
//     );
// };

// export const useUserId = () => {
//     const context = useContext(UserIdContext);
//     if (!context) {
//         throw new Error("useUserId must be used within a UserIdProvider");
//     }
//     return context;
// };

// export default UserIdContext;

// UserIdContext.js

import React, { createContext, useContext, useState } from "react";

const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const contextValue = {
    userId,
    setUserId,
  };

  return (
    <UserIdContext.Provider value={contextValue}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserId = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error("useUserId must be used within a UserIdProvider");
  }
  return context;
};

export default UserIdContext;
