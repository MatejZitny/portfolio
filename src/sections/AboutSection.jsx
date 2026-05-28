import {motion} from 'framer-motion';
import {slideInLeft, cardFadeIn} from '../animations';
import logoMap from '../icons/logoMap';

const skills = ['html', 'css', 'js', 'react', 'tailwind', 'figma', 'php', 'mysql', 'python', 'bootstrap', 'c'];

function Card({className = '', children, delay = 0}) {
    return (
        <motion.div
            {...cardFadeIn(delay)}
            className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 ${className}`}
        >
            {children}
        </motion.div>
    );
}

function CyanButton({href, children}) {
    return (
        <a href={href}
           className="flex items-center justify-center gap-2 no-underline font-bold
                      text-sm sm:text-[15px] px-[22px] py-[11px] rounded-[14px]
                      border border-white/30 bg-white/5 text-white
                      transition-shadow duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
            {children}
        </a>
    );
}

function AboutSection() {
    return (
        <div className="relative overflow-hidden min-h-screen flex items-center
                        px-6 sm:px-14 lg:px-24 py-20 lg:py-28">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2
                                w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[160px]"/>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto
                            grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">

                {/* LEVÝ sloupec */}
                <motion.div
                    {...slideInLeft}
                    className="flex flex-col justify-between py-2"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-6 lg:mb-10">
                            <div className="w-12 h-[1px] bg-white/50"/>
                            <p className="text-white/60 text-xs tracking-widest m-0">o mně</p>
                        </div>

                        <h2 className="text-white font-black leading-none m-0 mb-6 lg:mb-10">
                            <span className="text-[#00d4ff] block mb-2 sm:mb-4 text-[clamp(48px,10vw,120px)]">Matěj</span>
                            <span className="block text-[clamp(48px,10vw,120px)]">Žitný</span>
                        </h2>

                        <p className="text-white/60 text-base sm:text-xl leading-relaxed max-w-md m-0">
                            Tvořím moderní weby s důrazem na design a funkčnost. Student ORBIS Zlín.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-12">
                        <CyanButton href="#projekty">Moje projekty</CyanButton>
                        <CyanButton href="#kontakt">Kontakt</CyanButton>
                    </div>
                </motion.div>

                {/* PRAVÝ sloupec — bento grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 self-end">

                    <Card className="flex flex-col gap-4 lg:gap-6" delay={0.1}>
                        <p className="text-white/40 text-xs tracking-widest m-0">Projekty</p>
                        <p className="text-white font-black leading-none m-0 text-[clamp(36px,6vw,80px)]">10+</p>
                    </Card>

                    <Card className="flex flex-col gap-4 lg:gap-6" delay={0.15}>
                        <p className="text-white/40 text-xs tracking-widest  m-0">Dostupný</p>
                        <div>
                            <p className="text-white font-bold text-sm sm:text-base m-0">Pro projekty</p>
                        </div>
                    </Card>

                    <Card className="col-span-2" delay={0.2}>
                        <p className="text-white/40 text-xs tracking-widest m-0 mb-3">Technologie</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <div key={skill}
                                     className="w-9 h-9 rounded-lg flex items-center justify-center
                                                bg-white/[0.07] border border-white/10 text-white/60
                                                hover:text-white hover:border-white/30 transition-colors duration-200">
                                    {logoMap[skill]}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="flex flex-col gap-4 lg:gap-6" delay={0.25}>
                        <p className="text-white/40 text-xs tracking-widest  m-0">Studia IT</p>
                        <p className="text-white font-black leading-none m-0 text-[clamp(36px,6vw,80px)]">2 roky</p>
                    </Card>

                    <Card className="flex flex-col gap-4 lg:gap-6" delay={0.3}>
                        <p className="text-white/40 text-xs tracking-widest  m-0">Hobby</p>
                        <div>
                            <p className="text-white font-bold text-sm sm:text-base m-0">Cyklistika</p>
                            <p className="text-white/40 text-xs m-0 mt-1">& sport</p>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}

export default AboutSection;
