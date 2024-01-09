const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      full_name: "Pham Tang Thanh Phong",
      gender: "Male",
      email: "pttp15122002@gmail.com"
      ,phone_number: "0768058382",
      password: "thanhPhong15122002"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
