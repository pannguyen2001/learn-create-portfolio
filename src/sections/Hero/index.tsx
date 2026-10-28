import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

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

const Hero = () => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Hero image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        {/* Green Dots */}
        <div>
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#1E90FF",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                ></div>
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            Automation QA Engineer | Aspiring SDET & Data Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                            Ensure <span className="text-primary glow-text">everything</span>
                            <br />
                            <span className="block">working</span>
                            <span className="font-serif italic font-normal text-white block">
                                smoothly.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                        Hi, I'm Pham Anh Nhat - a detail-oriented Quality Assurance Engineer with over 2 years of professional experience. I am located in DaNang, VietNam.
                        </p>
                    </div>

                    {/* CTA button */}
                    <div className="inline-flex gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href="#contact">Contact me </a>
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" className="bg-secondary text-foreground hover:bg-secondary/90">Download CV <Download className="w-5 h-5" /></Button>
                    </div>

                    {/* Social link */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        {/* <span className="text-xl p-2">Follow: </span> */}
                        {[
                            { icon: "Github", href: "https://github.com/pannguyen2001" },
                            { icon: "LinkedIn", href: "https://www.linkedin.com/in/nh%E1%BA%ADt-ph%E1%BA%A1m-anh-b036a81b6/" },
                            { icon: "Facebook", href: "https://www.facebook.com/phamnhat11" },
                            { icon: "Gmail", href: "anhnhatpham2001@gmail.com" }
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="px-4 py-2 rounded-full glass hover:bg-primary/30 text-md hover:text-primary transition-all">{social.icon}</a>
                        ))}
                    </div>
                </div>

                {/* Right column - Profile image */}
                <div className="relative animate-fade-in animation-delay-300">
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
            <div className="mt-24 animate-fade-in animation-delay-800">
                <p className="text-4xl font-bold text-foreground mb-16 text-center">Technologies I work with</p>
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

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" onClick={(e) => handleScrollClick(e, '#about')} className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-md font-medium uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div> */}
    </section>
}

export default Hero;
