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

  useEffect(() => {
    update({ carMake: params.id })
  }, [params.id, update])

  useEffect(() => {
    fetch(`/api/${params.id}`).then(r => r.json()).then(setModels)
  }, [params.id])

  return (
    <>
      <BackButton />
      <ToggleGroup
        options={models}
        value={state.model}
        onChange={model => update({ model })}
      />
      <Link href="/screens/step-four"><button>Next</button></Link>
    </>
  )
}
