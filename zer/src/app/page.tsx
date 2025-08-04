export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 font-mono">
      <header className="w-full flex justify-between items-center 
      px-8 py-6 absolute top-0 left-0 z-10">
        <div className="text-2xl font-bold">
          Zerum
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-white hover:text-red-500">Features</a>
          <a href="#" className="text-white hover:text-red-500">Pricing</a>
          <a href="#" className="text-white hover:text-red-500">Login</a>
        </nav>
      </header>

      <main className="flex items-center justify-center min-h-screen text-center px-4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Space, your way.</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Build your perfect dashboard with full customisable widgets, play YouTube playlists, manage to-do lists,
            plan with a calendar, pin moodboard images, jot down notes, and more. Everything you need, just the way
            you want it. 
          </p>
        </div>
      </main>
    </div>
  );
}
