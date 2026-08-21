export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col items-center">
        <section
          id="hero"
          className="flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-16 sm:py-32"
        >
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            ABCon Advisory Pvt. Ltd.
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            We help government and public institutions in Mizoram turn
            priorities into practical programs, systems, and decisions.
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            For state government departments and autonomous bodies,
            missions, societies, and SPVs.
          </p>
          <a
            href="mailto:consultant@angelbusipro.org"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Get in touch
          </a>
        </section>

        <section
          id="services"
          className="w-full max-w-3xl px-6 py-16 sm:px-16"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-black/[.08] p-6 dark:border-white/[.145]">
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                Project concept note and DPR support
              </h3>
            </div>
            <div className="rounded-lg border border-black/[.08] p-6 dark:border-white/[.145]">
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                Program design and implementation planning
              </h3>
            </div>
            <div className="rounded-lg border border-black/[.08] p-6 dark:border-white/[.145]">
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                Procurement and bid advisory
              </h3>
            </div>
            <div className="rounded-lg border border-black/[.08] p-6 dark:border-white/[.145]">
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                Monitoring, evaluation, MIS, and dashboard support
              </h3>
            </div>
          </div>
        </section>

        <section id="about" className="w-full max-w-3xl px-6 py-16 sm:px-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            ABCon Advisory Pvt. Ltd. works with state government departments
            and autonomous bodies, missions, societies, and SPVs in Mizoram,
            helping turn priorities into practical programs, systems, and
            decisions.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Engaged since 2025 with departments including C&amp;I, UD&amp;PA,
            H&amp;FW, and the Horticulture Department.
          </p>
        </section>

        <section
          id="contact"
          className="w-full max-w-3xl px-6 py-16 sm:px-16"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Contact
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Reach us at{" "}
            <a
              href="mailto:consultant@angelbusipro.org"
              className="font-medium text-black underline underline-offset-4 dark:text-zinc-50"
            >
              consultant@angelbusipro.org
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
