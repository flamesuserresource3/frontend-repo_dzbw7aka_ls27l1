import { Shield, BookOpenCheck, Users, LayoutDashboard } from 'lucide-react';

const features = [
  {
    title: 'Admin oversight',
    description:
      'Monitor usage, manage users, and keep everything running smoothly with full visibility.',
    icon: LayoutDashboard,
  },
  {
    title: 'Teachers create quizzes',
    description:
      'Design engaging quizzes with images and timers. Share an invite code for live sessions.',
    icon: BookOpenCheck,
  },
  {
    title: 'Students join & play',
    description:
      'Join from any device with a code. Earn points and climb the leaderboard in real time.',
    icon: Users,
  },
  {
    title: 'Public and private modes',
    description:
      'Publish to the community or keep it private for your class — flexible by design.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-cyan-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-cyan-900">Built for learning and fun</h2>
          <p className="mt-2 text-cyan-700/80">
            A simple flow for everyone: admins, teachers, and students.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-cyan-100 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 grid place-items-center group-hover:scale-105 transition">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-cyan-900">{f.title}</h3>
              <p className="mt-2 text-sm text-cyan-700/80">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
