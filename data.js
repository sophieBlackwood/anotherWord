const author = {
  name: "Dallin Stahmann",
  blurb: "Blurb blurb blurb blurb",
  location: "Idaho"
};

const poems = [
  {
    id: 1,
    title: "Contradiction",
    date: "6/7/25",
    content: `Knowing what to do yet never knowing how to do it
planning for the future but there’s always a part that won’t fit

Wanting to spend more time with others but also needing space
Then I feel alone when they’re gone and my heart starts to race

Happy to be done but sad that it’s now gone
I can’t tell how I feel and feeling everything all as one

Having nothing to say and wanting to share it all
I try to climb and I still fall

Exhausted and yet still awake
Memories and thoughts that I can’t shake

Happy to remember and hurting all the same
Doing good and still myself I blame

A contradiction that’s also fact
And so we know that life is that
`,
    tags: ["contradiction"],
    featured: false
  },
  {
    id: 2,
    title: "Cycle of life",
    date: "Unknown",
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
Will always be blessed to me.
`,
    tags: ["Cycle of Life", "life"],
    featured: false
  },
  {
    id: 3,
    title: "Emotions Spinning",
    date: "4/6/25",
    content: `Back and forth, up and down
These are my emotions as my head spins around
The time keeps ticking
So I’ll keep wishing
For something to make sense now
I want you to see how
It never seems
That my thoughts even mean a thing

My day gets brighter
And my mood feels lighter
I get to see
People who mean so much to me
But after all 
I still fall
And now I crash back down

No clue what I should do
I end up feeling all more blue
I still don’t cry
And that feels like a crime
They ask about my day
And I lie and say the same “ok”
An auto response I rarely mean

I still don’t know
Where I’ll go
I still will think
And write with ink
Never to decide
And I confide
That nothing makes sense to me
`,
    tags: ["emotions", "Emotions Spinning"],
    featured: true
  }
];

// If you need to filter these for the "Featured" carousel on the home page:
const featuredPoems = poems.filter(p => p.featured);
