'use client'
import BackButton from './../../components/BackButton'
import { useAppState } from './../../state/AppState'


import Link from 'next/link'

export default function Step4() {
  const { state, update } = useAppState()

  return (
    <>
      <BackButton />
      <select
        value={state.houseType || ''}
        onChange={e => update({ houseType: e.target.value })}
      >
        <option value="">Select</option>
        <option>Own</option>
        <option>Mortgage</option>
        <option>Rented</option>
      </select>
      <Link href="/screens/Step5"><button>Next</button></Link>
    </>
  )
}
