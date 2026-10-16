import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationLinks = [
    { label: 'Panel', to: '/', end: true },
]

export default function MenuComponent() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141815] text-white shadow-lg shadow-black/10">
            <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
                <NavLink to="/" end onClick={closeMenu} className="group flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-lime-300 text-[#141815] transition-transform duration-200 group-hover:-rotate-6" aria-hidden="true">
                        <svg className="size-6" viewBox="0 0 24 24" fill="none">
                            <path d="m5 11 1.5-4h11L19 11l1.5 1.5V18h-2v-1.5h-13V18h-2v-5.5L5 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            <path d="M6.5 11h11M7 13.5h.01M17 13.5h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="leading-none">
                        <span className="block text-sm font-black tracking-[0.16em]">MOTOR</span>
                        <span className="mt-1 block text-[10px] font-medium tracking-[0.2em] text-white/45">GESTIÓN DE FLOTA</span>
                    </span>
                </NavLink>

                <div className="hidden items-center gap-8 md:flex">
                    {navigationLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) => `group relative py-2 text-sm font-semibold transition-colors ${isActive ? 'text-lime-300' : 'text-white/65 hover:text-white'}`}
                        >
                            {link.label}
                            <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-lime-300 transition-transform duration-200 group-hover:scale-x-100" />
                        </NavLink>
                    ))}
                    <span className="flex items-center gap-2 border-l border-white/10 pl-8 text-xs font-medium text-white/55">
                        <span className="size-2 rounded-full bg-lime-300 shadow-[0_0_12px_2px_rgba(190,242,100,0.45)]" />
                        Sistema activo
                    </span>
                </div>

                <button
                    type="button"
                    className="grid size-11 place-items-center rounded-xl border border-white/10 text-white transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 md:hidden"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? (
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </nav>

            <div id="mobile-navigation" className={`${menuOpen ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'} transition-[grid-template-rows] duration-200 md:hidden`}>
                <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 py-3 sm:px-8">
                        {navigationLinks.map((link, index) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                onClick={closeMenu}
                                className={({ isActive }) => `flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? 'bg-white/5 text-lime-300' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                            >
                                {link.label}
                                <span className="text-xs text-white/35">{String(index + 1).padStart(2, '0')}</span>
                            </NavLink>
                        ))}
                        <div className="mt-3 flex items-center gap-2 px-3 py-2 text-xs font-medium text-white/50">
                            <span className="size-2 rounded-full bg-lime-300" />
                            Sistema activo
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
