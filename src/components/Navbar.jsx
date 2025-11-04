import { LogIn, UserPlus, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-cyan-100/70 text-cyan-700 grid place-items-center shadow-inner">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-semibold text-cyan-800 text-lg">QuizSpark</span>
        </div>
        <nav className="hidden md:flex items-center gap-3">
          <a href="#features" className="text-cyan-800/80 hover:text-cyan-900 text-sm font-medium">Features</a>
          <a href="#public" className="text-cyan-800/80 hover:text-cyan-900 text-sm font-medium">Public Quizzes</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="/login" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-cyan-800 hover:bg-cyan-50 border border-cyan-200 transition">
            <LogIn className="h-4 w-4" />
            <span className="text-sm font-medium">Log in</span>
          </a>
          <a href="/register" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 shadow-sm transition">
            <UserPlus className="h-4 w-4" />
            <span className="text-sm font-medium">Sign up</span>
          </a>
        </div>
      </div>
    </header>
  );
}
