import type { Request, Response } from 'express';
import { authService } from '../../libs/auth';
import { Beat } from '../../models/Beat';

// const { PrismaClient } = require("@prisma/client");
// const prismaClient = new PrismaClient();

export default async function $post(req: Request, res: Response) {
  try {

    const { user } = await authService.getUser(req.user?.did as string);
    if (user?.didSpace?.endpoint) {
      const data = {
        wallet: user.did,
        name: user.fullName,
        avatar: user.avatar,
        file: "dummyfile",
        url: "dummyurl"
      }
      console.log(data);

      try {
        await Beat.create(data);
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      // await prismaClient.export.create({
      //   data: data
      // });
    }


    res.send({ ok: true });
  } catch (error) {
    console.error(error);
  }

}