import React, { createContext, useContext } from 'react'

const OrderContext =  createContext();
export const  OrderProvider = ({children})=>{
    return(
        <OrderContext.Provider  value={{

        }}> 
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = ()=>useContext(OrderContext);