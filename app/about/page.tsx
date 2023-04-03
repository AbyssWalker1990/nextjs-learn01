import Link from 'next/link'

export const metadata = {
  title: 'About Page',
  description: 'Created by ME',
}

export default function About() {
  // throw new Error('Not today')
  return (
    <>
      <h1>About</h1>
      <Link href='/'>Link to Home Page</Link>
    </>
  )
}
