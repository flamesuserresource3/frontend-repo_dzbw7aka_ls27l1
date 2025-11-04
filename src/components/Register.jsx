import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered (demo). Backend registration will be connected next.');
  };

  return (
    <section className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-cyan-50 via-white to-white">
      <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-cyan-100 bg-white/80 backdrop-blur shadow-sm">
        <a href="/" className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </a>
        <h1 className="text-2xl font-bold text-cyan-900">Create your account</h1>
        <p className="text-cyan-700/80 mt-1">Join as an admin, teacher, or student.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-cyan-900">Full name</label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-cyan-500"><User className="h-4 w-4" /></span>
              <input type="text" required placeholder="Jane Doe" className="w-full pl-10 pr-3 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-cyan-900">Email</label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-cyan-500"><Mail className="h-4 w-4" /></span>
              <input type="email" required placeholder="you@example.com" className="w-full pl-10 pr-3 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-cyan-900">Password</label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-cyan-500"><Lock className="h-4 w-4" /></span>
              <input type="password" required placeholder="••••••••" className="w-full pl-10 pr-3 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-cyan-900">Role</label>
            <select className="mt-1 w-full px-3 py-2 rounded-lg border border-cyan-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400" defaultValue="student">
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500">Create account</button>
        </form>
        <p className="text-sm text-cyan-700/80 mt-4">Already have an account? <a href="/login" className="text-cyan-700 underline hover:text-cyan-900">Log in</a></p>
      </div>
    </section>
  );
}
