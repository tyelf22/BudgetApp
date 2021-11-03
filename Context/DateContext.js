import React, {useContext, useState} from 'react'

const DateContext = React.createContext()
const DateNextContext = React.createContext()
const DatePrevContext = React.createContext()

export function useDate() {
    return useContext(DateContext)
}

export function useDateNext() {
    return useContext(DateNextContext)
}

export function useDatePrev() {
    return useContext(DatePrevContext)
}

export function DateProvider({children}){
    const [date, setDate] = useState(new Date().getMonth()+1)
    const [year, setYear] = useState(new Date().getFullYear())

    function toggleDateNext(){
        if(date >= 12){
            setDate(1)
            setYear(year + 1)
        }else {
            setDate(date + 1)

        }
        
    }

    function toggleDatePrev(){
        if(date <= 1){
            setDate(12)
            setYear(year - 1)
        }else {
            setDate(date - 1)

        }
    }

    return (
        <DateContext.Provider value={[date, year]}>
            <DateNextContext.Provider value={toggleDateNext}>
            <DatePrevContext.Provider value={toggleDatePrev}>
                {children}
            </DatePrevContext.Provider>
            </DateNextContext.Provider>
        </DateContext.Provider>
    )

}