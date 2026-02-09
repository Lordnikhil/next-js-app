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
      
      <div>
        <label>Address</label><br />
        <input placeholder="Street" value={state.street} onChange={e => update({ street: e.target.value })} /><br />
        <label>City</label><br />
        <input placeholder="City" value={state.city} onChange={e => update({ city: e.target.value })} /><br />
        <label>State</label><br />
        <input placeholder="State" value={state.state} onChange={e => update({ state: e.target.value })} /><br />
        <label>Zip</label><br />
        <input placeholder="Zip" value={state.zip} onChange={e => update({ zip: e.target.value })} /><br />
        <label>SSN</label><br />
        <input placeholder="SSN" value={state.ssn} onChange={e => update({ ssn: e.target.value })} /><br />
      </div>

      {state.state === 'FL' && (
        <>
          <div>Fire Alarm</div>
          <ToggleGroup
            value={state.fireAlarm}
            options={['Yes', 'No']}
            onChange={fireAlarm => update({ fireAlarm })}
          />
        </>
      )}

    {
      !state.bureauScore && 
      <div>
        <button onClick={submit} disabled={loading}
          >
          {loading ? 'Checking credit…' : 'Next'}
        </button>
      </div>
    }

      
    {!loading && state.bureauScore && (
      <div>
        <Link href="/screens/step-six" >
          <button>Continue</button>
        </Link>
      </div>
    )}
      

    </>
  )
}
