export function Footer({ profile }) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted for modern teams and bold
          ideas.
        </p>
        <a
          href="#home"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
