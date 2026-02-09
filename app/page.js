
import Link from 'next/link'


export default function Step1() {


  return (
    <div>
      <h2>Select Car Make</h2>

      <Link href="/screens/Step2/Toyota">
        Toyota
      </Link>
      <br />
      <Link href="/screens/Step2/Kia">
        Kia
      </Link>
    </div>
  )
}
