export interface Exercise {
  id: number;
  title: string;
  duration: string;
  file: string;
}

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  exerciseIds: number[];
}

export const exercises: Exercise[] = [
  { id: 1, title: "Inngangur", duration: "0:36", file: "/audio/01-inngangur.mp3" },
  { id: 2, title: "Rúsínuæfingin", duration: "8:31", file: "/audio/02-rusinuaefingin.mp3" },
  { id: 3, title: "Líkamsskönnun", duration: "29:54", file: "/audio/03-likamsskonnun.mp3" },
  { id: 4, title: "Tíu mínútna sitjandi öndunaræfing", duration: "9:17", file: "/audio/04-tiu-minutna-sitjandi.mp3" },
  { id: 5, title: "Hreyfihugleiðsla", duration: "49:57", file: "/audio/05-hreyfihugleidsla.mp3" },
  { id: 6, title: "Öndun og teygjur", duration: "29:58", file: "/audio/06-ondun-og-teygjur.mp3" },
  { id: 7, title: "Að ganga með vakandi athygli", duration: "12:33", file: "/audio/07-ad-ganga-med-vakandi-athygli.mp3" },
  { id: 8, title: "Þriggja þrepa andrými", duration: "4:39", file: "/audio/08-thriggja-threpa-andrymi.mp3" },
  { id: 9, title: "Þriggja þrepa andrými með viðbót", duration: "5:21", file: "/audio/09-thriggja-threpa-andrymi-med-vidbot.mp3" },
  { id: 10, title: "Tuttugu mínútna sitjandi öndunaræfing", duration: "20:01", file: "/audio/10-tuttugu-minutna-sitjandi.mp3" },
  { id: 11, title: "Sitjandi öndunaræfing", duration: "37:18", file: "/audio/11-sitjandi-ondunaraefing.mp3" },
  { id: 12, title: "Að takast á við erfiðleika", duration: "24:01", file: "/audio/12-ad-takast-a-vid-erfidleika.mp3" },
  { id: 13, title: "Bjöllur 5-10-15-20-30 mín.", duration: "30:09", file: "/audio/13-bjollur.mp3" },
  { id: 14, title: "Tvær leiðir til að upplifa", duration: "3:53", file: "/audio/14-tvaer-leidir-til-ad-upplifa.mp3" },
  { id: 15, title: "Vertu vinur", duration: "8:22", file: "/audio/15-vertu-vinur.mp3" },
];

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Leiðin út úr sjálfstýringunni",
    subtitle: "The Way Out of Auto-Pilot",
    exerciseIds: [2, 3],
  },
  {
    number: 2,
    title: "Að upplifa á annan hátt",
    subtitle: "Experiencing Differently",
    exerciseIds: [3, 4],
  },
  {
    number: 3,
    title: "Að lifa í núinu",
    subtitle: "Living in the Present",
    exerciseIds: [5, 6, 8],
  },
  {
    number: 4,
    title: "Hvenær er ég að forðast?",
    subtitle: "When Am I Avoiding?",
    exerciseIds: [5, 7, 8, 9, 11],
  },
  {
    number: 5,
    title: "Að leyfa hlutunum að vera eins og þeir eru",
    subtitle: "Allowing Things to Be",
    exerciseIds: [8, 9, 12, 15],
  },
  {
    number: 6,
    title: "Að sjá hugsanir sem hugsanir",
    subtitle: "Seeing Thoughts as Thoughts",
    exerciseIds: [8, 9, 11, 15],
  },
  {
    number: 7,
    title: "Góðvild í verki",
    subtitle: "Kindness in Action",
    exerciseIds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    number: 8,
    title: "Hvað nú?",
    subtitle: "What Now?",
    exerciseIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];

export function getExercise(id: number): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}
