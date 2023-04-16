import {PrismaClient} from '@prisma/client'


export default async function canteens_by_university(university_name) {

    const db = new PrismaClient()

    const university = await db.university.findFirst({
        where: {
            name: university_name,
        },
        include: {
            canteens: {
                select: {
                capacity: true,
                canteenName: true,
                coordinates: true,
                monday: true,
            }
        },
    }
}).catch((e) => { console.log(e); return "ERROR: Can't create user"});
    return university.canteens;
}

