import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight } from '../animations';
import Aurora from '../components/Aurora';
import TextType from '../components/TextType';
import CountUp from '../components/CountUp';

const typingTexts = [
    "Ahoj, jsem Matěj — student IT a cyklista",
    "Webový designer",
    "Webový vývojář",
    "Student 2. ročníku ORBIS Zlín",
    "Cyklista",
];

const stats = [
    { to: 2,  suffix: "",  label: "roky studia IT" },
    { to: 5,  suffix: "+", label: "technologií"    },
    { to: 10, suffix: "+", label: "projektů"       },
];

function Hero() {
    return (
        <section id="uvod" className="panel panel1 relative h-screen w-full overflow-hidden">

            <div className="absolute inset-0 z-0 hidden sm:block">
                <Aurora
                    colorStops={["#0a1628", "#00d4ff", "#00041e"]}
                    blend={0.5}
                    amplitude={1}
                    speed={0.5}
                />
            </div>
            <div className="absolute inset-0 z-0 sm:hidden"
                style={{ background: "linear-gradient(160deg, #06090f 0%, #0a1628 60%, #0d1f3c 100%)" }}
            />

            <div className="relative z-10 flex w-full h-full
                            pl-6 sm:pl-14 lg:pl-24 pr-6 sm:pr-14 lg:pr-24
                            pt-[20vh] sm:pt-[22vh] lg:pt-[25vh]">

                <div className="flex flex-col items-start justify-start flex-1">

                    <motion.div {...fadeInRight} className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[1px] bg-white/50"/>
                        <p className="text-white/60 text-xs tracking-widest m-0">portfólio 2026</p>
                    </motion.div>

                    <motion.h1 {...fadeInUp}
                        className="text-[#00d4ff] font-black leading-none mt-0 mb-4 text-[clamp(38px,12vw,150px)]">
                        AHOJ,
                    </motion.h1>

                    <motion.h1 {...fadeInUp}
                        className="text-white font-black leading-none m-0 text-[clamp(38px,12vw,150px)]">
                        JSEM MATĚJ!
                    </motion.h1>

                    <div className="mt-6 lg:mt-8 flex items-center min-h-[50px] lg:min-h-[70px]
                                    text-white font-black lg:ml-10
                                    text-lg sm:text-2xl lg:text-3xl">
                        <TextType
                            text={typingTexts}
                            typingSpeed={150}
                            pauseDuration={5000}
                            initialDelay={2000}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={150}
                        />
                    </div>

                    <div className="flex lg:hidden gap-8 mt-10">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-start">
                                <p className="text-white font-black leading-none m-0 text-[42px] sm:text-[56px] tabular-nums">
                                    <CountUp from={0} to={stat.to} duration={2}/>{stat.suffix}
                                </p>
                                <p className="text-white/60 text-xs sm:text-sm font-bold m-0 mt-1 tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="hidden lg:flex fixed right-8 xl:right-24 top-0 bottom-0 flex-col items-start justify-center gap-12 xl:gap-20 w-40 xl:w-52"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-start">
                            <p className="text-white font-black leading-none m-0 text-[70px] xl:text-[100px] tabular-nums">
                                <CountUp from={0} to={stat.to} duration={2}/>{stat.suffix}
                            </p>
                            <p className="text-white text-xl font-bold mt-1 m-0 tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}

export default Hero;
