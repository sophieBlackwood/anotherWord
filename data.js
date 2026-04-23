const author = {
  name: "Your Name",
  blurb: "A collector of moments and rhythm. This sanctuary holds fragments of thought captured in verse.",
  location: "By the Sea"
};

const poems = [
  {
    id: 1,
    title: "Untitled",
    date: "April 2024",
    content: `Line one
    
    Line two
    
    Line three`,
    tags: ["quiet", "reflection"],
    featured: true
  },
  {
    id: 2,
    title: "Evening",
    date: "March 2024",
    content: `Soft sky
    
    Fading light`,
    tags: ["nature", "dusk"],
    featured: false
  },
  {
    id: 3,
    title: "Seaglass",
    date: "February 2024",
    content: `Smoothed by the tide,
    A sharp edge turned soft,
    Green light in the sand.`,
    tags: ["nature", "metaphor"],
    featured: true
  }
];

// If you need to filter these for the "Featured" carousel on the home page:
const featuredPoems = poems.filter(p => p.featured);
