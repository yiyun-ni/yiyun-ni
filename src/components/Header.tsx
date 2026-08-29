import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection'

type NavLink = {
  id: string
  label: string
  shortLabel?: string
}

const homeLinks: NavLink[] = [
  { id: 'about',      label: 'About'      },
  { id: 'work',       label: 'Work'       },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
]

const uhnLinks: NavLink[] = [
  { id: 'overview',                 label: 'Overview',                shortLabel: 'Overview' },
  { id: 'spatial-training',         label: 'Spatial Training',        shortLabel: 'Training' },
  { id: 'research-administration',  label: 'Research Administration', shortLabel: 'Admin' },
  { id: 'my-role',                  label: 'My Role',                 shortLabel: 'Role' },
]

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'
  const isUHN = pathname === '/work/uhn'

  const links = isUHN ? uhnLinks : homeLinks
  const active = useActiveSection(links.map(l => l.id))

  function handleSectionClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else if (isUHN) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isHome) return
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-background/90 backdrop-blur-sm border-b border-border/75">
      <nav className="max-w-[1300px] mx-auto h-[60px] sm:h-[68px] px-6 sm:px-8 lg:px-10 flex items-center justify-between gap-4 overflow-hidden">

        {/* Home mark — always navigates to / */}
        <Link
          to="/"
          aria-label="Home"
          onClick={handleHomeClick}
          className="shrink-0 hover:text-accent transition-colors duration-200"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </Link>

        {/* Section links */}
        <div className="no-scrollbar flex flex-1 justify-end gap-3 overflow-x-auto whitespace-nowrap sm:gap-6 lg:gap-8">
          {links.map(({ id, label, shortLabel }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={e => handleSectionClick(e, id)}
              className={`
                shrink-0 text-xs sm:text-sm tracking-[0.08em] sm:tracking-sm uppercase pb-1 border-b transition-colors duration-200
                ${active === id
                  ? 'text-primary border-accent'
                  : 'text-secondary border-transparent hover:text-primary hover:border-accent'}
              `}
            >
              <span className="sm:hidden">{shortLabel ?? label}</span>
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

      </nav>
    </header>
  )
}
