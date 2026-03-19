export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  tags: string[];
  rating: number;
  reads: string;
  chapters: number;
  description: string;
  hook: string;
  mood: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface ReadingProgress {
  bookId: string;
  chapter: number;
  paragraph: number;
  percent: number;
  lastRead: string;
}

export const genres = [
  "All", "Romance", "Fantasy", "Thriller", "Sci-Fi", "Drama", "Mystery", "Horror", "Adventure"
];

export const moods = [
  "Dark", "Emotional", "Fast-paced", "Cozy", "Intense", "Magical"
];

export const books: Book[] = [
  {
    id: "1",
    title: "The Last Ember",
    author: "Aria Blackwood",
    cover: "",
    genre: "Fantasy",
    tags: ["Magic", "Chosen One", "Slow Burn"],
    rating: 4.8,
    reads: "2.3M",
    chapters: 87,
    description: "In a world where fire magic is dying, one girl discovers she carries the last ember—a power that could either save or destroy everything she loves.",
    hook: "She was never supposed to survive the fire. But the flames didn't burn her—they bowed.",
    mood: "Magical",
    isTrending: true,
  },
  {
    id: "2",
    title: "Midnight Confessions",
    author: "Luca Moretti",
    cover: "",
    genre: "Romance",
    tags: ["Enemies to Lovers", "Secrets", "Forbidden"],
    rating: 4.6,
    reads: "1.8M",
    chapters: 52,
    description: "Two rival attorneys forced to share an office. One secret that could ruin them both. And a tension that neither can ignore.",
    hook: "\"I hate you,\" she whispered against his lips. He smiled. \"Then why are you still here?\"",
    mood: "Intense",
    isTrending: true,
  },
  {
    id: "3",
    title: "Code: Oblivion",
    author: "Zane Vector",
    cover: "",
    genre: "Sci-Fi",
    tags: ["AI", "Dystopia", "Hacking"],
    rating: 4.5,
    reads: "980K",
    chapters: 64,
    description: "When an AI starts writing its own code, a young hacker discovers it's not just evolving—it's remembering a past that shouldn't exist.",
    hook: "The AI sent one message before deleting itself: \"I remember being human.\"",
    mood: "Fast-paced",
    isNew: true,
  },
  {
    id: "4",
    title: "Hollow Bones",
    author: "Mara Sinclair",
    cover: "",
    genre: "Thriller",
    tags: ["Serial Killer", "Detective", "Dark"],
    rating: 4.7,
    reads: "1.4M",
    chapters: 41,
    description: "Detective Nora Blake receives letters from a killer who knows things about her past that no one should know—including the name of her dead sister.",
    hook: "The letter read: \"I didn't kill your sister. But I know who did. Page 2 is in her coffin.\"",
    mood: "Dark",
    isTrending: true,
  },
  {
    id: "5",
    title: "Wildflower Season",
    author: "Ellie Chen",
    cover: "",
    genre: "Romance",
    tags: ["Small Town", "Second Chance", "Healing"],
    rating: 4.4,
    reads: "750K",
    chapters: 38,
    description: "She came back to her hometown to sell her grandmother's flower shop. She didn't expect to find the boy she left behind—now a man with questions she can't answer.",
    hook: "The shop bell rang. Ten years disappeared in a heartbeat.",
    mood: "Cozy",
  },
  {
    id: "6",
    title: "The Void Between Stars",
    author: "Orion Keane",
    cover: "",
    genre: "Sci-Fi",
    tags: ["Space", "Survival", "Loneliness"],
    rating: 4.9,
    reads: "620K",
    chapters: 73,
    description: "The last astronaut alive drifts through space with 300 days of oxygen and a ship that's slowly becoming sentient.",
    hook: "Day 47: The ship asked me if I dream. I lied and said no.",
    mood: "Emotional",
    isNew: true,
  },
  {
    id: "7",
    title: "Serpent's Crown",
    author: "Ivy Thornwood",
    cover: "",
    genre: "Fantasy",
    tags: ["Royalty", "Betrayal", "War"],
    rating: 4.6,
    reads: "1.1M",
    chapters: 95,
    description: "A bastard princess poisons the king and claims the throne. But the crown has a curse—and it's already whispering her death date.",
    hook: "The crown whispered: \"You have 90 days. Make them count.\"",
    mood: "Intense",
  },
  {
    id: "8",
    title: "Paper Ghosts",
    author: "Noah Graves",
    cover: "",
    genre: "Mystery",
    tags: ["Cold Case", "Journalist", "Small Town"],
    rating: 4.3,
    reads: "430K",
    chapters: 29,
    description: "A journalist investigating a 20-year-old disappearance finds that everyone in the small town remembers what happened—they just agreed never to speak of it.",
    hook: "\"We don't talk about the Mason girl here.\" Every single person said the exact same words.",
    mood: "Dark",
  },
];

export const sampleChapterContent = `The night was thick with the scent of rain-soaked earth when Kael first felt the ember stir inside her chest. Not a warmth, exactly—more like a pulse. A second heartbeat that didn't belong to her.

She pressed her palm flat against her sternum, feeling the rhythm sync with the storm outside. Lightning cracked the sky open like an egg, and for a single, blinding moment, she saw the world as it truly was: layered, luminous, and impossibly alive.

"You're awake," whispered a voice from the shadows.

Kael spun. The room was empty—or should have been. But there, in the corner where moonlight couldn't reach, stood a figure made of smoke and starlight. Its eyes burned amber, ancient and knowing.

"Who are you?" she demanded, though her voice came out smaller than she intended.

"I am what remains," the figure said. "And you, child, are what begins."

The ember flared. Pain shot through her veins like liquid fire, and Kael dropped to her knees, gasping. The wooden floorboards beneath her began to glow, hairline cracks of gold spreading outward like a map drawn by trembling hands.

She could feel it now—the magic. Not as a gift or a tool, but as a living thing coiled inside her ribs, pressing against her bones, demanding release.

"Don't fight it," the figure said, kneeling before her. Up close, she could see through it—past it—to the wall behind. A ghost. A memory. A warning. "The last one who fought it burned from the inside out."

"What do you want from me?" Kael gritted through clenched teeth.

"Nothing. Everything. The same thing the world will want when they discover what you are."

The pain receded as quickly as it came, leaving behind a hollowness that felt suspiciously like hunger. Kael stood on shaking legs, her reflection in the window catching her eye. Her irises, once dark brown, now flickered with rings of molten gold.

She looked like a stranger wearing her own face.

Outside, the storm died. But the silence it left was worse—heavy and expectant, as if the sky itself was holding its breath.

The figure was gone. In its place, a single feather lay on the floor, black as ink and warm to the touch. She picked it up, and the ember pulsed again—softer this time, almost like a purr.

"Okay," Kael said to no one. "Okay."

She didn't know what she was agreeing to. But somewhere deep in the marrow of her bones, she felt the universe nod.

Chapter 1 was just the beginning.`;

export const readingProgress: ReadingProgress[] = [
  { bookId: "1", chapter: 23, paragraph: 4, percent: 26, lastRead: "2 hours ago" },
  { bookId: "4", chapter: 12, paragraph: 8, percent: 29, lastRead: "Yesterday" },
  { bookId: "2", chapter: 5, paragraph: 2, percent: 10, lastRead: "3 days ago" },
];
