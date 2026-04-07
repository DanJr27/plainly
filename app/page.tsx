import { SignIn } from "./components/login-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-white">Plainly</h1>
      <p className="text-gray-400 mb-12">Automate your Gmail with AI.</p>
      <SignIn />
    </main>
  )
}