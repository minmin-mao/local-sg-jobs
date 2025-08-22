import { useState } from "react";
import { CheckCircle2, Smartphone, Laptop, Shield, Clock3, ArrowRight, Phone, Mail, MapPin, FileText, Search, Quote } from "lucide-react";

const roles = [
  {
    title: "Online Customer Support (Part-Time)",
    pay: "$12–$16/hr",
    summary: "Reply to chats/emails and handle basic FAQs.",
    skills: ["Communication", "Patience"],
  },
  {
    title: "Survey & Research Helper",
    pay: "$6–$12/hr (task-based)",
    summary: "Complete online surveys and simple research tasks.",
    skills: ["Basic English", "Attention to detail"],
  },
  {
    title: "Data Entry Clerk (Part-Time)",
    pay: "$9–$13/hr",
    summary: "Enter and clean data in spreadsheets or simple tools.",
    skills: ["Typing accuracy", "Consistency"],
  },
  {
    title: "Social Media Assistant (Part-Time)",
    pay: "$12–$20/hr",
    summary: "Draft captions, schedule posts, and basic replies.",
    skills: ["Writing", "Platform basics (IG/FB/TikTok)"],
  },
  {
    title: "Remote Tech Support (Entry-Level)",
    pay: "$14–$20/hr",
    summary: "Guided troubleshooting via chat or email.",
    skills: ["Basic IT", "Problem-solving"],
  },
  {
    title: "Freelance Content Creator",
    pay: "$14–$20/hr or $30–$80/article",
    summary: "Write short posts, simple blogs, or product blurbs.",
    skills: ["Writing", "Research"],
  },
];

const successStories = [
  {
    title: "Matched to a remote customer support role within a week.",
    body: "I wanted a part-time job I could do after office hours. Local SG Jobs matched me to a customer support role that fit my timing. The application was simple, and I started earning quickly.",
  },
  {
    title: "Simple tasks that fit into my free time.",
    body: "As a stay-at-home parent, I needed flexible work. I was matched to survey and data entry jobs I could do on my laptop in the evenings. It helped me contribute income without affecting family time.",
  },
  {
    title: "Extra side income on top of my main job.",
    body: "I was looking for additional income to support my monthly expenses. I got matched to a social media assistant role that I can do fully online. It’s flexible and doesn’t affect my full-time job.",
  },
  {
    title: "No resume needed, just skills.",
    body: "I didn’t have much past experience, but Local SG Jobs still matched me with content posting and research tasks. It gave me confidence to start earning from home.",
  },
];

const SKILL_OPTIONS = [
  "Communication",
  "Typing & Data Entry",
  "Customer Service",
  "Social Media",
  "Content Writing",
  "Basic IT Support",
  "Attention to Detail",
  "Problem-Solving",
  "Other (please specify)",
];

