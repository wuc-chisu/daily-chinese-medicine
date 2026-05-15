import { PrismaClient, PostCategory } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
  {
    slug: "morning-qi-gentle-start",
    title: "Morning Qi: A Gentle Start",
    summary: "A calm daily routine for warming the body, waking digestion, and arriving in the day with steady energy.",
    body: "Begin with warm water, slow shoulder circles, and three minutes of nasal breathing. In Chinese medicine, mornings are a useful time to support yang qi without forcing intensity. Keep breakfast warm and simple when possible.",
    category: PostCategory.DAILY_RHYTHM
  },
  {
    slug: "ginger-scallion-broth",
    title: "Ginger Scallion Broth for Chilly Days",
    summary: "A kitchen-friendly food therapy note for cold, damp mornings or that first hint of seasonal discomfort.",
    body: "Fresh ginger and scallion are traditionally used to warm the surface and encourage gentle circulation. Simmer with water or light stock for 10 minutes. This is educational wellness content, not medical advice.",
    category: PostCategory.FOOD_THERAPY
  },
  {
    slug: "spring-liver-qi-walk",
    title: "A Spring Walk for Liver Qi",
    summary: "Use easy movement and a wider gaze to soften tension during the spring season.",
    body: "Spring care often emphasizes smooth flow. A 20-minute walk, relaxed jaw, and unclenched hands can be a simple daily practice. Notice color, horizon, and breath rather than treating the walk like a workout.",
    category: PostCategory.SEASONAL_CARE
  }
];

async function main() {
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
