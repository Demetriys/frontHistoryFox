import Link from 'next/link'
import Counter from "@/app/counter/page";


export default function Home() {
    return(
        <>
            <h1>Homepage</h1>
            <Link href="/calc">Calc</Link> <hr/>
            <Link href="/counter">Counter</Link> <hr/>
            <Link href="/clients">Navigate to clients</Link> <hr/>
        </>
    )
}
