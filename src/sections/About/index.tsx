import { Code2, Lightbulb, Rocket, User } from "lucide-react";
import React from "react";

type highlightType = {
    icon: React.ComponentType<{ className?: string }>,
    title: string,
    description: string
}

const highlights: Array<highlightType> = [
    {
        icon: Code2,
        title: "Automation testing",
        description: "Build, extend and maitain testing framework adapt to your needs."
    },
    {
        icon: Rocket,
        title: "Fast development",
        description: "Design and build automation performance testing system."
    },
    {
        icon: User,
        title: "Teamwork",
        description: "Collaborate to teamates effeciency."
    },
    {
        icon: Lightbulb,
        title: "Ready",
        description: "Learn new technologies and share knowledge."
    }
]

const About = () => {
    return <section id="about" className="py-20 relative overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left column */}
                <div className="animate-fade-in">
                    <div className="space-y-8">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-delay-100 text-secondary-foreground">
                        Sofware and data,
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make them work correctly.
                        </span>
                    </h2>

                    <div className="space-y-4 text-foreground animate-fade-in animation-delay-200 mt-10">
                        <p><span className="font-bold">Current Focus:</span> Scaling automation frameworks and optimizing data pipelines.</p>
                        <p><span className="font-bold">Transitioning to:</span> SDET & Data Engineering roles.</p>
                        <p><span className="font-bold">Interests:</span> Automation testing, data processing, system design and workflow orchestration.</p>
                    </div>

                    <div className="glass rounded-2xl p-6 mt-10 animate-fade-in animation-delay-300 glow-border bg-muted">
                        <p className="text-lg font-medium text-foregroundn italic">"I specialize in building Reliable Test Automation Systems and Scalabe Data Pipelines, focusing on high-performance processing and resilient architecture."</p>
                    </div>
                </div>

                {/* Right column - Hightlight*/}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{
                                animationDelay: `${(idx + 1) * 100}ms`
                            }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default About;