export default function LocalSgJobsLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nationality, setNationality] = useState("Singapore Citizen");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [otherSkill, setOtherSkill] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const showOther = selectedSkills.includes("Other (please specify)");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">SG</div>
              <span className="font-semibold">Local SG Jobs</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#jobs" className="hover:text-neutral-700">Jobs</a>
              <a href="#how" className="hover:text-neutral-700">How It Works</a>
              <a href="#stories" className="hover:text-neutral-700">Success Stories</a>
              <a href="#faq" className="hover:text-neutral-700">FAQ</a>
              <a href="#contact" className="hover:text-neutral-700">Contact</a>
              <span className="text-xs text-neutral-500">SG Citizens & PRs only</span>
            </nav>
            <div className="hidden md:block">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow transition">
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
            <button className="md:hidden rounded-xl border px-3 py-2" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle Menu">☰</button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-3">
              <div className="grid gap-2 text-sm">
                <a href="#jobs" className="px-2 py-2 rounded hover:bg-neutral-100">Jobs</a>
                <a href="#how" className="px-2 py-2 rounded hover:bg-neutral-100">How It Works</a>
                <a href="#stories" className="px-2 py-2 rounded hover:bg-neutral-100">Success Stories</a>
                <a href="#faq" className="px-2 py-2 rounded hover:bg-neutral-100">FAQ</a>
                <a href="#contact" className="px-2 py-2 rounded hover:bg-neutral-100">Contact</a>
                <span className="px-2 text-xs text-neutral-500">SG Citizens & PRs only</span>
                <a href="#apply" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm shadow-sm">Apply Now</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Remote Part‑Time Jobs for Adults in Singapore</h1>
              <p className="mt-3 text-neutral-700">Flexible, skills‑based roles you can do with a phone or laptop. WhatsApp updates within 48 hours. Data protected under PDPA.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm shadow-sm hover:shadow">Apply Now <ArrowRight size={16}/></a>
                <a href="#jobs" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm hover:bg-neutral-50">See Roles</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
                <span className="inline-flex items-center gap-2"><Smartphone size={16}/> Phone‑ready</span>
                <span className="inline-flex items-center gap-2"><Laptop size={16}/> Laptop‑friendly</span>
                <span className="inline-flex items-center gap-2"><Shield size={16}/> PDPA‑aligned</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="rounded-2xl border p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-neutral-900 text-white rounded-xl grid place-items-center">SG</div>
                    <div className="text-sm">
                      <div className="font-semibold">Quick Apply</div>
                      <div className="text-neutral-500">Citizens & PRs • Remote only</div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> No experience required</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Flexible hours</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Remote only</div>
                  </div>
                  <a href="#apply" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm">Start Application</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section id="jobs" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured Remote Roles</h2>
              <p className="text-neutral-600 mt-1">Entry‑level and part‑time opportunities — no office, no commute.</p>
            </div>
            <a href="#apply" className="hidden sm:inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-neutral-50"><Search size={16}/> Get Matched</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow transition">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-tight">{role.title}</h3>
                  <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1">Remote</span>
                </div>
                <div className="mt-2 text-sm text-neutral-600">{role.summary}</div>
                <div className="mt-3 text-sm">
                  <div className="font-medium">Pay: <span className="font-semibold">{role.pay}</span></div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-700">
                  {role.skills.map((s) => (
                    <span key={s} className="rounded-full bg-neutral-100 px-2 py-1">{s}</span>
                  ))}
                </div>
                <a href="#apply" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm">Apply <ArrowRight size={16}/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white grid place-items-center"><FileText size={18}/></div>
              <h3 className="mt-3 font-semibold">1) Apply once</h3>
              <p className="text-sm text-neutral-700 mt-1">Share your skills and basic details so we know what roles fit you.</p>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white grid place-items-center"><Search size={18}/></div>
              <h3 className="mt-3 font-semibold">2) Get matched</h3>
              <p className="text-sm text-neutral-700 mt-1">We review your info and send suitable job matches on WhatsApp within 48 hours.</p>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white grid place-items-center"><Clock3 size={18}/></div>
              <h3 className="mt-3 font-semibold">3) Start earning</h3>
              <p className="text-sm text-neutral-700 mt-1">Accept a role and begin remote tasks at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Banner */}
      <section className="py-6 bg-neutral-100 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-neutral-800">
          <strong>Strictly for:</strong> Singapore Citizens & Permanent Residents • <strong>Remote only</strong> • <strong>Part‑time & entry‑level</strong>. Earnings vary by role, hours, and performance.
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Apply in Minutes</h2>
            <p className="text-neutral-600 text-sm mt-1">WhatsApp updates within 48 hours (business days). Your information is protected under PDPA.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Full Name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="e.g. Tan Wei Ming"/>
                </div>
                <div>
                  <label className="text-sm flex items-center gap-2"><Mail size={14}/> Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="name@example.com"/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm flex items-center gap-2"><Phone size={14}/> WhatsApp Number (+65)</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="+65 9XXX XXXX"/>
                </div>
                <div>
                  <label className="text-sm">Nationality (Eligibility)</label>
                  <select className="mt-1 w-full rounded-xl border px-3 py-2" value={nationality} onChange={(e) => setNationality(e.target.value)}>
                    <option>Singapore Citizen</option>
                    <option>Permanent Resident</option>
                    <option>Other (Not Eligible)</option>
                  </select>
                  <p className="text-xs text-neutral-500 mt-1">Currently open to Singapore Citizens and PRs. Other applicants may not be matched.</p>
                </div>
              </div>

              {/* Skills multi-select pills */}
              <div>
                <label className="text-sm">Key Skills</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SKILL_OPTIONS.map((skill) => {
                    const active = selectedSkills.includes(skill);
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`text-xs rounded-full px-3 py-2 border transition ${active ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50"}`}
                        aria-pressed={active}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
                {showOther && (
                  <input
                    className="mt-3 w-full rounded-xl border px-3 py-2 text-sm"
                    placeholder="Please specify other skills"
                    value={otherSkill}
                    onChange={(e) => setOtherSkill(e.target.value)}
                  />
                )}
                <p className="text-xs text-neutral-500 mt-2">Tip: Tap to select. You can choose multiple skills.</p>
              </div>

              <div>
                <label className="text-sm">Upload Resume (Optional)</label>
                <input type="file" className="mt-1 w-full rounded-xl border px-3 py-2"/>
              </div>
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-1"/>
                <span>I confirm I am a Singapore Citizen or PR and consent to the use of my data under the PDPA.</span>
              </label>
              <button type="button" className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm">Submit Application <ArrowRight size={16}/></button>
              <p className="text-xs text-neutral-500">By submitting, you agree to our Privacy Policy and Terms of Use.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-12 sm:py-16 bg-neutral-100 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Success Stories</h2>
          <p className="text-neutral-600 mt-1 text-sm">Real examples of how Singaporeans used Local SG Jobs to find flexible remote work.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {successStories.map((s, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow transition">
                <Quote className="text-neutral-400" size={24}/>
                <h3 className="mt-3 font-semibold text-neutral-900 leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold">Do I need experience?</h3>
              <p className="text-sm text-neutral-700 mt-1">Not required for most roles; basic training provided.</p>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold">What equipment is needed?</h3>
              <p className="text-sm text-neutral-700 mt-1">A smartphone or laptop with stable Wi‑Fi is sufficient.</p>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold">When will I hear back?</h3>
              <p className="text-sm text-neutral-700 mt-1">Within 48 hours (business days) via WhatsApp.</p>
            </div>
            <div className="rounded-3xl border p-6 bg-neutral-50">
              <h3 className="font-semibold">How are payments made?</h3>
              <p className="text-sm text-neutral-700 mt-1">By the hiring company per their schedule (role‑dependent).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-top bg-neutral-50 border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">SG</div>
                <span className="font-semibold">Local SG Jobs</span>
              </div>
              <p className="text-sm text-neutral-600 mt-3">Remote, part‑time & entry‑level roles for Singapore Citizens and PRs.</p>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
                <li><a href="#jobs" className="hover:underline">Jobs</a></li>
                <li><a href="#how" className="hover:underline">How It Works</a></li>
                <li><a href="#stories" className="hover:underline">Success Stories</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><Mail size={16}/> info@localsgjobs.sg</li>
                <li className="flex items-center gap-2"><MapPin size={16}/> Singapore</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs text-neutral-500">
            <p>© 2025 Local SG Jobs. All rights reserved.</p>
            <div className="flex gap-4">
              <p className="hover:underline">Privacy Policy</p>
              <p className="hover:underline">Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
