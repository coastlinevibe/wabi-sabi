// WhatsApp Configuration
// TODO: Replace with actual business WhatsApp number
export const WHATSAPP_NUMBER = '+27714329190' // Wabi-Sabi WhatsApp number

// Pre-filled WhatsApp messages
export const WHATSAPP_MESSAGES = {
  supportDesk: "Hi Wabi-Sabi, I'd like to book a free 20-minute digital support checkup for my business.",
  general: "Hi! I'm interested in discussing hidden income flows with Wabi-Sabi",
  discovery: "Hi Wabi-Sabi, I'd like to book a discovery session to discuss my business growth.",
}

// Helper function to create WhatsApp click-to-chat link
export function getWhatsAppLink(message: string = WHATSAPP_MESSAGES.general): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
}
