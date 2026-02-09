'use client'
import { createContext, useCallback, useContext, useState } from 'react'

const AppStateContext = createContext(null)

export function AppStateProvider({ children }) {
  const [state, setState] = useState({
    street: "",
    city:"",
    zip:"",
    ssn:"",
    state:"",
    carMake: "",
    model: "",
    houseType: "",
    fireAlarm: "",
    bureauScore: null,
  })

  const update = useCallback(updates => setState(prev => ({ ...prev, ...updates })), [])

  return (
    <AppStateContext.Provider value={{ state, update }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  return useContext(AppStateContext)
}
