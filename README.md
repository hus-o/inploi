## How To Run

- Clone repo
- Go to project folder - `cd inploi`
- Run `npm run dev` in terminal

## Deployment

- https://inploi.vercel.app/
    - Known issue with vercel & Lottie (in notes) - had to disable `swcMinify` 

## Approach & Design Choices

- I wanted something simple, responsive and a bit creative without impeding UX
- I made an initial mockup of what I wanted it to look like: [here](https://www.figma.com/file/MhxwBDUeO7jem7VxzXxKMn/Untitled?node-id=0:1&t=KIY2uV8NIy6kv74T-1)
    - I sadly didn't have enough time to implement the filters section, would be a TODO with more time
    - I also strayed from the animation of the card, from being a height animation, expanding & changing colour to the description sliding in from the right.
    - I decided against a load more button as infinite scroll seems more user friendly - if I'm a user scrolling down I clearly want to see more - since there is no footer - otherwise I would opt against this

## Extra notes

- It was my first time using algolia & styled components, so this took a fair bit of time to fiddle around with types, docs and structuring things.
- I opted to have everything on single page, no extra routes. Initially clicking home would wipe searches and animate search bar down but, running a hard reload on window just felt cleaner.
- To make things a bit more 'fancy' I used framer motion to animate a bunch of things. With more time I would further fine-tune the animations and go for some more complex ones.
- I've committed directly to main branch by choice, for single concentrated tasks I assume it as a feature.
- Post deployment, I've noticed a known issue with Vercel & Lottie (the svg animation library), had to disable new default swcMinify - with more time I would provide a fallback
