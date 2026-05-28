import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {navAnimation} from '../animations';
import logo from '../assets/img.png';

const navItemsLeft = [
    {label: "O MNĚ", href: "#o-mne"},
    {label: "SLUŽBY", href: "#sluzby"},
];
const navItemsRight = [
    {label: "PROJEKTY", href: "#projekty"},
    {label: "KONTAKT", href: "#kontakt"},
];
const navItems = [...navItemsLeft, ...navItemsRight];

function NavLink({item}) {
    return (
        <li>
            <a href={item.href}
               className="text-white font-bold text-lg py-2 px-5 relative group transition-colors hover:text-white/90">
                <span
                    className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent transition-all duration-300 group-hover:w-3 group-hover:h-3 group-hover:border-white"/>
                {item.label}
                <span
                    className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent transition-all duration-300 group-hover:w-3 group-hover:h-3 group-hover:border-white"/>
            </a>
        </li>
    );
}

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop */}
            <motion.nav
                {...navAnimation}
                className="hidden xl:flex fixed top-8 left-1/2 -translate-x-1/2 z-[100]"
            >
                <div
                    className="bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[45px] h-20 px-8 flex items-center gap-3 shadow-2xl">
                    <ul className="flex items-center gap-5 list-none m-0 p-0">
                        {navItemsLeft.map(item => <NavLink key={item.label} item={item}/>)}
                    </ul>

                    <a href="#uvod" className="flex items-center no-underline shrink-0">
                        <img src={logo} alt="Logo" className="h-24 -my-2 translate-y-3 w-auto object-contain"/>
                    </a>

                    <ul className="flex items-center gap-5 list-none m-0 p-0">
                        {navItemsRight.map(item => <NavLink key={item.label} item={item}/>)}
                    </ul>
                </div>
            </motion.nav>

            {/* Mobil + tablet */}
            <div className="xl:hidden fixed top-0 left-0 right-0 z-[100]
                            flex items-center justify-between pl-3 pr-6 md:pl-5 md:pr-10
                            h-16 md:h-24
                            bg-[#06090f]/90 backdrop-blur-xl border-b border-white/10">

                <a href="#uvod" className="no-underline">
                    <img src={logo} alt="Logo" className="h-16 md:h-24 translate-y-1 w-auto object-contain brightness-110"/>
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col justify-center gap-[5px] md:gap-2 w-10 h-10 md:w-14 md:h-14"
                    aria-label="Otevřít menu"
                >
                    <span className={`block w-6 md:w-9 h-[2px] md:h-[3px] bg-white rounded transition-all duration-300 origin-center
                        ${open ? 'rotate-45 translate-y-[7px] md:translate-y-[11px]' : ''}`}/>
                    <span className={`block w-6 md:w-9 h-[2px] md:h-[3px] bg-white rounded transition-all duration-300
                        ${open ? 'opacity-0 scale-x-0' : ''}`}/>
                    <span className={`block w-6 md:w-9 h-[2px] md:h-[3px] bg-white rounded transition-all duration-300 origin-center
                        ${open ? '-rotate-45 -translate-y-[7px] md:-translate-y-[11px]' : ''}`}/>
                </button>
            </div>

            {/* Dropdown menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{opacity: 0, y: -8}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -8}}
                        transition={{duration: 0.2}}
                        className="xl:hidden fixed top-16 md:top-24 left-0 right-0 z-[99]
                                   flex flex-col px-6 md:px-10 pb-6 md:pb-10 pt-2 md:pt-4
                                   bg-[#06090f]/95 backdrop-blur-xl border-b border-white/10"
                    >
                        {navItems.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-white font-black text-2xl py-4 no-underline
                                           border-b border-white/10 last:border-0
                                           hover:text-[#00d4ff] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
