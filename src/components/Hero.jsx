import Spline from '@splinetool/react-spline';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cyan-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-medium">
            <HelpCircle className="h-4 w-4" />
            Playful quizzes for web and mobile
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-cyan-900">
            Engage your class with live, multiplayer quizzes
          </h1>
          <p className="mt-4 text-cyan-800/80 text-lg">
            Create stunning quizzes, host them live, and invite students with a simple code. Public or private — your call.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/register" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 shadow transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/login" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-cyan-200 text-cyan-800 hover:bg-cyan-50">
              I already have an account
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-cyan-700/80">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
            Works beautifully on phones, tablets, and desktop
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/30" />
        </div>
      </div>
    </section>
  );
}
