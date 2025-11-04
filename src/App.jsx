import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PublicQuizzes from './components/PublicQuizzes';
import Login from './components/Login';
import Register from './components/Register';

function DecorativeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.2),transparent_40%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'dots\' x=\'0\' y=\'0\' width=\'24\' height=\'24\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23a5f3fc\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23dots)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
}

function usePathname() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  return path;
}

export default function App() {
  const path = usePathname();

  const showLanding = path === '/' || path === '/index.html';
  const showLogin = path === '/login';
  const showRegister = path === '/register';

  return (
    <div className="min-h-screen bg-white text-cyan-900">
      <DecorativeBackground />
      <Navbar />
      <main>
        {showLanding && (
          <>
            <Hero />
            <Features />
            <PublicQuizzes />
          </>
        )}
        {showLogin && <Login />}
        {showRegister && <Register />}
      </main>
      <footer className="border-t border-cyan-100 bg-white/70 backdrop-blur mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-cyan-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} QuizSpark — made for playful learning.
          </p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-cyan-900">Features</a>
            <a href="#public" className="hover:text-cyan-900">Public Quizzes</a>
            <a href="/login" className="hover:text-cyan-900">Login</a>
            <a href="/register" className="hover:text-cyan-900">Register</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
