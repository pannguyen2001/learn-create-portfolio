import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";


type projectType = {
    title: string,
    description: string,
    image?: string,
    tag?: Array<string>,
    github?: string
}
const projects: Array<projectType> = [
    {
        title: "Test Data Generation",
        description: "A tool helps to generate test data fast and correctly, adapt data types, formats and bussiness logics. Support to save data directly into database (PostgreSQl, MongoDB) or file (CSV).",
        image: "https://images.unsplash.com/photo-1757466762489-52fea38071ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        tag: ["Data generation", "Automation", "Python", "Pandas", "Numpy", "PostgreSQL", "MongoDB", "Git", "Github"],
        github: "https://github.com/pannguyen2001/gen_data_tool"
    },
    {
        title: "API Testing Framework",
        description: "An API automation testing framework that validates a real backend (request/response cycles, status codes, headers and JSON payloads). It is built to be easy to extend: adding a new endpoint or a new test case is a small, localized change.",
        image: "https://plus.unsplash.com/premium_photo-1764702385680-bd5c390f19f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        tag: ["Testing", "Automation", "Python", "API", "Data-driven", "Pytest", "Allure", "Git", "Github"],
        github: "https://github.com/pannguyen2001/api_test_cap_prj_v2"
    },
    {
        title: "Data Validation Tool",
        description: "A tool helps to check data quality based on specification and bussiness logics, figure out invalid data early before importing into database. Support to record invalid data into excel file for further analysis.",
        image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        tag: ["Data validation", "Automation", "Python", "Pandas", "Numpy", "Polars", "Git", "Github"],
        github: "https://github.com/pannguyen2001/data_validation"
    },
    {
        title: "UI Testing Framework",
        description: "A framework for UI testing using Playwright TS, apply POM, data-driven testing, fixture and authentication, integrate with Allure report for effectively testing and debuging.",
        image: "https://images.unsplash.com/photo-1753715613831-9e48eac86813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        tag: ["Testing", "Automation", "Playwright", "TS", "Data-driven", "POM", "Allure", "Git", "Github"],
        github: "https://github.com/pannguyen2001/playwright_ts_cap_prj"
    },
    {
        title: "Capstone project: Finding teacher",
        description: "MERN stack project with full authentication, seaching, register, judge teacher and management course, student and instructor.",
        image: "https://plus.unsplash.com/premium_photo-1677870728087-2257ce93bfe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        tag: ["MERN", "Frontend development", "Backend development", "Redux-toolkit", "Bulma", "Git", "Github"],
        github: "https://github.com/pannguyen2001/datn-fe"
    }
]

const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
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

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground animate-fade-in">
                    Projects that
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Here are some of my most recent projects, solving real-world problems.
                </p>
            </div>

            {/* Project grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-300">
                {
                    projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in"
                            style={{
                                animationDelay: `${(idx + 1) * 100}ms`
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent">
                                    {/* Overlay link */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <ArrowUpRight className="w-5 h-5 " />
                                        </a>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-semibold
                                                    text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                                            </div>
                                            <p className="mt-2 text-muted-foreground text-sm">{project.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {
                                                project.tag.map((tag, idx) => (
                                                    <span key={idx} className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* View All CTA
                <div className="col-span-1 md:col-span-2 flex items-center justify-center p-6 animate-fade-in animation-delay-600">
                    <Button className="glass rounded-2xl p-6 animate-fade-in">
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </Button>
                </div> */}
            </div>
        </div>
    </section>
}

export default Projects;
