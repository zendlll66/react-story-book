import React from 'react'
import { motion } from 'framer-motion'

const Nopage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                    fontSize: '6rem',
                    fontWeight: 800,
                    color: '#6366f1',
                    marginBottom: '1rem',
                    textShadow: '0 4px 24px rgba(99,102,241,0.15)'
                }}
            >
                404
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                    fontSize: '1.7rem',
                    color: '#64748b',
                    marginBottom: '2.5rem',
                    textAlign: 'center',
                    fontWeight: 500
                }}
            >
                ไม่พบหน้าที่คุณค้นหา<br />Page Not Found
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <a href="/" style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                    color: '#fff',
                    borderRadius: '999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.15)',
                    transition: 'background 0.2s',
                }}>กลับหน้าแรก</a>
            </motion.div>
        </div>
    )
}

export default Nopage