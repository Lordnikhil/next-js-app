'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAppState } from '../../../state/AppState'
import BackButton from '../../../components/BackButton'
import ToggleGroup from '../../../components/ToggleGroup'
import { useParams } from 'next/navigation'

export default function Step2() {
  const params = useParams()
  const { state, update } = useAppState()
  const [models, setModels] = useState([])

  const carMake = params.id.toLowerCase()

  useEffect(() => {
    update({ carMake })
  }, [])

  useEffect(() => {
    fetch(`/api/${carMake}`).then(r => r.json()).then(setModels)
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
