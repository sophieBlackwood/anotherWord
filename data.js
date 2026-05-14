const author = {
  name: "Dallin Stahmann",
  blurb: "Dallin began writing poems a few years ago as a way of understanding the world. Since then, he has learned and grown and discovered a gift for words and for expressing difficult emotions through poems. This website serves as his way of sharing these poems with others who may benefit from them.",
  location: "Idaho"
};

const poems = [
  {
    id: 1,
    title: "Cycle of Life",
    date: "12/14/24",
    description: "The first poem that was made by Dallin was written after reflecting on his own experiences and those he shared with others. This helped him realize how the difficulty and hardships, though unpleasant, made the sweet moments in life better and allowed him to have an appreciation for those moments and those yet to come.",
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
    featured: false
  },
  {
    id: 2,
    title: "Shout into Nothing",
    date: "2/3/25",
    description: "",
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
    description: "",
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
    featured: false
  },
  // More -- NOT DALLIN STANDARDIZED
  {
    id: 4,
    title: "Contradiction",
    date: "6/7/25",
    description: "",
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
    tags: ["Contradiction", "knowing", "hurting"],
    featured: false
  },

   {
    id: 5,
    title: "Emotions Spinning",
    date: "4/6/25",
    description: "",
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
    tags: ["Emotions Spinning", "emotions", "spinning"],
    featured: false
  },
  
   {
    id: 6,
    title: "Flame",
    date: "5/1/25",
    description: "",
    content: `It’s burning bright
Throughout the night
A dancing light
The beautiful sight

The flame as it sways
Into the new day
Sharing its rays
And dancing in lovely ways

Grow higher and stronger
But let it stay longer
It’s kindled and grows
As it softly glows

Be grateful for the warm 
Don’t smother or swarm
A heat that provides
And doesn’t lie

This flame is of friendship
Of passion and of connection
I’m thankful for my flame
And for the person it frames
    `,
    tags: ["flame", "thankful", "grow", "friend"],
    featured: true
  },

   {
    id: 7,
    title: "Flaw",
    date: "6/27/25",
    description: "",
    content: `I know of one certain law
That every single thing has a flaw

Based on the facts it’s the only conclusion
And can say anything else would be delusion

Nobody is perfect and I’m no exception
I live my life and this is my perception

Wherever you look you can see light and dark
Both are well known and both have their parts

The smallest details are often most profound
But also the things that can bring something down

Despite the intention results can never be promised
But bring us what can make us feel rawest

We were never put to that impossible standard
So why do we push ourselves to act in that manner

A perfect circle can’t truly exist
But still it appears when we look at it

It’s ok to still hide them just be safe and ok
But remember we all have them at the end of the day

They can be reminders of so many things
So what do you chose for them to bring

I’m still not perfect even at accepting this message
As I’m still a person not proud of these exceptions

That’s another key to it even if small
That it’s an exception not all

Keep going, keep growing, keep all the scrawls
And remember the lesson to be who you are
    `,
    tags: ["flaw", "growth", "change", "imperfection"],
    featured: true
  },

   {
    id: 8,
    title: "Flowers all around",
    date: "4/2/25",
    description: "The image and idea of flowers are used in many different ways in this poem representing love, friendship, connection, and beauty, as well as the mixture of emotions that these themes hold and can bring.",
    content: `I see flowers all around, growing wherever there is room
Petals soaking in sunshine, beautiful all in bloom


Flowers being given in bouquets that smell so sweet
But I get no flowers, it stings me all too deep


They say love hurts and every rose has its thorns
I know it’s true though it’s my flower that scorns


My flowers all misshapen no beauty like the rest
I’d keep my flower hidden I know that would be best


But my flower grows and I give it another shot
I still never listen, and it pricks me and it mocks


I’ve received some flowers but they withered before I caught their gaze
The flowers they delivered I never noticed in the haze


I still love my flowers and wouldn’t change a thing
But my flowers never help me, I still softly sing


The beauty of the flowers yes it can truly suck
I try to grow new flowers but I guess I’m out of luck


Will my flowers call me when I’ve gone and moved away
I want to see these flowers bloom another day


Goodbye to my flowers though we know not for long
For the joy the flowers bring me can never truly be wrong


One day I’ll have my flowers though I know it won't be fast
But I’ll never leave these flowers forgotten in the past
    `,
    tags: ["flowers", "growth", "flowers all around", "change"],
    featured: false
  },

   {
    id: 9,
    title: "Foggy Path",
    date: "5/1/25",
    description: "",
    content: `Walking down a foggy path
I can’t see my way
Not sure where I’m going
But I’m going down it anyway

The path still continues 
It’s winding and long
That I know for certain
The other facts could be wrong

The path could go so many ways
There’s only one that I can take
So I’ll go my path and try to be brave
And remember to not be fake

As I go down the path
What’s behind grows more dim
But new things become clear
And I appreciate my win

Memories may fail
And fog may shroud
But I’d still be there
And push through that cloud

A foggy path only I know
Many others are like it
And all have the same haze
But each goes over a different pit

The path is imposing with not knowing
My journey still progressing
It’s hard to go but that's part of the road
I’ll continue changing and assessing 

My light on this path
It’s the same for all lovers
It’s the bonds I have made
And it’s the joy shared with others

Thank you to my light
That never will have a rift
And thank you for the path
This whole thing is a gift`,
    tags: ["Foggy Path", "foggy", "growth", "journey"],
    featured: false
  },

   {
    id: 10,
    title: "Frozen in Time",
    date: "3/28/25",
    description: "This poem focuses on the feeling of dread after being forgotten and left out, and how time seems to freeze, making it worse. It was written as a way to help process and escape that feeling.",
    content: `Frozen in time
As people pass by
My head is whirling
But the world keeps turning
I keep wishing
But still everything’s missing
Fighting an urge to cry
I feel like I slowly die
I’m not even sure as to why

I feel I can’t speak
I’m just too weak
Would they even hear
It’s all unclear
Would they listen
Or would that quicken
The pace at which I’m forgotten

I still can’t tell
But I feel unwell
I still don’t know
Should I just go
Stop please
Listen and breathe
Why did nobody see me`,
    tags: ["Frozen in Time", "frozen", "sadness"],
    featured: true
  },

   {
    id: 11,
    title: "Honest and Open",
    date: "4/3/25",
    description: "Written for a friend as a way of thanks and to appreciate the shared connection they have. This friend was actually the one who first introduced the author (Dallin) to poetry and got him to start writing.",
    content: `Honest and open, is a friendship that is true 
Honest and open, are words that connect me back to you 
Honest and open, even on the worst of days 
Honest and open, you help me through that haze 
Honest and open, we know we both truly care 
Honest and open, even if you’re not really there 
Honest and open, with life and trials beware 
Honest and open, you remind me to be hopeful and ignore the dread and swears 
Honest and open, I know we always will 
Honest and open, in moments that time stands still 
Honest and open, I never could forget 
Honest and open, you help me to be my best 
Honest and open, for the rest of time 
Honest and open, as we hear the clock bell chime 
Honest and open, I'll always stay this fond  
Honest and open, this truly unique bright bond 
Honest and open, even if we never once more meet 
Honest and open, those times that we both wept 
Honest and open, kept in my heart so dear 
Honest and open, I wish that you were here 
Honest and open, these words are all about you 
Honest and open, I hope you know that it’s true 
Honest and open, I say it once again 
Honest and open, I hope this friendship never ends 
Honest and open, even if we never see 
Honest and open, I still have you with me`,
    tags: ["Honest and Open", "friendship", "honest"],
    featured: true
  },
   {
    id: 12,
    title: "Is It?",
    date: "5/13/25",
    description: "",
    content: `Is it insanity
To never truly know
Is it crazy
That I’ll still go

Is it something
To be here with me
Is it nothing
That I will leave

Is it healthy
To never truly cry
Is it sickening 
When I say goodbye

Is it normal
To try and deny
Is it strange
To always ask why

Is it happy
To go find a new way
Is it sad
To leave you in May

Is it hello
If I have to leave
Is it goodbye
If maybe we’ll still get to see

Is it hope
To see my future
Is it gloom
To be leaving here sooner

Is it everything
That I’m leaving here and now
Is it nothing
These last years of bows

Is it precious 
To share it all
Is it worthless
If I choke and fall

Is it a question
That even should be asked
Is it a statement
I’m making of the past

Is it love
The things that I say
Is it hate
If I go and move away

Is it life
To share and always send
Is it death
To have things come to an end

Is it the cause
Of time always ticking
Is it the effect
Of a life worth living`,
    tags: ["Is it", "questioning", "life"],
    featured: false
  },

   {
    id: 13,
    title: "Luck",
    date: "6/15/25",
    description: "",
    content: `I guess it’s time to roll the dice
Every choice has a chance and price

I have done so much
But the truth is it’s often my luck

I’m not as good as I may appear
But it’s not something that others hear

Every time another round
And each one it all might come down 

I don’t know if I could build it again
Or just how different that it would be then

What people would I still have
And is that possible to stave

I don’t know the difference of fate
But I know I’m lucky at this rate

Every minute is a gamble
But I got through the preamble

I’m glad that you’re my lucky charm
And I’ll do my best to keep you from harm

I’ll keep you safe by my side
And hope our luck can turn the tide

It’s nothing truly like a war
But it’s not the same as it was before`,
    tags: ["luck", "fate", "change"],
    featured: false
  },

   {
    id: 14,
    title: "Mistake",
    date: "5/28/25",
    description: "",
    content: `I’ve made a mistake
And I don’t want to again
I’m afraid that I’ll break
Though I don’t know when

If I do the wrong thing
What do they see
If I go out and swing
Is that good for me

I don’t want to trip and stumble
So I stop and I freeze
And as the world turns to ruble
I can only please

I’d ask if that’s right
To do it for others
But I don’t want to blight
So I stay through the summers

I don’t go out of fear
I don’t stay out of hope
I get caught with a tear
And I just try to cope

I’ll try to learn
And become something better
And so I yearn
Of the day that might be never

I might keep slipping
And falling to the ground
I might keep missing
The best part of the sound

But I might do more
Go farther than I can imagine
Mistakes are a chore
But maybe the best that can happen`,
    tags: ["mistake", "growth", "change"],
    featured: false
  },

   {
    id: 15,
    title: "Moments in Memory",
    date: "5/31/25",
    description: "",
    content: `“What?
It could be many things
Fact
That binds us all like rings

Me
A person who you got to meet
Us
A group of people who formed bonds so sweet

You
A soul who was kind and fun
We
The individuals who all truly won

When
A time we didn’t know the other
Then
A moment we formed bonds in summer

Now
A time we experience things first hand
Soon
We realize it passes like wind blown sand

Next
A path we each get to take
Beyond
A time that gets left in the wake

Where
A place we all get to share
There
A picture of the best people anywhere

Why
A place to form connection
Became
Something stronger and it’s a gift from heaven

How
Is a question that doesn’t need to be asked
Because
Of a blessing and these things that will last`,
    tags: ["question", "moments in memory", "memory", "moment", "blessing"],
    featured: false
  },

   {
    id: 16,
    title: "Symbol",
    date: "5/7/25",
    description: "",
    content: `A symbol can be anything 
A picture, feeling or sign
They all represent something
And each can change with time

A shooting star cutting the sky
A silent moment in the night
A special reason to happily cry
A special thing and source of light

A squirrel that reminds me of moments
Where we both confide
A joke and a laugh filled with comments
A time where there’s nothing to hide

A class filled with people
Learning how to act
Where each and every person
Is part of my life as a fact

A drawing on a paper
A joke that will last
A photo on a camera
A thing to hold from the past

These all are symbols
Ones that have meaning only to me
That and the others
Who are the ones who helped me see

Thank you to those people
For the symbols I hold dear
And thank you to the reader
For letting me be here`,
    tags: ["symbol", "friendship", "memory", "friend"],
    featured: true
  },

   {
    id: 17,
    title: "Time Runs Out",
    date: "4/7/25",
    description: "",
    content: `Tick, here we go
Tick, I already know
Tick, look at the clock
Tick, it’s moved a lot
Tick, how much time?
Tick, it passes by
Tick, then once I need
Tick, it freezes me
Tick, once again
Tick, it’s in my head
Tick, an hour’s passed
Tick, then a day too fast
Tick, the week goes by
Tick, and the month flies
Tick, a year too much
Tick, please don’t rush
Tick, I want to slow
Tick, I can’t control
Tick, the speed of time
Tick, a hollow chime
Tick, I’ll make the most
Tick, of the time I host
    `,
    tags: ["time runs out", "time", "rush", "tick"],
    featured: false
  },

   {
    id: 18,
    title: "Unknown",
    date: "5/22/25",
    description: "",
    content: `I’m wide awake past midnight
As I’m writing here I sit
Wrestling my thoughts I’ll fight
But the truth still plainly hits

I’m terrified of what’s coming
They tell me that I’m free
But patterns were so comforting 
And now it’s up to me

How do I know
What I want or should go do
It’s all just a show
But I still have no clue

I’m put out in the open
Why is everyone so proud
I feel like I’m broken
I want to go back with the crowd

Fears all stem from something
It’s the one we all share
It’s what we call unknowing
And tell us to beware

My head won’t go quite
It’s dizzying and loud
I’m blinded by this light
In an ever looming cloud

I’m loosing all my passion
It’s gone and slipped away
The world is looking ashen
And it’s fading with the day

Why is it so confusing
When it makes sense to the rest
And now I’m stuck here choosing
I’m clearly far from the best

So I’m wide awake past midnight
As I’m writing here I sit
Wrestling my thoughts I’ll fight
But the truth still plainly hits
    `,
    tags: ["unknown", "confusion", "fear"],
    featured: false
  },

   {
    id: 19,
    title: "Unravel",
    date: "4/23/25",
    description: "",
    content: `I’m stuck in my unravel
Being pulled along by my string
No destination as I travel
And I let the movements bring

I say goodbye to those who knew me
I’m not the person who I was
I fall back into pieces
Of the man who fell from above

My friends all are precious 
A treasure that I share
I’ll never get to keep them
As I’m damaged from the ware

I’m not sure how I’m feeling
I’ve been numbed to the rest
I can’t say for certain
As I’m failing to this test

I fall apart completely
And pretend I wasn’t there
I try to shape the pieces
And be the one who shares

I can’t keep this going
an act that went too fast
My thread just snapped the needle
and I’ve come apart at last`,
    tags: ["unravel", "fall apart", "numb", "change"],
    featured: false
  },
  
  {
    id: 20,
    title: "Wishes",
    date: "6/9/25",
    description: "",
    content: `I’m making a wish
For some many things
Part is just hopes for this
And part is a dream as it rings

I wish I were something
Someone talented and strong
A person others would look to
And they would see no wrong

I wish I were better
In so many different ways
That I didn’t make mistakes and could do things over
Or simply get out of this haze

I wish I were more attractive
Not for someone else
But just that I can be self conscious
A fact I know too well

I wish I had more time
To do the things I want
Time to spend with others
But it still would always haunt

I wish I had an answer
To every question I may ask
A silent thought and wonder
Or one that is a task

I wish a thousand wishes
And I wish a thousand more
But the question of my wish is
Who do I wish it for

Is it good to wish for someone
Is it selfish if it’s not
Or is it good to be honest
And be happy with what I got`,
    tags: ["wish", "hope", "change", "answers"],
    featured: false
  },

  {
    id: 21,
    title: "Bittersweet",
    date: "7/14/25",
    description: "",
    content: `Nostalgia is a beautiful liar
    It's a promise of the past that can't be recaptured
    An exact picture that is always different
    And I can't tell if it's enough the way it is
    
    Nothing is wrong now or then
    But seeing how it was makes now seem skewed
    Impossible to be happy but no reason to be sad
    The memories are a joy and a pain
    
    An experience that can't be replicated
    A time stuck in the past
    A taste no longer there
    A sound that warms and chills
    
    Getting stuck in limbo of how I feel
    No way to know how else things could've turned out
    Accepting the fact but still wondering regardless
    And preventing further progress
    
    It feels like a gentle love in many ways
    And it stings being without it
    The bittersweet emotion
    That is and isn't mine`,
    tags: ["Bittersweet", "emotion", "change" ],
    featured: false
  },

    {
    id: 22,
    title: "Lightning",
    date: "7/23/25",
    description: "",
    content: `I’m wishing I could do things again
To relive the good and to change the bad
To have things be perfect
And make them the way they could have

I want to go back
To the memories and moments
To keep them forever
All the ideal components

I don’t know what’s next but I know what I had
I want to keep that shine, that radiance, that sparkle
But that makes it harder to go
And leave for tomorrow

I can’t make lightning strike twice or go back to that time
So I’m cherrishing the one flash in all brilliance and glory
And though it’s fading so fast
That bright light is my story`,
    tags: ["Lightning", "memories", "story"],
    featured: false
  },
  {
    id: 23,
    title: "Ebb and Flow",
    date: "9/25/25",
    description: "This poem reflects on previous thoughts and writings that had been made and the fears and doubts of accepting your own positive messages when in a new situation. The author now looks back at these fears and knows how natural those concerns are, but how those past connections and experiences were still valuable and strong.",
    content: `Look at time go
Like an ebb and flow
So much to do
So little to say

Know and meet so many people
But none are really friends 
Assignments and grades
Then time is gone and it’s another day

There’s structure and order
But between it is a mess thanks to me
I still look at the stars
But have no one to share that moment with

In a sea of thousands I’m just one
Too hard to pick out and notice
Too friends I was a part not a whole
When all can replace then I’m just the waste

I hold on to something
Even if it’s basically nothing
Left with no emotion or reason
I guess that means it was also taken away`,
    tags: ["Ebb and Flow", "change", "loss"],
    featured: false
  },

   {
    id: 24,
    title: "Stars in the Night",
    date: "8/13/25",
    description: "",
    content: `Some of the best moments
Happen late in the night
When connections are strengthened
And everything is right

We talked for many hours
About life and moments and days
Brought up sore topics
But didn’t turn the other way

We listened and we realized
That nothing had to change
And brought us closer together
As we grow in exchange

See a shooting star
Make a wish that we share
And know that we are happy
And that we both care

Late night talks are my favorite memories 
A gentle glowing light
Irreplaceable sparkling gemstones
Filled with stars in the night`,
    tags: ["Stars in the Night", "Night", "memories", "friendship", "happiness"],
    featured: true
  },

   {
    id: 25,
    title: "Thought I Knew",
    date: "9/2/25",
    description: "",
    content: `I thought I knew What to do
I thought I knew about you
I thought nothing would have to change
I thought that we could stay the same
I thought that I had a plan
I thought I was a better man
But I’m not what I thought
I’m not someone who has a lot
I’m not someone who changed the world
Not even someone that you would care
I’m not sure of almost anything
I just wanted to share time with you
But now I feel like a note on a page
Or something small that’s in the way
Told to go and move away
And leave the things that made me sane
I thought I knew how this worked
So I’ll just leave here with these words
Maybe I’ll understand 
But I thought I knew and it went bad`,
    tags: ["Thought I knew", "mistake", "loss", "burden"],
    featured: false
  },

   {
    id: 26,
    title: "Symphony",
    date: "9/12/25",
    description: "",
    content: `Life goes on at a steady tempo
In seconds, minutes, hours, days, weeks, months and years
You know the rhythm doesn’t change
And yet the song won’t stay the same

In the background the gentle buzz
And you know how it was
The song plays on wherever
And can tie memories and emotions together

A melody for each their own
With a perfect tone
A piece being written and created
That is never deleted or out dated

A song made up of many parts
That will touch countless hearts
Even if we don’t fully listen
There it will still softly glisten

Even as the curtains fall
And no more voices call
Despite all the strife
That’s what make up the symphony of a life`,
    tags: ["symphony", "beauty", "melody", "change"],
    featured: false
  },

   {
    id: 27,
    title: "Steps",
    date: "1/1/01",
    description: "",
    content: `A child doesn’t know the steps they will take
I don’t know the mistakes I will make
And now I’m going in blind
And I can’t seem to make up my mind

Time to take the reins
And break out of the chains
No safety net to catch
And no person to call a match

I’ve come so far
And I don’t know where we are
I’ve made a lot of progress
And still have a lot of stress

Through ups and downs
I’ll look around
But how could I know
The places I’ll go

And I can’t imagine
The things that will happen
But I’ll start the journey and leave the past marks
And be grateful to have had a spot in your hearts`,
    tags: ["steps", "growth", "memories", "journey", "change"],
    featured: false
  },

   {
    id: 28,
    title: "But I Don’t",
    date: "3/9/2026",
    description: "",
    content: `It's hard to know what to do and where to go
It’s hard to push through and continue the show
It makes wish I had more of a clue
I’m trying so hard to know what to do
But I don’t 

Look around and say it a couple dozen of times
Maybe if you do it won’t feel like a lie
Being wrong still feels like a crime
Pretended to know your personal truth and make it fine
But I don’t

Beauty all around and the skies are so blue
Love it all so much and after the colors seem few
I make some progress then am told I’m a kid
I wish I had the answers that no one else did
But I don’t

Lose sense of progress and track of the time
After pushing through it’s the end of the line
Time to fix the pieces but can’t tell where they fit
Everyone seems to make it over the pit
But I don’t

Have so many people and know that kind of love
Say it lasts forever but it ends with a shove
Fears and worries seem so real
Try to hide it and cover it in a seal
But I don’t 

Things all seemed so simple, things that I thought were planned
But in the end it’s hard to understand
But I don’t
I don’t know`,
    tags: ["But I don't", "know", "confusion"],
    featured: false
  },

   {
    id: 29,
    title: "Poem of a Poem",
    date: "3/10/2026",
    description: "",
    content: `Pen, paper, write and sign
Do it again and do it fine
Nothing special and nothing such
Yet something I do all so much

A thought, a process, a rough draft
Then can’t think of anything after that
The words flow and then just stop
In a way to process the mental slop

Memories, emotions, and feelings still
Sometimes forced or against my will
Overwhelm and calm again
Try to go back to then

Learn, teach, end it all
Do it to prevent the fall
Power to create, power to destroy
This is the method I choose to employ 

Hello, goodbye, a simple line
What have I done with all my time
I sit and stare and lay it bare
As I think aloud and choose to share

Think, trace, go back and erase
Another mistake to hide my face 
Would anyone care if I chose to share
My poem of poems and its message today`,
    tags: ["Poem of a Poem", "writing", "emotion"],
    featured: false
  },

   {
    id: 30,
    title: "Beauty in the Burden",
    date: "3/20/2026",
    description: "",
    content: `What makes a struggle worth talking about?
How can you succeed and push through doubt?
Get past the burden, get past the pain
Do what you can to remain sane

Each burden is different, no body’s the same
This brings beauty like glistening rain
A persons resolve, commitment and passion
Can push them beyond what they could have imagined

No one said it would be easy and when is it ever?
Despite our preferences we don’t have that power
You can do great things and it’s ok to cry
It doesn’t need to be done on the first try

Imperfections bring value to art
They show humanity and the creators heart
The struggles and burdens may seem to twist what is true
But if no one else says it I have faith in you`,
    tags: ["Beauty in the Burden", "help", "hope"],
    featured: false
  },

  {
    id: 31,
    title: "Her Poem",
    date: "3/23/2026",
    description: "Written for a friend (Brooklyn) when she was at a rough point in life, this poem is a reminder that life isn’t always easy but you don’t have to approach it alone.",
    content: `Her name isn’t Atlas yet she’s burdened with the world
And the heaviest burden seems to be her thoughts and her words

Pressure from others and pressure from herself it’s all so tough
And though pressure can make diamonds I don’t need a diamond in the rough

I can’t say that it will be better but I’ll still offer hope
If it’s any better I can try to help you cope

Beauty in the rain
Can’t wash away the pain

But beyond any other fact
Her name is Brooklyn Poulson and I wouldn’t trade that

We may not know for how long we are here
But until our time is over I’ll hold that connection dear`,
    tags: ["Her Poem", "atlas", "friendship"],
    featured: false
  },

  {
    id: 32,
    title: "Pieces of Emotion",
    date: "4/5/26",
    description: "",
    content: `Scattered about are my many emotions
Tossed and thrown due to commotion

But I’ve found some pieces and it’s providing some comfort

Pieces might not make a whole feeling
And often times the thoughts are still reeling

Pieces that are found with my friends. 
Each one holding a part of my soul within

Shinning lights high in the night and the dark edges gone from my sight

A poem that rhymes and a dozen that don’t 
What really matters is the message and note

A page full of thoughts and messed up words
What else is better than to be with those who still know

Though I’m in pieces and I’m still always lost
The fact you hold those pieces means I’ll always be close

Despite any distance, feeling, or time
Never forget that I’ll be close by

I still feel despite the confusion
And I’m happy to have reached that conclusion`,
    tags: ["Pieces of Emotion", "commotion",  "comfort"],
    featured: false
  },

   {
    id: 33,
    title: "Lessons of Reflections",
    date: "4/16/26",
    description: "",
    content: `Look in the mirror and how do you chose?
One day is over the next pays its dues

We all have answers yet questions remain
And what comes next is never the same

Each song is a poem heartfelt and loud
So so sing each note off key and proud

Looking back what do you see
Countless people standing next to me

A mixture of feelings starts to arise
As they are mixed with the sound of different goodbyes

Reflections holding my failures, regrets, and mistakes
But also hold my growth, lessons, and strengths

Reflection is difficult and feels like a danger
When often we look and we see only a stranger

Despite the fact my reflection is never perfect
I’ll find something that’s good whenever I check`,
    tags: ["Lessons of Reflections", "beauty", "individuality"],
    featured: true
  },

  {
    id: 34,
    title: "Rehash",
    date: "4/19/26",
    description: "",
    content: `Share the same message, mean the same thing
Does it lower the impact or cause it to sting?

Repeat the value, lose the context
Does it get through the negative comments?

No new patters and no new thoughts
As it’s done over again and lowers its true cost

It’s the same expression, the same mistaken thought
If that’s the problem how do we get back what was lost?

Remake the remake lose the soul
With so little emotion can we still know?

If it still has meaning then it still has worth
But is it possible to know if it has reached that goal?

Will the art mean something if it just repeats itself
In a rehash of a rehash and stagnation of the growth`,
    tags: ["Rehash", "message", "change"],
    featured: false
  },

   {
    id: 34,
    title: "Dancing with a Knife",
    date: "4/19/26",
     description: "",
    content: `Dancing on the edge is such a pretty sight
But where will it fall if its cut by the knife

Cut into pieces as the world begins to shake
And leaves the scattered parts in every little place

Shredded are the remains after each perfect motion
Leaving scars behind but hidden beyond others sight

A dancer so beautiful but do they even see
As they dance they’re cut just like you and me

Dancing through life teetering on the edge
None of us see unless we loose our heads

Spilt down the middle of insanity and sane
Continue the dance to keep the thoughts away

It might just be an expression but oh it’s one so true
But please don’t let it take me away from you

An edge made to divide and separate the rest
This is my humble plight to save us from this mess

No dancer should endure those pains that it brings
But changing that’s not easy as it may first seem

The dance can’t be stopped or the blade sinks deeper
And the result would be crimson as its cut in many different meters

We can work on it together change this rusted blade
And as the dance continues the rest will slowly fade

Change the platform to one that prevents the needless pain
In this dance called life we perform and connections change the stage

As lives are opened and new blades are engaged
We all can help each other put the knife away`,
    tags: ['Dancing with a Knife', 'pain', 'scars'],
    featured: false
  },
];

// Helper for the homepage logic
const featuredPoems = poems.filter(p => p.featured);
