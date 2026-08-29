import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { uhnCaseStudy } from '../data/caseStudies'
import type {
  CaseStudySection,
  CaseStudyTextBlock,
} from '../data/caseStudies'
import { useInView } from '../hooks/useInView'

function Wrap({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, inView } = useInView()
  return (
    <section id={id} className={`border-t border-border scroll-mt-[60px] sm:scroll-mt-[68px] ${className}`}>
      <Wrap className="py-9 sm:py-14 lg:py-24">
        <div ref={ref} className={`fade-up ${inView ? 'in-view' : ''}`}>
          {children}
        </div>
      </Wrap>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent text-xs sm:text-sm tracking-sm sm:tracking-lg uppercase mb-3 sm:mb-5">{children}</p>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-secondary text-xs sm:text-sm tracking-sm sm:tracking-md uppercase mb-2 sm:mb-3">{children}</p>
  )
}

function SectionH2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-title-md leading-heading sm:leading-title tracking-heading ${className}`}>
      {children}
    </h2>
  )
}

function Body({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-secondary text-sm sm:text-md leading-body sm:leading-loose ${className}`}>{children}</p>
  )
}

function TitleLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  )
}

function BodyList({ body, className = '' }: { body?: string | string[]; className?: string }) {
  if (!body) return null

  return (
    <>
      {(Array.isArray(body) ? body : [body]).map((item, index) => (
        <Body key={item} className={`${className} ${index > 0 ? 'mt-3 sm:mt-5' : ''}`}>
          {item}
        </Body>
      ))}
    </>
  )
}

function TextBlocks({ blocks }: { blocks: CaseStudyTextBlock[] }) {
  const hasImages = blocks.some(block => block.image)

  return (
    <div className="space-y-0 border-t border-primary">
      {blocks.map((block, index) => (
        <div
          key={block.label ?? block.title}
          className={`${hasImages ? 'grid gap-0 md:gap-4 py-4 sm:py-7 md:grid-cols-[minmax(0,1fr)_240px] lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_400px] md:items-center' : 'py-4 sm:py-7'} ${index < blocks.length - 1 ? 'border-b border-border' : ''}`}
        >
          <div>
            {block.label && <Label>{block.label}</Label>}
            {block.title && (
              <h3 className="font-serif text-title-sm font-normal leading-tight mb-2 sm:mb-3">
                {block.title}
              </h3>
            )}
            <BodyList body={block.body} className={hasImages ? 'max-w-lg' : 'max-w-2xl'} />
          </div>

          {block.image && (
            <div className="w-full max-w-[360px] xl:max-w-[480px] overflow-hidden rounded-sm bg-surface md:justify-self-end">
              <img
                src={block.image}
                alt={block.title ?? ''}
                className="block w-full h-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function sectionId(label: string) {
  return label
    .toLowerCase()
    .replace(/^\d+\s*—\s*/, '')
    .trim()
    .replace(/\s+/g, '-')
}

function StandardSection({ section }: { section: CaseStudySection }) {
  return (
    <Section id={sectionId(section.sectionLabel)}>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-16 items-start">
        <div>
          <Eyebrow>{section.sectionLabel}</Eyebrow>
          <SectionH2>
            <TitleLines lines={section.title} />
          </SectionH2>
        </div>
        <div className="min-w-0 pt-2 lg:max-w-[820px]">
          {section.lead && (
            <p className="font-serif text-xl leading-lead sm:leading-intro text-primary mb-6 sm:mb-10">
              {section.lead}
            </p>
          )}
          {section.body && (
            <div className={`${section.blocks ? 'mb-6 sm:mb-10' : ''} space-y-4 sm:space-y-5`}>
              {section.bodyStyle === 'lead' ? (
                section.body.map(item => (
                  <p
                    key={item}
                    className="font-serif text-xl leading-lead sm:leading-intro text-primary"
                  >
                    {item}
                  </p>
                ))
              ) : (
                <BodyList body={section.body} />
              )}
            </div>
          )}
          {section.blocks && <TextBlocks blocks={section.blocks} />}
          {section.tags && (
            <ul className="flex flex-wrap gap-2 mt-6 sm:mt-8">
              {section.tags.map(tag => (
                <li
                  key={tag}
                  className="text-xs sm:text-sm tracking-sm sm:tracking-md uppercase border border-border px-3 py-[5px] text-secondary"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  )
}

function HeroWrap({ children }: { children: React.ReactNode }) {
  return (
    <Wrap className="pt-5 sm:pt-10 pb-6 sm:pb-10 lg:pb-14">
      <div className="fade-up in-view">
        {children}
      </div>
    </Wrap>
  )
}

export default function UHNCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-background pt-[60px] sm:pt-[68px]">
        <HeroWrap>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-sm sm:tracking-md uppercase text-secondary hover:text-accent transition-colors duration-200 mb-4 sm:mb-8"
          >
            ← {uhnCaseStudy.backLabel}
          </Link>

          <Eyebrow>{uhnCaseStudy.sectionLabel}</Eyebrow>

          <h1 className="text-title-md sm:text-title-lg leading-heading tracking-title mb-5 sm:mb-8">
            {uhnCaseStudy.title.map((line, index) => (
              <Fragment key={line.text}>
                {index > 0 && <br />}
                {line.accent ? <em className="text-accent">{line.text}</em> : line.text}
              </Fragment>
            ))}
          </h1>

          <div className="flex flex-wrap gap-2 sm:gap-5 mb-4 sm:mb-8">
            {uhnCaseStudy.tags.map(tag => (
              <span
                key={tag}
                className="text-xs sm:text-sm tracking-sm sm:tracking-md uppercase border border-border px-3 py-[5px] text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-serif text-xl leading-lead sm:leading-intro text-primary max-w-2xl mb-4 sm:mb-6">
            {uhnCaseStudy.intro}
          </p>

          <a
            href={uhnCaseStudy.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-sm sm:tracking-md uppercase text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary transition-colors duration-200 mb-6 sm:mb-10"
          >
            {uhnCaseStudy.website.label}
            <span aria-hidden="true">↗</span>
          </a>

          <img
            src="/uhn/UHN-Hero.JPG"
            alt={uhnCaseStudy.sectionLabel}
            className="w-full object-cover"
          />
        </HeroWrap>

        {uhnCaseStudy.sections.map(section => (
          <StandardSection key={section.sectionLabel} section={section} />
        ))}

        <StandardSection section={uhnCaseStudy.role} />

        <div>
          <Wrap className="py-6 sm:py-8">
            <Link
              to="/#work"
              className="text-xs sm:text-sm tracking-sm sm:tracking-md uppercase text-secondary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
            >
              ← {uhnCaseStudy.backLabel}
            </Link>
          </Wrap>
        </div>
      </main>
      <Footer />
    </>
  )
}
