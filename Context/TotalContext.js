import React, {useContext, useState} from 'react'

const TotalContext = React.createContext()
const SetTotalContext = React.createContext()

export function useTotal() {
    return useContext(TotalContext)
}

export function useSetTotal() {
    return useContext(SetTotalContext)
}


export function TotalProvider({children}){
    const [total, setTotal] = useState(0)

    function setTotalParam(total){
        setTotal(total)
    }


    return (
        <TotalContext.Provider value={total}>
            <SetTotalContext.Provider value={setTotalParam}>
                {children}
            </SetTotalContext.Provider>
        </TotalContext.Provider>
    )

}