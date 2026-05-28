import {motion} from 'framer-motion';
import {slideInLeft, slideInRight} from '../animations';
import webDesignMockup from '../assets/img_5.png';
import uiMockup from '../assets/img_3.png';
import backendMockup from '../assets/img_4.png';

const services = [
    {
        lines: ['Web', 'Design'],
        description: 'Navrhuji moderní a funkční webové stránky s důrazem na vizuální styl a uživatelský zážitek.',
        mockup: webDesignMockup,
    },
    {
        lines: ['UI', 'Vývoj'],
        description: 'Vývíjím rychlé a responzivní weby pomocí Reactu, Tailwindu a dalších moderních technologií.',
        mockup: uiMockup,
    },
    {
        lines: ['Backend'],
        description: 'S backendem mám základní zkušenosti — pracoval jsem s PHP a MySQL, ale zatím se v tom teprve učím.',
        mockup: backendMockup,
    },
];

function ServicesSection({index}) {
    const s = services[index];

    return (
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden
                        px-6 sm:px-14 lg:px-24 py-24 lg:py-0">

            {/* Label */}
            <div className="absolute top-6 sm:top-10 left-6 sm:left-14 lg:left-24 flex items-center gap-4">
                <div className="w-8 sm:w-12 h-[1px] bg-white/40"/>
                <p className="text-white/50 text-xs tracking-widest m-0">služby</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

                {/* Text */}
                <motion.div
                    key={`text-${index}`}
                    {...slideInLeft}
                    className="flex flex-col"
                >
                    <h2 className="text-white font-black leading-none m-0">
                        {s.lines.map((line, i) => (
                            <span key={i} className="block text-[clamp(56px,11vw,150px)]">
                                {line}
                            </span>
                        ))}
                    </h2>

                    <p className="text-white/50 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8 max-w-sm m-0">
                        {s.description}
                    </p>
                </motion.div>

                {/* MacBook mockup */}
                <motion.div
                    key={`mockup-${index}`}
                    {...slideInRight}
                    className="flex justify-center items-center pr-0 sm:pr-8 lg:pr-16"
                >
                    <img
                        src={s.mockup}
                        alt={s.lines.join(' ')}
                        className="w-full object-contain scale-90 sm:scale-95 lg:scale-[1.4] translate-y-0 lg:translate-y-8 drop-shadow-[0_24px_60px_rgba(0,100,255,0.25)]"
                        draggable={false}
                    />
                </motion.div>

            </div>
        </div>
    );
}

export default ServicesSection;
