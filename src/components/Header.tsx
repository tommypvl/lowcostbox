import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f1f1f1' }}>
      <nav>
        <Link href="/">Головна</Link> |{' '}
        <Link href="/cart">Кошик</Link>
      </nav>
    </header>
  )
}
