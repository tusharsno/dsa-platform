"use server";

import db from "@/lib/db";

export async function getUserRank(userId: string): Promise<number> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { points: true },
  });

  if (!user) return 0;

  const rank = await db.user.count({
    where: {
      points: {
        gt: user.points,
      },
    },
  });

  return rank + 1;
}
