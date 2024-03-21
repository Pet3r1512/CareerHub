import { PrismaClient } from "@prisma/client";
import { companies, urlsData } from "../src/data/companies";

const prisma = new PrismaClient();

async function main() {
  // const companiesData = await prisma.company.createMany({
  //   data: companies,
  // });
  // const urls = await prisma.uRL.createMany({
  //   data: urlsData,
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
