import { unstable_noStore as noStore } from "next/cache";
import { PostCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type DisplayPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  category: PostCategory;
  publishedAt: Date;
};

export const fallbackPosts: DisplayPost[] = [
  {
    id: "fallback-morning-qi",
    slug: "morning-qi-gentle-start",
    title: "Morning Qi: A Gentle Start",
    summary: "Warm water, light movement, and an unhurried breakfast for a steadier day.",
    body: "Begin with warm water, slow shoulder circles, and three minutes of nasal breathing. Keep breakfast warm and simple when possible.",
    category: PostCategory.DAILY_RHYTHM,
    publishedAt: new Date("2026-05-15T08:00:00.000Z")
  },
  {
    id: "fallback-broth",
    slug: "ginger-scallion-broth",
    title: "Ginger Scallion Broth for Chilly Days",
    summary: "A simple food therapy note for cold, damp mornings.",
    body: "Fresh ginger and scallion are traditionally used to warm the surface and encourage gentle circulation.",
    category: PostCategory.FOOD_THERAPY,
    publishedAt: new Date("2026-05-14T08:00:00.000Z")
  }
];

export async function getPublishedPosts(): Promise<DisplayPost[]> {
  noStore();

  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 12
    });

    return posts.length > 0 ? posts : fallbackPosts;
  } catch (error) {
    console.error("Falling back to static posts because the database is unavailable.", error);
    return fallbackPosts;
  }
}

export function formatCategory(category: PostCategory) {
  return category
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
