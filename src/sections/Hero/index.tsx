
import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiGit } from "react-icons/si";

type contactType = {
    icon: React.ComponentType,
    href: string
}

const contactIcons: Array<contactType> = [
    { icon: FaGithub, href: "https://github.com/pannguyen2001" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nh%E1%BA%ADt-ph%E1%BA%A1m-anh-b036a81b6/" },
    { icon: FaFacebook, href: "https://www.facebook.com/phamnhat11" },
    { icon: FaMailBulk, href: "mailto:anhnhatpham2001@gmail.com" }
]

const skills: Array<string> = [
    "Python",
    "JS/TS",
    "Playwright",
    "Robot Framework",
    "Pytest",
    "Pandas",
    "Polars",
    "DuckDB",
    "SQL",
    "Git",
    "Github Actions",
    "MERN stack"
];

const ICONS = [
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiGit
];

const Hero = () => {
    const [dynamicWord, setDynamicWord] = useState("everything");
    const words: Array<string> = ["frontend", "backend", "database", "automation", "everything"];

    useEffect(() => {
        const interval = setInterval(() => {
            setDynamicWord(prev => {
                const currentIndex = words.indexOf(prev);
                const nextIndex = (currentIndex + 1) % words.length;
                return words[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <section className="relative min-h-screen flex items-center overflow-x-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Hero image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        {/* Icon Grid */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid grid-cols-10 gap-4 p-4 h-full">
                {[...Array(100)].map((_, i) => {
                    const Icon = ICONS[i % ICONS.length];
                    return <div key={i} className="flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    </div>
                })}
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - text content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            Automation QA Engineer | Aspiring SDET & Data Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                            Ensure <span className="text-primary glow-text">{dynamicWord}</span>
                            <br />
                            <span className="block">working</span>
                            <span className="font-serif italic font-normal text-white block">
                                smoothly.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                            Hi, I'm Pham Anh Nhat - a detail-oriented Quality Assurance Engineer with over 2 years of professional experience. I am located in DaNang, VietNam.
                        </p>
                    </div>

                    {/* CTA button */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href="#contact">Contact me </a>
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" className="bg-secondary text-foreground hover:bg-secondary/90">Download CV <Download className="w-5 h-5" /></Button>
                    </div>

                    {/* Social link */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 animate-fade-in animation-delay-400">
                        {
                            contactIcons.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="px-4 py-4 rounded-full glass hover:bg-primary/30 text-xl hover:text-primary transition-all"
                                >
                                    <social.icon />
                                </a>
                            ))}
                    </div>
                </div>

                {/* Right column - Profile image (Hidden on small screens) */}
                <div className="relative animate-fade-in animation-delay-300 hidden lg:block">
                    <div className="relative max-w-md mx-auto">
                        {/* Blurred background element */}
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
                        {/* Image with glass border */}
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                                src="https://images.unsplash.com/photo-1715615685666-882710b534f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                                alt="Profile photo"
                                className="w-full aspect-4/5 object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            {/* Stats badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-300">
                                <div className="text-2xl font-bold text-primary">2+</div>
                                <div className="text-xs text-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill section */}
            <div className="mt-16 md:mt-24 animate-fade-in animation-delay-800">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
                    <div className="flex gap-4 animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="glass px-4 py-2  rounded-full text-md text-foreground bg-primary/30 hover:bg-primary/50 shrink-0">
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Hero;
