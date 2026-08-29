export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 min-h-svh flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between pt-[84px] sm:pt-[100px] md:pt-[68px] pb-10 sm:pb-16 lg:pb-[9%] scroll-mt-[68px] gap-8 md:gap-12 lg:gap-[80px]"
    >
      {/* Left — name + caption */}
      <div className="max-w-[860px] text-left flex flex-col gap-4 sm:gap-8">
        <h1 className="text-home-title uppercase leading-heading sm:leading-display tracking-title">
          Yiyun
          <br />
          <em className="text-accent">Ni</em>
        </h1>

        <p className="font-serif text-secondary text-md leading-body sm:leading-relaxed max-w-[60ch]">
          Biomedical Engineering graduate working across software development, product design, 
          and technical project delivery.
        </p>
      </div>

      {/* Right — secondary info panel */}
      <aside className="w-full max-w-sm md:w-52 lg:mr-[6%]">
        <p className="text-sm tracking-sm sm:tracking-lg uppercase mb-3 sm:mb-5">WHAT I DO</p>
        <ul className="border-t border-border">
          {[
            'Biomedical Engineer',
            'Software Developer',
            'Project Coordinator',
            'UI/UX Designer',
          ].map((item, i) => (
            <li
              key={item}
              className="animate-slide-up font-serif text-md py-3 sm:py-4 border-b border-border"
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
