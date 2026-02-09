'use client'
import { useState } from 'react'
import { useAppState } from './../../state/AppState'
import BackButton from './../../components/BackButton'
import ToggleGroup from './../../components/ToggleGroup'
import Link from 'next/link'

export default function Step5() {
  const { state, update } = useAppState()
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    const res = await fetch('/api/bureau', {
      method: 'POST',
      body: JSON.stringify({ ssn: state.ssn })
    })
    const result = await res.json()
    update({ bureauScore: result.score })
    setLoading(false)
  }

  return (
    <>
      <BackButton />
      <input placeholder="Street" onChange={e => update({ street: e.target.value })} />
      <input placeholder="City" onChange={e => update({ city: e.target.value })} />
      <input placeholder="State" onChange={e => update({ state: e.target.value })} />
      <input placeholder="Zip" onChange={e => update({ zip: e.target.value })} />

      {state.state === 'FL' && (
        <>
          <div>Fire Alarm</div>
          <ToggleGroup
            options={['Yes', 'No']}
            value={state.fireAlarm}
            onChange={fireAlarm => update({ fireAlarm })}
          />
        </>
      )}

      <input placeholder="SSN" onChange={e => update({ ssn: e.target.value })} />

      {!state.bureauScore &&<button onClick={submit} disabled={loading}>
        {loading ? 'Checking credit…' : 'Next'}
      </button>}

      {!loading && state.bureauScore && (
        <Link href="/screens/Step6"><button>Continue</button></Link>
      )}
    </>
  )
}
