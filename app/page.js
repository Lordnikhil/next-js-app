
import Link from 'next/link'


export default function Step1() {
  return (
    <>
      <h2>Select Car Make</h2>
      <Link href="/screens/step-two/toyota">
        Toyota
      </Link>
      <br />
      <Link href="/screens/step-two/kia">
        Kia
      </Link>
    </>
  )
}
