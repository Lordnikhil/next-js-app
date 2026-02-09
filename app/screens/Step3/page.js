'use client'
import { useEffect, useState } from 'react'
import { useAppState } from './../../state/AppState'
import BackButton from './../../components/BackButton'
import ToggleGroup from './../../components/ToggleGroup'
import Link from 'next/link'

export default function Step3() {
  const { state, update } = useAppState()
  const [models, setModels] = useState([])

  useEffect(() => {
    fetch('/api/kia').then(r => r.json()).then(setModels)
  }, [])

  return (
    <>
      <BackButton />
      <ToggleGroup
        options={models}
        value={state.model}
        onChange={model => update({ model })}
      />
      <Link href="/screens/Step4"><button>Next</button></Link>
    </>
  )
}
