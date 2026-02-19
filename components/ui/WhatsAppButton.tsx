'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={personalInfo.socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
      </span>
    </motion.a>
  )
}
