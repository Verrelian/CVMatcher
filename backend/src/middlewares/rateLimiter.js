import rateLimit from 'express-rate-limit'

export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 menit
    max: 5, // max 5 request
    message: {
        message: 'Terlalu banyak percobaan login, coba lagi nanti'
    },
    standardHeaders: true,
    legacyHeaders: false
})