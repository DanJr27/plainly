import { auth, signOut } from "@/auth"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated. Please log in.</div>
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p className="text-gray-400">Logged in as: {session.user?.email}</p>
      
      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/" })
        }}
      >
        <button className="mt-4 bg-red-600 px-4 py-2 rounded">Sign Out</button>
      </form>
    </div>
  )
}