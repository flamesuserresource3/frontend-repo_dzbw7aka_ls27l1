import { Globe, Lock, Timer } from 'lucide-react';

const sampleQuizzes = [
  {
    id: '1',
    title: 'Algebra Essentials',
    questions: 10,
    visibility: 'public',
    tags: ['Math', 'Grade 8'],
  },
  {
    id: '2',
    title: 'World History: Ancient Civilizations',
    questions: 12,
    visibility: 'public',
    tags: ['History', 'Grade 10'],
  },
  {
    id: '3',
    title: 'Science Trivia Blitz',
    questions: 8,
    visibility: 'private',
    tags: ['Science', 'Fun'],
  },
];

export default function PublicQuizzes() {
  return (
    <section id="public" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-cyan-900">Explore public quizzes</h2>
            <p className="mt-2 text-cyan-700/80">Browse community-created quizzes and try a sample game.</p>
          </div>
          <a href="/login" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-200 text-cyan-800 hover:bg-cyan-50">
            Log in to play
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleQuizzes.map((q) => (
            <article key={q.id} className="rounded-2xl border border-cyan-100 p-5 bg-gradient-to-br from-white to-cyan-50/40 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-cyan-900">{q.title}</h3>
                {q.visibility === 'public' ? (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    <Globe className="h-3.5 w-3.5" /> Public
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                    <Lock className="h-3.5 w-3.5" /> Private
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-cyan-700/80">
                <span className="inline-flex items-center gap-1"><Timer className="h-4 w-4" /> {q.questions} questions</span>
                <span className="text-cyan-300">•</span>
                <div className="flex flex-wrap gap-1.5">
                  {q.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-cyan-100 text-cyan-800">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href="/login" className="inline-flex-1 inline-flex justify-center items-center px-3 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 text-sm">Play</a>
                <a href="/register" className="inline-flex justify-center items-center px-3 py-2 rounded-lg border border-cyan-200 text-cyan-800 hover:bg-cyan-50 text-sm">Save</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
