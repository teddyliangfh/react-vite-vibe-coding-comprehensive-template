import { IncrementButton } from '../components/IncrementButton'

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Hello</h1>
        <IncrementButton />
      </main>
    </div>
  )
}
