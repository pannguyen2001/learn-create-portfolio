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
        title: "Automation Testing",
        description:
            "Develop and maintain reusable UI and API automation frameworks using Python, Playwright, Pytest and Robot Framework."
    },
    {
        icon: Lightbulb,
        title: "Data Quality",
        description:
            "Build validation tools to identify missing, invalid and inconsistent data across migration and processing workflows."
    },
    {
        icon: Rocket,
        title: "Collboration",
        description:
            "Collaborate effectively with teamates and depelopers to finding software issues and builing solutions."
    },
    
    {
        icon: User,
        title: "Continuous Growth",
        description:
            "Learning and sharing useful knowledge to improve software automation and data engineering."
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
                            make them work as expected.
                        </span>
                    </h2>

                    <div className="space-y-4 text-foreground animate-fade-in animation-delay-200 mt-10">
                        <p><span className="font-bold">Primarily work:</span> Python as first language and JavaScript/TypeScript as second language. Using tools such as Pytest, Playwright and Robot Framework to develop and maintain automated testing solutions.</p>
                        <p><span className="font-bold">Current Focus:</span> Building maintainable automation frameworks and learning data engineering.</p>
                        <p><span className="font-bold">Interests:</span> Building automation tools and solving data-processing problems. My personal projects explore test data generation and automated data validation, help to reduce data preparation time and alert data quality issues soon.</p>
                        <p><span className="font-bold">Transitioning to:</span> SDET & Data Engineering roles.</p>
                    </div>

                    <div className="glass rounded-2xl p-6 mt-10 animate-fade-in animation-delay-300 glow-border bg-muted">
                        <p className="text-lg font-medium text-foregroundn italic">"I believe a good engineering is not just writing test scripts only. It requires application architecture and business rules undestanding, preventing failure and giving effective solutions."</p>
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