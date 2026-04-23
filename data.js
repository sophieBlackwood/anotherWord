const author = {
  blurb: "Write your author blurb here."
};

const poems = [
  {
    title: "Untitled",
    content: `Line one

Line two

Line three`,
    tags: ["quiet"],
    featured: true
  },
  {
    title: "Evening",
    content: `Soft sky

Fading light`,
    tags: ["nature"],
    featured: false
  }
];

// auto IDs
poems.forEach((p, i) => p.id = i + 1);
