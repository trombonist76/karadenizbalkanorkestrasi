import React, { createContext, useContext, useRef } from 'react'


const RefContext = createContext()

export const RefProvider = ({children}) => {
    const info = useRef()
    const events = useRef()
    const toScroll = ref => {
        ref.current.scrollIntoView()
    }

    const values = {
        info,
        events,
        toScroll
    }

  return (
    <RefContext.Provider value={values}>{children}</RefContext.Provider>
  )
}

export const useRefContext = () => useContext(RefContext)