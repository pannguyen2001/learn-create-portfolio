import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"


type testimonialType = {
    quote: string,
    author: string,
    role: string,
    avatar: string
}

const testimonials: Array<testimonialType> = [
    {
        quote: "Lorem ipsum is a standard dummy or placeholder text used in graphic design, publishing, and web development to preview layouts without distracting readers with real content.",
        author: "Author 1",
        role: "QA enginner",
        avatar: "https://images.unsplash.com/photo-1715615685666-882710b534f9"
    },
    {
        quote: "Lorem ipsum is a standard dummy or placeholder text used in graphic design, publishing, and web development to preview layouts without distracting readers with real content.",
        author: "Author 2",
        role: "QA enginner",
        avatar: "https://images.unsplash.com/photo-1715615685666-882710b534f9"
    },
    {
        quote: "Lorem ipsum is a standard dummy or placeholder text used in graphic design, publishing, and web development to preview layouts without distracting readers with real content.",
        author: "Author 3",
        role: "QA enginner",
        avatar: "https://images.unsplash.com/photo-1715615685666-882710b534f9"
    }
]

const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0)

    const next = () => {
        setActiveIdx((prev) => {
            return (prev + 1) % testimonials.length
        })
    }

    const prev = () => {
        setActiveIdx((prev) => {
            return (prev - 1 + testimonials.length) % testimonials.length
        })
    }

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What people say
                    </span>
                    <h2 className="text-4xp md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-white">
                            amazing people.
                        </span>
                    </h2>
                </div>
                
                {/* Testimonials carosel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main testimonal*/}
                        <div className="glass p-8 rounded-3xl">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground"/>
                            </div>

                            <blockquote className="text-xl md:text-xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                src={testimonials[activeIdx].avatar}
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                alt={testimonials[activeIdx].author}
                                />

                                <div>
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-muted-foreground text-sm">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                        </div>
                        </div>

                        {/* Testiminial Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:ng-primary/10 hover:text-primary transition-all" onClick={prev}>
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {
                                    testimonials.map((testimonial, idx) => (
                                        <button
                                            onClick={() => setActiveIdx(idx)}
                                            key={idx}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === activeIdx? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/30"}`}
                                        />
                                    ))
                                }
                            </div>

                            <button
                                className="p-3 rounded-full glass hover:ng-primary/10 hover:text-primary transition-all"
                                onClick={next}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Testimonials;