
const Contact = () => {
    return <section id="contact">
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

        <div className="animate-fade-in">
            <div className="space-y-8">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Contact
                </span>
            </div>
        </div>
    </section>
}

export default Contact;