import Image from 'next/image'
import Link from 'next/link'


// index page design goes here
// theme or dark-mode already setup 
export default function Home() {
  return (
    <main >
      <Link href={'/dashboard'}>Go to dashboard</Link>
    </main>
  )
}
