import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { useInView } from '../hooks/useInView'

function ProjectItem({ project }: { project: Project }) {
  const { year, company, title, description, tags, image, route } = project

  return (
    <article className="py-6 sm:py-10 first:border-t first:border-primary">
      {/* Year + company row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5 sm:mb-8">
        <span className="text-accent text-xs sm:text-sm tracking-[0.11em] sm:tracking-lg uppercase">
          {year}
        </span>
        <span className="text-secondary text-xs sm:text-sm tracking-[0.11em] sm:tracking-lg uppercase">
          {company}
        </span>
      </div>

      {/* Title + description + tags row */}
      <div className="grid gap-5 sm:gap-8 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-12 md:items-end mb-7 sm:mb-10">
        {/* Left — title + description */}
        <div>
          <h3 className="text-[32px] sm:text-title-md leading-[1.02] sm:leading-title tracking-heading mb-4 sm:mb-6">
            {title}
          </h3>
          <p className="text-secondary text-[13px] sm:text-md leading-[1.55] sm:leading-body max-w-xl">
            {description}
          </p>
        </div>

        {/* Right — tags */}
        <ul className="flex flex-wrap gap-2 md:flex-col md:items-end">
          {tags.map(tag => (
            <li
              key={tag}
              className="text-xs sm:text-sm tracking-[0.09em] sm:tracking-md uppercase border border-border px-3 py-[5px] text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      {route ? (
        <Link to={route} className="block overflow-hidden bg-accent-subtle">
          <img
            src={image}
            alt={title}
            className="w-full object-contain hover:scale-[1.02] transition-transform duration-700"
          />
        </Link>
      ) : (
        <div className="overflow-hidden bg-accent-subtle">
          <img
            src={image}
            alt={title}
            className="w-full object-contain hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}

      {/* Case study link */}
      <div className="mt-5 sm:mt-7">
        {route && (
          <Link
            to={route}
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.08em] sm:tracking-sm uppercase pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            View case study
            <span className="text-accent">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}

export default function SelectedWork() {
  const { ref, inView } = useInView()

  return (
    <section
      id="work"
      className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-16 lg:py-20 scroll-mt-[68px]"
    >
      <div ref={ref} className={`fade-up ${inView ? 'in-view' : ''}`}>
        {/* Heading */}
        <div>
          <h2 className="text-[42px] sm:text-title-lg leading-[0.94] sm:leading-display tracking-title">
            Projects
            <br />
            <em className="text-accent">& work</em>
          </h2>
        </div>

        {/* Project list */}
        <div className="mt-4">
          {projects.map(project => (
            <ProjectItem key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
