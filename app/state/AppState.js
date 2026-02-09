'use client'
import { createContext, useContext, useState } from 'react'

const AppStateContext = createContext(null)

export function AppStateProvider({ children }) {
  const [state, setState] = useState({})

  const update = updates => setState(prev => ({ ...prev, ...updates }))

  return (
    <AppStateContext.Provider value={{ state, update }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  return useContext(AppStateContext)
}
