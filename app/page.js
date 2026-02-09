'use client'

import { useRouter } from 'next/navigation'
import { useAppState } from './state/AppState'

export default function Step1() {
  const router = useRouter()
  const { update } = useAppState()

  return (
    <div>
      <h2>Select Car Make</h2>

      
      <button onClick={() => {
        update({ make: 'Toyota' })
        router.push('/screens/Step2')
      }}>
        Toyota
      </button>
      <button onClick={() => {
        update({ make: 'Kia' })
        router.push('/screens/Step3')
      }}>
        Kia
      </button>
    </div>
  )
}
