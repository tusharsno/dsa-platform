"use server";

import db from "./db";
import { revalidatePath } from "next/cache";

export async function getAllProblemsAdmin() {
  try {
    return await db.problem.findMany({
      include: {
        topic: true,
        tags: true,
        companies: true,
        _count: {
          select: {
            solutions: true,
            testCases: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching admin problems:", error);
    return [];
  }
}

export async function createProblemAdmin(data: {
  title: string;
  slug: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topicId: string;
  hints?: string[];
  starterCode?: string;
  tagIds?: string[];
  companyIds?: string[];
}) {
  try {
    const problem = await db.problem.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        difficulty: data.difficulty,
        topicId: data.topicId,
        hints: data.hints || [],
        starterCode: data.starterCode || "",
        tags: data.tagIds
          ? {
              connect: data.tagIds.map((id) => ({ id })),
            }
          : undefined,
        companies: data.companyIds
          ? {
              connect: data.companyIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });

    revalidatePath("/admin/problems");
    revalidatePath("/problems");
    return { success: true, problem };
  } catch (error) {
    console.error("Error creating problem:", error);
    return { success: false, error: "Failed to create problem" };
  }
}

export async function updateProblemAdmin(
  id: string,
  data: {
    title?: string;
    slug?: string;
    description?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    topicId?: string;
    hints?: string[];
    starterCode?: string;
    tagIds?: string[];
    companyIds?: string[];
  }
) {
  try {
    const problem = await db.problem.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        difficulty: data.difficulty,
        topicId: data.topicId,
        hints: data.hints,
        starterCode: data.starterCode,
        tags: data.tagIds
          ? {
              set: data.tagIds.map((id) => ({ id })),
            }
          : undefined,
        companies: data.companyIds
          ? {
              set: data.companyIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });

    revalidatePath("/admin/problems");
    revalidatePath("/problems");
    return { success: true, problem };
  } catch (error) {
    console.error("Error updating problem:", error);
    return { success: false, error: "Failed to update problem" };
  }
}

export async function deleteProblemAdmin(id: string) {
  try {
    await db.problem.delete({
      where: { id },
    });

    revalidatePath("/admin/problems");
    revalidatePath("/problems");
    return { success: true };
  } catch (error) {
    console.error("Error deleting problem:", error);
    return { success: false, error: "Failed to delete problem" };
  }
}

export async function getAllTopicsAdmin() {
  try {
    return await db.topic.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return [];
  }
}

export async function getAllTagsAdmin() {
  try {
    return await db.tag.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}

export async function getAllCompaniesAdmin() {
  try {
    return await db.company.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}

export async function createTopicAdmin(data: {
  name: string;
  slug: string;
  icon?: string;
  order: number;
}) {
  try {
    const topic = await db.topic.create({ data });
    revalidatePath("/admin/settings");
    revalidatePath("/topics");
    return { success: true, topic };
  } catch (error) {
    console.error("Error creating topic:", error);
    return { success: false, error: "Failed to create topic" };
  }
}

export async function updateTopicAdmin(
  id: string,
  data: { name?: string; slug?: string; icon?: string; order?: number }
) {
  try {
    const topic = await db.topic.update({ where: { id }, data });
    revalidatePath("/admin/settings");
    revalidatePath("/topics");
    return { success: true, topic };
  } catch (error) {
    console.error("Error updating topic:", error);
    return { success: false, error: "Failed to update topic" };
  }
}

export async function deleteTopicAdmin(id: string) {
  try {
    await db.topic.delete({ where: { id } });
    revalidatePath("/admin/settings");
    revalidatePath("/topics");
    return { success: true };
  } catch (error) {
    console.error("Error deleting topic:", error);
    return { success: false, error: "Failed to delete topic" };
  }
}

export async function createTagAdmin(data: { name: string }) {
  try {
    const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const tag = await db.tag.create({ data: { ...data, slug } });
    revalidatePath("/admin/settings");
    return { success: true, tag };
  } catch (error) {
    console.error("Error creating tag:", error);
    return { success: false, error: "Failed to create tag" };
  }
}

export async function deleteTagAdmin(id: string) {
  try {
    await db.tag.delete({ where: { id } });
    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    console.error("Error deleting tag:", error);
    return { success: false, error: "Failed to delete tag" };
  }
}

export async function createCompanyAdmin(data: { name: string }) {
  try {
    const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const company = await db.company.create({ data: { ...data, slug } });
    revalidatePath("/admin/settings");
    return { success: true, company };
  } catch (error) {
    console.error("Error creating company:", error);
    return { success: false, error: "Failed to create company" };
  }
}

export async function deleteCompanyAdmin(id: string) {
  try {
    await db.company.delete({ where: { id } });
    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    console.error("Error deleting company:", error);
    return { success: false, error: "Failed to delete company" };
  }
}
