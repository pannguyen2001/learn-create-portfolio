

type experienceType = {
    period: string,
    role: string,
    company: string,
    description: string,
    technologies: Array<string>,
    current: boolean
}

const experiences: Array<experienceType> = [
    {
        period: "07/2026 - Present",
        role: "Automation QA Engineer",
        company: "AvePoint",
        description: "Building, extending and maintaining an E2E UI automation testing framework using RobotFramework.",
        technologies: ["RobotFramework", "Python", "Git", "GitLab"],
        current: true
    },
    {
        period: "06/2025 - 06/2026",
        role: "Automation QA Engineer",
        company: "AvePoint",
        description: "Designing test cases, writing testing scripts, maintaining and debuging an API testing framework using Pytest. Preventing and alerting API issues soon.",
        technologies: ["Pytest", "Python", "Postman", "Data-driven testing", "Git", "GitLab"],
        current: false
    },
    {
        period: "03/2024 - 05/2025",
        role: "Manual QA Engineer",
        company: "Avepoint",
        description: "Data migration and data quality check, preventing data issues and ensuring data quality during data migration process from internal storage into system storage. Verifying data display and integration correctness on UI.",
        technologies: ["Internal tool", "Self-development tool", "Excel", "Jira", "Python", "Pandas"],
        current: false
    }

]

const Experience = () => {
    return (<section id="experience" className="py-32 relative overflow-hidden">
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

        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2">

        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Carrer Jorney
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in anumation-delay-100 text-secondary-foreground">
                    Experience that{" "}
                    <span className="font-serif italic font-normal text-white">
                        speaks volumes.
                    </span>
                </h2>

                <p className="text-muted-foreground animate-fade-in anumation-delay-200">
                    A timeline of my career journey, highlighting key roles and responsibilities, from curious beginner to professional.
                </p>

            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(30, 144, 255, 0.8)]" />

                {/* Experience items */}
                <div className="space-y-12">
                    {
                        experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{
                                    animationDelay: `${(idx + 1) * 150}ms`
                                }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background">
                                    {
                                        exp.current &&
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75">

                                        </span>
                                    }
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2 mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {exp.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {
                                                exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </section>
    )
}

export default Experience;