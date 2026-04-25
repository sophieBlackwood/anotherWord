const author = {
  name: "Dallin Stahmann",
  blurb: "Dallin is a writer with a gift for capturing the world's complexities in verse. Based in Idaho, he has spent years accumulating a collection of poems that reflect true, genuine emotions. This sanctuary is a place for him to share those quiet observations with others.",
  location: "Idaho"
};

const poems = [
  {
    id: 1,
    title: "Cycle of Life",
    date: "12/14/24",
    description: "Story Behind Poem",
    content: `When you look at the world, what do you see?
This is what the world looks like to me:
I see trials and pain
I see clouds of rain
Stars in the sky
And dreams to fly
Above all of the uncertain things
I see light and love
With all above
A time to learn
And time to yearn
A test and class
With time that has passed
A fall and a low
But you should always know
That wherever you are
Regardless how far
This world is precious indeed,
Seasons may pass
At rates always too fast
Than reason should possibly be,
Friends and bonds
That look to beyond
Make this experience here a blessing
If nothing should change
And all things remain
I would truly thank thee
Yet still time passes by 
And though I may cry
I will not lie
I’m still grateful for all of it indeed
The highs and the lows
We all truly know
A rush and a thrill
A silence that fills
The connection to all we need
I may not know
Where my story will go
A hit and a miss
A blessed kiss
That’s a promise to those that we’ll keep,
The world is so full
Of these falls and these rise
But the greatest prize
Is knowing the life I lead,
Till death do I end
And still start again
A cycle of life
Though full of strife
Will always be blessed to me.`,
    tags: ["Cycle of Life", "Cycle", "life", "hope", "existence"],
    featured: true
  },
  {
    id: 2,
    title: "Shout into Nothing",
    date: "2/3/25",
    description: "Story Behind Poem",
    content: `It’s a shout into nothing
To let out the grief and frustration and pain 
A plea to finally be something 
A silent cry in the rain

When time can stop ticking
Yet nobody is missing
The one who silently stays

with a shout into nothing
Everything breaks and starts healing
And the most important being
The emotion that’s let away

A shout into nothing 
Wishing that someone would hear
But stopping due to the weight you feel 

And the shout into nothing remains

The shout grows and it roars
Through open doors 
It’s the thing that’s keeping you sane

A shout into nothing
Is the reason that something
Finally feels ok

My shout into nothing
Is what keeps me here today`,
    tags: ["shout", "nothing", "Shout Into Nothing", "grief", "healing"],
    featured: true
  },
  {
    id: 3,
    title: "Full System Error",
    date: "2/10/25",
    description: "Story Behind Poem",
    content: `Brain is shutting down, senses are wrong 
World is changing, what is going on?
Why can’t I think, why am I not strong
I just feel like saying, “I just need a pause”

Body shaking
Legs quaking
Everything is off
Look around and I see
This only happened to me

World keeps spinning 
Friends still missing
But nothings going on 

I’m still breathing but no words escaping, 
I’m just staying. 
In a broken system that’s flawed`,
    tags: ["full", "system", "Full System Error", "error", "overwhelmed", "stasis"],
    featured: true
  }
];

// Helper for the homepage logic
const featuredPoems = poems.filter(p => p.featured);
