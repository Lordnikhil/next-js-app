'use client'
import { useAppState } from './../../state/AppState'
import BackButton from './../../components/BackButton'

export default function Step6() {
  const { state } = useAppState()

  console.log("State in step 6", state)

  const eligible =
    (
      (state.make === 'Toyota' && ['Landcruiser', 'Fortuner'].includes(state.model)) ||
      (state.make === 'Kia' && ['Seltos', 'Carens'].includes(state.model))
    ) &&
    ['Own', 'Mortgage'].includes(state.houseType) &&
    (state.state === 'FL' ) && (state.fireAlarm === 'Yes') &&
    state.bureauScore > 650

  return (
    <>
      <BackButton />
      <h2>
        {eligible
          ? 'You are eligible for pre-own car loan'
          : 'Your application is not eligible for loan'}
      </h2>
    </>
  )
}
