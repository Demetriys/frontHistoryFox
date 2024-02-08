import Link from 'next/link'
import Calc from "@/app/components/calc";


export default function CalcPage () {
    return <>
      <center> <h1>Calc page</h1></center>
        <Link href="/">Go back to homepage</Link>

        <br/><hr/>
        <Calc/>

    </>
}