import React from 'react'
import { motion } from 'framer-motion'

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 flex flex-col pt-40">
            <motion.header
                className="flex-1 flex flex-col justify-center items-center text-center px-4 m-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="mb-6 text-4xl font-extrabold text-yellow-500 tracking-widest drop-shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    LOGO
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Welcome to <span className="text-yellow-500">Luxury Storybook</span></h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">Experience the elegance of modern UI components</p>
                <motion.button
                    whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(212,175,55,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    className="lux-cta px-8 py-3 rounded-full bg-yellow-400 text-white font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-200"
                >
                    Get Started
                </motion.button>
            </motion.header>
            <section className="py-16 bg-white/80 backdrop-blur-md">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <motion.div
                        className="lux-feature flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white/90"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <div className="text-4xl mb-3">🌟</div>
                        <h2 className="text-xl font-bold mb-2 text-yellow-600">Premium Design</h2>
                        <p className="text-gray-500">Crafted with attention to detail and a touch of gold.</p>
                    </motion.div>
                    <motion.div
                        className="lux-feature flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white/90"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="text-4xl mb-3">⚡</div>
                        <h2 className="text-xl font-bold mb-2 text-yellow-600">Lightning Fast</h2>
                        <p className="text-gray-500">Optimized for performance and smooth experience.</p>
                    </motion.div>
                    <motion.div
                        className="lux-feature flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white/90"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="text-4xl mb-3">🔒</div>
                        <h2 className="text-xl font-bold mb-2 text-yellow-600">Secure</h2>
                        <p className="text-gray-500">Built with best practices for your peace of mind.</p>
                    </motion.div>
                </div>
            </section>

            {/* Infinite Marquee Section */}
            <div className="w-full overflow-x-hidden py-8 bg-white/70">
                <div className="relative w-full">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap will-change-transform"
                        style={{ x: 0 }}
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' }}
                    >
                        {[
                            { name: 'React', icon: '⚛️' },
                            { name: 'Tailwind CSS', icon: '🌬️' },
                            { name: 'Framer Motion', icon: '🎞️' },
                            { name: 'Vite', icon: '⚡' },
                            { name: 'Storybook', icon: '📚' },
                            { name: 'Jest', icon: '🧪' },
                            { name: 'Figma', icon: '🎨' },
                            { name: 'GitHub', icon: '🐙' },
                        ].concat([
                            { name: 'React', icon: '⚛️' },
                            { name: 'Tailwind CSS', icon: '🌬️' },
                            { name: 'Framer Motion', icon: '🎞️' },
                            { name: 'Vite', icon: '⚡' },
                            { name: 'Storybook', icon: '📚' },
                            { name: 'Jest', icon: '🧪' },
                            { name: 'Figma', icon: '🎨' },
                            { name: 'GitHub', icon: '🐙' },
                        ])
                            .map((tool, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-8 py-3 rounded-xl bg-white/90 shadow border border-gray-100 text-lg font-semibold text-gray-700">
                                    <span className="text-2xl">{tool.icon}</span> {tool.name}
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>

            {/* Portfolio Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[{
                            title: 'Elegant Dashboard',
                            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
                            desc: 'A minimal, modern dashboard for business analytics.'
                        }, {
                            title: 'Creative Landing',
                            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
                            desc: 'Landing page with stunning visuals and smooth UX.'
                        }, {
                            title: 'Mobile App UI',
                            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
                            desc: 'Clean and intuitive mobile app interface.'
                        }].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 flex flex-col items-center group border border-gray-100"
                                whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                            >
                                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between p-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                                    <p className="text-gray-500 text-center text-base mb-2">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600 mb-6">We are a passionate team of designers and developers dedicated to creating elegant, high-quality UI solutions. Our mission is to deliver beautiful and functional digital experiences.</p>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 bg-gradient-to-l from-yellow-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            name: 'Alice',
                            role: 'UI Designer',
                            avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
                        }, {
                            name: 'Bob',
                            role: 'Frontend Developer',
                            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
                        }, {
                            name: 'Carol',
                            role: 'Project Manager',
                            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
                        }].map((member, idx) => (
                            <motion.div
                                key={member.name}
                                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                            >
                                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-200 object-cover" />
                                <h3 className="text-xl font-semibold mb-1 text-yellow-600">{member.name}</h3>
                                <p className="text-gray-500 mb-2">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Project Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Project</h2>
                    <p className="text-lg text-gray-600 mb-6">Luxury Storybook is a showcase of modern, elegant UI components built with React, Tailwind CSS, and Framer Motion. We aim to inspire and empower developers to create beautiful user interfaces with ease.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-100 to-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600 mb-8">Interested in working with us or have any questions? Reach out below!</p>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder="Your Name" className="flex-1 px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>
                        <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3 rounded-full bg-yellow-400 text-white font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-200"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Homepage