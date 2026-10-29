import Button from "@/components/Button";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";


type contactType = {
    icon: React.ComponentType,
    label: string,
    value: string,
    href: string
}

const contacts: Array<contactType> = [
    {
        icon: Mail,
        label: "Email",
        value: "truonghoc@gmail.com",
        href: "mailto:truonghoc@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "(+84) 854751000",
        href: "tel:+844751000"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "DaNang, VietNam",
        href: "#"
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({
            type: null,
            message: ""
        })
        try {
            const serviceId = import.meta.env.VITAE_EMAIL_JS_SERVICE_ID;
            const templateId = import.meta.env.VITAE_EMAIL_JS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITAE_EMAIL_JS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Missing email.js environment variables");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                publicKey
            )

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully!"
            })

            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }
        catch (err: any) {
            setSubmitStatus({
                type: "error",
                message: err.text || "Message failed to send!"
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return <section id="contact" className="py-20 relative overflow-hidden">
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

        <div className="container mx-auto px-12 relative z-10">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in anumation-delay-100 text-secondary-foreground">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in anumation-delay-200 text-secondary-foreground">
                    Let's make{" "}
                    <span className="font-serif italic font-normal text-white">
                        great together.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Something need test? Let's talk. Send me a message and I'll get back to you as soon as possible.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-24 max-w-7xl mx-auto">
                <div className="lg:col-span-3 glass p-8 rounded-3xl border border-primary/30 anumate-fade-in animation-delay-300">
                    <form action="" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-md font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Your name..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-md font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                id="message"
                                required
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>

                        <Button
                            className="w-full"
                            type="submit"
                            size="default"
                            disabled={isLoading}
                        >
                            {
                                isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send message
                                        <Send className="w-5 h-5" />
                                    </>
                                )
                            }
                        </Button>

                        {
                            submitStatus.type && (
                                <div
                                    className={
                                        `flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ?
                                            "bg-green-500/10 border border-green-500/20 text-green-500" :
                                            "bg-red-500/10 border border-red-500/20 text-red-500"
                                        }`
                                    }
                                >
                                    {
                                        submitStatus.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                        )
                                    }
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )
                        }
                    </form>
                </div>

                {/* Contact info */}
                {/* <div className="space-y-6 animate-fade-in animation-delay-400">
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Info
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {
                            contacts.map((item, idx) => (
                                <a
                                    href={item.href}
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ">
                                        <item.icon className="w-5 h-5 text-primary"/>
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div> */}

                {/* Available card */}
                {/* <div className="glass rounded-3xl p-8 border-primary/30">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                        <span className="font-medium">
                            Currently Available
                        </span>
                    </div>
                    <p className="text-muted-foreground text-md">
                        I'm currently open to new oppotunities and exciting projects. Whether you need a full-time engineer or freelance consultant, let's talk!
                    </p>
                </div> */}

                <div className="lg:col-span-2 lg:block hidden">
                    <img
                        src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        alt="Profile photo"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    </section>
}

export default Contact;