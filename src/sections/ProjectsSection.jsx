import { motion } from 'framer-motion';
import { fadeInUpScroll } from '../animations';
import logoMap from '../icons/logoMap';

const projects = [
    {
        title: "Caffinity",
        description: "Webová stránka pro kavárnu s moderním designem a plně responzivním layoutem postaveným na Bootstrap frameworku.",
        logos: ['html', 'css', 'js', 'bootstrap'],
        link: "https://matejzitny.github.io/Bootstrap/",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
        ),
    },
    {
        title: "Pong Game",
        description: "Klasická hra Pong implementovaná v čistém JavaScriptu pomocí Canvas API s plynulou fyzikou míčku.",
        logos: ['html', 'css', 'js'],
        link: "https://matejzitny.github.io/Pong_game/",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="6" width="20" height="12" rx="3"/>
                <path d="M12 9v6M9 12h6"/>
            </svg>
        ),
    },
    {
        title: "Sport Blog",
        description: "Sportovní blog s PHP backendem, MySQL databází a administrací příspěvků. Frontend postaven na Tailwind CSS.",
        logos: ['php', 'tailwind', 'mysql'],
        link: "https://github.com/MatejZitny/sport_blog",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
                <path d="M12 2a14.5 14.5 0 010 20M2 12h20"/>
            </svg>
        ),
    },
    {
        title: "Portfolio 2026",
        description: "Osobní portfolio postavené na Reactu s Framer Motion animacemi, Tailwind CSS a vlastním designem.",
        logos: ['react', 'tailwind', 'js'],
        link: null,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
        ),
    },
    {
        title: "Storage.py",
        description: "Skladový systém v Pythonu s výpisem, přidáváním a vyhledáváním produktů. Pracuje s listy i slovníky.",
        logos: ['python'],
        link: "https://github.com/MatejZitny/Storage.py",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
            </svg>
        ),
    },
    {
        title: "Útulek",
        description: "Webová stránka útulku pro zvířata, kde si uživatelé mohou prohlédnout dostupná zvířata a zařídit adopci.",
        logos: ['php', 'js', 'css'],
        link: "https://github.com/MatejZitny/utulek",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
        ),
    },
    {
        title: "IG Příspěvky",
        description: "Simulace Instagram příspěvků vytvořená v čistém PHP. Zobrazuje feed ve stylu Instagramu s dynamicky generovaným obsahem.",
        logos: ['php'],
        link: "https://github.com/MatejZitny/IG_prispeveky",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
        ),
    },
    {
        title: "Mega Menu",
        description: "Interaktivní mega menu pro e-shop s rozbalovacími kategoriemi, plynulými animacemi a plně responzivním designem.",
        logos: ['html', 'css', 'js'],
        link: "https://github.com/MatejZitny/megamenu",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
        ),
    },
    {
        title: "EduVote",
        description: "Školní webová aplikace pro navrhování a hlasování o projektech. Žáci přidávají nápady, ostatní je lajkují, admin schvaluje návrhy.",
        logos: ['php', 'tailwind'],
        link: "https://github.com/MatejZitny/SkolniTinder",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 9V5a3 3 0 00-6 0v4"/><rect x="2" y="9" width="20" height="13" rx="2"/>
                <path d="M12 13v4M10 15h4"/>
            </svg>
        ),
    },
    {
        title: "C Sklad",
        description: "Skladový systém v jazyce C s dynamickým polem struktur, validací EAN kódů a ukládáním dat do CSV souboru.",
        logos: ['c'],
        link: "https://github.com/MatejZitny/C_skald_struktury",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="3" width="20" height="18" rx="2"/>
                <path d="M8 10l-3 2 3 2M16 10l3 2-3 2M13 8l-2 8"/>
            </svg>
        ),
    },
];

function ProjectCard({ project }) {
    const Tag = project.link ? 'a' : 'div';
    const linkProps = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {};
    return (
        <Tag
            {...linkProps}
            className="w-[260px] sm:w-[290px] lg:w-[320px] flex-shrink-0 flex flex-col gap-5 p-5 sm:p-6 rounded-2xl no-underline
                       bg-white/[0.03] border border-white/[0.08]
                       transition-[border-color,background] duration-200
                       hover:border-[#00d4ff4d] hover:bg-[#00d4ff0a]"
        >
            {/* Ikona */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white bg-white/[0.08]">
                {project.icon}
            </div>

            {/* Název */}
            <h3 className="text-[#00d4ff] text-2xl font-black leading-tight m-0">
                {project.title}
            </h3>

            {/* Popis */}
            <p className="text-white text-sm leading-relaxed m-0 flex-1">
                {project.description}
            </p>

            {/* Oddělovač */}
            <div className="h-[1px] bg-white/[0.08]"/>

            {/* Ikonky technologií */}
            <div className="flex gap-2 text-white">
                {project.logos.map((key, i) => (
                    <div key={i} className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.07] border border-white/10">
                        {logoMap[key]}
                    </div>
                ))}
            </div>
        </Tag>
    );
}

function MarqueeRow({ items, direction = 'left', duration = 28 }) {
    const from = direction === 'left' ? '0%' : '-50%';
    const to   = direction === 'left' ? '-50%' : '0%';

    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex gap-5 py-2 w-max"
                animate={{ x: [from, to] }}
                transition={{ duration, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
            >
                {[...items, ...items].map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </motion.div>
        </div>
    );
}

function ProjectsSection() {
    return (
        <section
            className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-16 overflow-hidden"
            style={{ background: "linear-gradient(160deg, #06090f 0%, #0a1628 60%, #0d1f3c 100%)" }}
        >
            {/* Label + nadpis */}
            <div className="px-6 sm:px-12 lg:px-24 mb-10 sm:mb-12 lg:mb-14">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-[1px] bg-white/50"/>
                    <p className="text-white/60 text-xs tracking-widest m-0">projekty</p>
                </div>
                <motion.h2
                    {...fadeInUpScroll}
                    className="text-[40px] sm:text-[52px] lg:text-[64px] font-black text-white leading-tight"
                >
                    Co jsem už <span className="text-[#00d4ff]">udělal</span>
                </motion.h2>
            </div>

            {/* Řada — jede doleva */}
            <MarqueeRow items={projects} direction="left" duration={28} />
        </section>
    );
}

export default ProjectsSection;
