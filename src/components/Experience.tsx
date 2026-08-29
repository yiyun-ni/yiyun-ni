import { useState } from 'react'
import { experiences } from '../data/experience'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set())
  const { ref, inView } = useInView()

  function toggleExperience(index: number) {
    setOpenIndexes(current => {
      const next = new Set(current)

      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  return (
    <section
      id="experience"
      className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-9 sm:pb-12 scroll-mt-[68px]"
    >
      <div ref={ref} className={`fade-up ${inView ? 'in-view' : ''}`}>
      {/* Heading — centered */}
      <div className="text-center">
        <h2 className="text-title-xl leading-heading sm:leading-display tracking-title">
          Selected
          <br />
          <em className="text-accent">experience</em>
        </h2>
      </div>

      {/* Experience list */}
      <ul className="mt-8 sm:mt-12 max-w-[920px] mx-auto border-t border-primary">
        {experiences.map((exp, index) => {
          const isOpen = openIndexes.has(index)
          const panelId = `experience-panel-${index}`

          return (
            <li key={exp.role} className="border-b border-border">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleExperience(index)}
                className="grid w-full grid-cols-[1fr_24px] md:grid-cols-[180px_1fr_24px] gap-x-4 md:gap-x-8 gap-y-3 sm:gap-y-4 py-5 sm:py-8 text-left group"
              >
                <span className="text-accent text-xs tracking-sm sm:tracking-md uppercase pt-1 md:row-auto md:col-auto">
                  {exp.period}
                </span>
                <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
                  <p className="text-accent text-xs tracking-sm sm:tracking-md uppercase mb-2 sm:mb-3">
                    {exp.company}
                    {exp.location && (
                      <span className="text-secondary"> · {exp.location}</span>
                    )}
                  </p>
                  <h3 className="text-title-sm leading-tight group-hover:text-accent transition-colors duration-200">
                    {exp.role}
                  </h3>
                </div>
                <span className="text-accent text-title-sm leading-none pt-1 text-right col-start-2 row-start-1 md:col-start-3">
                  {isOpen ? '-' : '+'}
                </span>
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  className="grid md:grid-cols-[180px_1fr_24px] md:gap-8 pb-6 sm:pb-8"
                >
                  <div className="hidden md:block" />
                  {Array.isArray(exp.description) ? (
                    <ul className="text-secondary text-sm leading-body max-w-2xl list-disc pl-5 space-y-2 sm:space-y-3">
                      {exp.description.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-secondary text-sm leading-body max-w-lg">
                      {exp.description}
                    </p>
                  )}
                  <div className="hidden md:block" />
                </div>
              )}
            </li>
          )
        })}
      </ul>
      </div>
    </section>
  )
}
