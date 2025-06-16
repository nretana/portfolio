import { motion } from 'framer-motion'
import React from 'react'

export type AnimateSectionProps = {
    children: React.ReactNode
}

export const AnimateSection: React.FC<AnimateSectionProps> = ({ children }) => {
    return(<motion.div
      className='h-100'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>)
}