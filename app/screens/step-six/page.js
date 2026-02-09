'use client'
import { useAppState } from '../../state/AppState'
import BackButton from '../../components/BackButton'
import { DUMMY_TOYOTA_DATA } from '../../api/toyota/route'
import { DUMMY_KIA_DATA } from '../../api/kia/route'

export default function Step6() {
  const { state } = useAppState()
  
  const eligible =
    (
      (state.carMake === 'toyota' && DUMMY_TOYOTA_DATA.includes(state.model)) ||
      (state.carMake === 'kia' && DUMMY_KIA_DATA.includes(state.model))
    ) &&
    ['Own', 'Mortgage'].includes(state.houseType) &&
    (state.state === 'FL' ) && 
    (state.fireAlarm === 'Yes') &&
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
