import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-16 lg:py-20 scroll-mt-[68px]"
    >
      <div ref={ref} className={`fade-up ${inView ? 'in-view' : ''}`}>
        {/* Top row — heading left, text right */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-4 md:items-end">
          {/* Left — About me heading */}
          <div>
            <h2 className="text-[42px] sm:text-title-lg leading-[0.94] sm:leading-display tracking-title">
              A little
              <br />
              <em className="text-accent">about</em>
              <br />
              me
            </h2>
          </div>
          {/* Right — About me description */}
          <div className="md:pt-14">
            <p className="font-serif text-[18px] sm:text-xl leading-[1.42] sm:leading-lead text-primary mb-4 sm:mb-6">
              I'm a biomedical engineer drawn to the space between technology, people, and
              the little details that shape how we experience the world.
            </p>
            <p className="text-secondary text-[13px] sm:text-md leading-[1.65] sm:leading-loose mb-4 sm:mb-5">
              My background spans biomedical science, engineering, and software development,
              which has shaped the way I approach problems from both technical and human
              perspectives. I enjoy turning complex ideas into clear, practical solutions,
              whether that means thinking through a user experience, building something
              from the ground up, or figuring out the details that make it work.
            </p>
            <p className="text-secondary text-[13px] sm:text-md leading-[1.65] sm:leading-loose">
              I'm naturally curious and always looking for something new to learn.
              Outside of work, I enjoy photography and travelling, and I've recently
              been learning Korean — a small reflection of the same curiosity that tends
              to find its way into everything I do.
            </p>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-7 sm:mt-10">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="overflow-hidden rounded-lg aspect-square">
              <img
                src={`/life-photos/${n}.JPG`}
                alt={`Photo ${n}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
