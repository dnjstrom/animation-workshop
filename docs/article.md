# Working title: Snappy web animations

Being a student of both design and development it sort of makes sense that I would find the art of web animation so facinating. As a dicipline right on the border between the two, the freedom in shaping an intentful motion has to be tempered with knowledge of the browsers' abilities and limitations. The conflict can feel frustrating to negotiate at times but also provides an engaging puzzle where the end result is likely not what was imagined in the beginning but which has assumed a certain life of its own.

Or, perhaps all of that is just a vain attempt to rationalize the simple joy of making things go "swooosh" on your screen.

Whatever the case, animations are a lot of fun to work with and can, when designed and implemented with care, enhance the user experience significantly. While how to design useful animations is increadibly important, this article will rather focus on some technical considerations imposed by our medium. More specifically how web browsers render things to the screen and what this means for your animations.

So, grab your hot beverage of choice and prepare for a crash course of the rendering pipeline.

## Rendering pipeline

```
-> Script -> Styles -> Layout -> Paint -> Composite -
|                                                    |
 ----------------------------------------------------
```

Let's take a moment to appreciate just how fast computers are. Whether you are reading this on a computer or a phone it's screen is likely refreshing at a rate of 60 times per second - allowing each refresh a diminuitive ~16 milliseconds to calculate and perform its updates. Any longer than that and you end up with janky movement. Even at the break-neck speeds of modern computing it's still a pretty tiny needle to thread.

As developers it's our job to help the computer minimize the effort involved in updating the screen, and this is much easier to do if you understand the steps involved.

### Step 1: Script

The first thing that happens in each cycle is that any pending javascript is run. Anything really can happen at this point - elements can be added or removed from the DOM, styles or classes modified and element states can change (e.g. hover). Updates due to CSS Animations or transitions are also part of this stage.

The overwhelming freedom at this point makes it difficult for the computer to automatically optimize the code, however, depending on the situation there are a lot of optimizations you can do as a developer:

1. Avoid heavy computations. Maybe you can make sure the collection of posts are pre-sorted on the server.
1. Offload heavy computations. Any long-running calculations that can't be avoided should be performed in a separate thread to avoid slowing down rendering.
1. Avoid unecessary DOM modifications. Using a shadow DOM can help minimize the necessary changes.
1. Prefer CSS Animations. Their updates are automatically run on a separate thread. Next up in preference should be the Web Animation API and lastly reserve animating in regular javascript as a last resort (if at all).
1. Avoid blocking javascript. The typical example would be server requests or reading files from disk. Make sure to use callbacks or promises.

### Step 2: Styles

With all dynamic updates calculated it's time to inspect our stylesheets to determine what styles should be applied to what elements.

### Step 3: Layout

### Step 4: Paint

### Step 5: Composite

Additional reading:

1. https://www.nngroup.com/articles/animation-usability/
2. https://developers.google.com/web/fundamentals/design-and-ux/animations/
3. https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
4. https://twitter.com/szynszyliszys/status/1037668518999846912
5. https://developers.google.com/web/fundamentals/performance/rendering/
