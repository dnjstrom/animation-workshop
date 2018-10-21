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

Let's take a moment to appreciate just how fast computers are. Whether you are reading this on a computer or a phone it's screen is likely to refresh at a rate of 60 times per second - allowing each refresh a diminuitive ~16 milliseconds to calculate and perform its updates. Even at the break-neck speeds of modern computing it's still a pretty tiny needle to thread.

As developers it's our job to help the computer minimize the effort involved in updating the screen, and this is much easier to do if you understand the steps involved.

### Step 1: Script

### Step 2: Styles

### Step 3: Layout

### Step 4: Paint

### Step 5: Composite

Additional reading:

1. https://www.nngroup.com/articles/animation-usability/
2. https://developers.google.com/web/fundamentals/design-and-ux/animations/
3. https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
4. https://twitter.com/szynszyliszys/status/1037668518999846912
