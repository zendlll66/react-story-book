import React from 'react';
import { motion } from 'framer-motion';

const socialIcons = [
    { icon: '▶️', label: 'YouTube' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📘', label: 'Facebook' },
    { icon: '✉️', label: 'Email' },
];

const footerLinks = [
    {
        title: 'Site',
        links: ['Home', 'Trade Now', 'Invest Now', 'Help Center'],
    },
    {
        title: 'Other',
        links: ['Profile', 'Transaction History', 'My Inventory', 'Blog'],
    },
    {
        title: 'Terms',
        links: ['Terms of Use', 'Privacy Policy', 'Cookie policy'],
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, type: 'spring' },
    }),
};

const Footer = () => {
    return (
        <motion.footer
            className="bg-neutral-900 text-neutral-300 pt-12 text-sm font-light rounded-t-2xl shadow-lg mt-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
                {/* Logo & Description */}
                <motion.div
                    custom={1}
                    variants={fadeIn}
                    className="flex-1 min-w-[220px]"
                >
                    <motion.div className="flex items-center mb-3" custom={2} variants={fadeIn}>
                        <motion.span
                            className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center mr-2 text-base"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >💠</motion.span>
                        <motion.span className="font-semibold text-base text-neutral-100 tracking-tight" whileHover={{ scale: 1.05 }}>
                            Trade
                        </motion.span>
                    </motion.div>
                    <motion.div className="text-neutral-400 mb-6 leading-relaxed text-xs" custom={3} variants={fadeIn}>
                        Easily your trading in game have<br />
                        many payment and easy flow
                    </motion.div>
                    <motion.div className="flex gap-3 mt-2" custom={4} variants={fadeIn}>
                        {socialIcons.map((s, i) => (
                            <motion.a
                                key={s.label}
                                href="#"
                                aria-label={s.label}
                                whileHover={{ scale: 1.15, rotate: -8 + i * 4 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 300, delay: 0.2 + i * 0.08, duration: 0.4 }}
                                className="transition-transform duration-200 text-lg hover:text-neutral-100"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
                {/* Links */}
                <motion.div className="flex flex-1 justify-end gap-10 md:gap-16">
                    {footerLinks.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            custom={5 + idx}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div className="font-medium mb-2 text-neutral-200 text-sm tracking-wide" whileHover={{ scale: 1.04 }}>
                                {section.title}
                            </motion.div>
                            <ul className="space-y-1">
                                {section.links.map((link, i) => (
                                    <motion.li key={link} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07, duration: 0.3 }}>
                                        <motion.a
                                            href="#"
                                            className="hover:text-neutral-100 transition-colors duration-150 text-xs"
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.96 }}
                                        >
                                            {link}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* Copyright */}
            <motion.div
                className="mt-10 px-6 pb-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-2"
                custom={8}
                variants={fadeIn}
            >
                <motion.div whileHover={{ scale: 1.03 }}>
                    © Trade 2024 &nbsp; • &nbsp; Powered by <span className="font-medium text-neutral-300">STEAM</span> &nbsp; • &nbsp; Not affiliated with Valve Corp.
                </motion.div>
                <div className="flex gap-2">
                    {["🟡", "🔵", "🔴"].map((icon, i) => (
                        <motion.span
                            key={icon}
                            whileHover={{ scale: 1.15, rotate: 8 - i * 4 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 0.4 + i * 0.08, duration: 0.4 }}
                            className="text-base"
                        >
                            {icon}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;