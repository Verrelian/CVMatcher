// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = globalThis

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma
// }

// export { prisma }
// Dipakai untuk menghindari masalah koneksi saat menggunakan Prisma di lingkungan pengembangan dengan hot-reloading.
// Dengan cara ini, kita memastikan bahwa hanya satu instance PrismaClient yang dibuat selama siklus hidup aplikasi, 
// sehingga mengurangi risiko kehabisan koneksi ke database.

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export { prisma };