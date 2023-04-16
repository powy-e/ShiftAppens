import { PrismaClient } from '@prisma/client'


export default async function get_uni_names(name) {

    const db = new PrismaClient()

    const university = await db.university.findFirst({
        where: {
            OR: { name: name, shortName: name }
        },
        select: {
            name: true,
            shortName: true,
        }
    }
    ).catch((e) => { console.log(e); return "ERROR: Can't find universities" });

    return university;
}

