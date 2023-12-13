// // import { createContext, useContext } from "react";

// // const ReservationContext = createContext();

// // export const ReservationProvider = ({ children }) => {
// //   // Anda dapat mengganti nilai default sesuai kebutuhan Anda
// //   const reservationData = {
// //     // Data reservasi default
// //   };

// //   return (
// //     <ReservationContext.Provider value={{ reservationData }}>
// //       {children}
// //     </ReservationContext.Provider>
// //   );
// // };

// // export const useReservationContext = () => {
// //   const context = useContext(ReservationContext);
// //   if (!context) {
// //     throw new Error(
// //       "useReservationContext must be used within a ReservationProvider"
// //     );
// //   }
// //   return context;
// // };

// // ReservationContext.js

// import React, { createContext, useContext, useState } from 'react';

// const ReservationContext = createContext();

// export const ReservationProvider = ({ children }) => {
//   const [reservationData, setReservationData] = useState(null);

//   const updateReservationData = (data) => {
//     setReservationData(data);
//   };

//   return (
//     <ReservationContext.Provider value={{ reservationData, updateReservationData }}>
//       {children}
//     </ReservationContext.Provider>
//   );
// };

// export const useReservationContext = () => {
//   return useContext(ReservationContext);
// };
import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
    const [reservationData, setReservationData] = useState({});

    const updateReservationData = (data) => {
        setReservationData(data);
        console.log("jadi");
    };

    return (
        <ReservationContext.Provider value={{ reservationData, updateReservationData }}>
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservationContext must be used within a ReservationProvider");
    }
    return context;
};
