# Web Animation and the Render Pipeline

Being a student of both design and development it sort of makes sense that I would find the art of web animation so fascinating. As a discipline right on the border between the two, the freedom in shaping an intentful motion has to be tempered with knowledge of the browsers' abilities and limitations. The conflict can feel frustrating to negotiate at times but also provides an engaging puzzle where the end result is likely not what was imagined in the beginning but has assumed a certain life of its own.

Or, perhaps all of that is just a vain attempt to rationalize the simple joy of making things go "swooosh" on your screen.

Whatever the case, animations are a lot of fun to work with and can, when designed and implemented with care, enhance the user experience significantly. All too often though developers either seem to shirk away from implementing animations because it's not clear how to do it well, or they might completely disregard any thought to performance.

In this article, we'll explore the technical considerations imposed by our medium - the browser - in an attempt to demystify why some animations work better than others. More specifically how web browsers render things to the screen and what this means for your animations.

So grab your hot beverage of choice, and prepare for a crash course of the rendering pipeline.

## Render pipeline

```
 -> Script -> Styles -> Layout -> Paint -> Composite -
|                                                     |
 -----------------------------------------------------
```

Let's take a moment to appreciate just how fast computers are. Whether you are reading this on a computer or a phone it's screen is likely refreshing at a rate of 60 times per second - allowing each refresh a diminutive ~16 milliseconds to calculate and perform its updates. Any longer than that and you end up with janky movement. Even at the breakneck speeds of modern computing it's still a pretty tiny needle to thread.

As developers it's our job to help the computer minimize the effort involved in updating the screen, and this is much easier to do if you understand the steps involved.

### STEP 1: Script

The first thing that happens in each cycle is that any pending javascript is run. Anything really can happen at this point - elements can be added or removed from the DOM, styles or classes modified and element states can change (e.g. hover). Updates due to CSS Animations or transitions are also part of this stage.

The overwhelming freedom at this point makes it difficult for the computer to automatically optimize the code, however, depending on the situation there are a lot of optimizations you can do as a developer:

###### Avoid heavy computations

Maybe you can make sure the collection of posts are pre-sorted on the server.

###### Offload heavy computations

Any long-running calculations that can't be avoided should be performed in a separate thread to avoid slowing down rendering.

###### Avoid unnecessary DOM modifications

Using a shadow DOM can help minimize the necessary changes.

###### Prefer CSS Animations

Their updates are automatically run on a separate thread. Next up in preference should be the Web Animation API and lastly reserve animating with regular javascript as a last resort (if at all).

###### Avoid blocking javascript

The typical example would be when doing server requests or reading files from disk. Make sure to use callbacks or promises rather than synchronously executing functions.

###### Use `requestAnimationFrame`

To limit frequent updates to a reasonable rate for the given device.

### STEP 2: Styles

With all dynamic updates calculated it's time to inspect our stylesheets to determine what styles should be applied to what elements. This task is much more well defined than the Script stage which means the browser can be quite smart about how to optimize it. Still, there are things we can do to help it along.

#### Minimize the number of rules

Many sites serve unnecessarily big style sheets with styles that might not be relevant to the current page or used at all.

#### Avoid universal rules

Rules like `*` or `[type="url"]` has to be checked for all elements which can add up to a hefty performance cost.

#### Use classes

While a rule like `li:nth-child(odd)` has a certain elegance, from a performance standpoint it'd make more sense to just add a class `.odd-row` to all odd rows.

Preferably rules should be written so it is quick to determine if it **does not** apply to a given element. Rules are matched right to left, so a rule like `div .button` is more performant than `.button div` since with the latter the `.button` parent has to be checked for all `div` elements, but in the former the `div` parent only has to be checked for `.button` class elements - of which there are likely far fewer.

### STEP 3: Layout

So far we've mostly sorted out what elements there are and their corresponding styles, but at this stage we are ready to start translating this list into a more visual representation. At this point we're ready to figure out what element goes where on the page. A lot of style properties can affect how an element is laid out in the page - `position`, `width`, `margin` and `display` are just some of these. Moreover, many of these also affect the layout of elements further down the page, such as increasing an element's height. This means that changes to these properties tend to be costly and should really be avoided whenever possible. Try instead to implement your motion using only Composite-level properties that are much more efficient (more on this later).

### STEP 4: Paint

Having determined where each element goes on the page the browser starts painting in the content of each block. This process is generally quite straight-forward but it's good to be aware that things with a blur will be a bit more demanding to paint. If you have part of the block changing more often than others it might also prove worthwhile to ensure only that specific part is repainted on each update. This can be achieved by promoting an element to its own layer. By specifying `will-change: transform` (or `transform: translateZ(0)` for older browsers) the element gets extracted onto a separate layer where it can be modified separately from the rest of the document. If you've ever worked with graphics software this should feel very familiar. Take note though that each layer incurs a cost in terms of memory and computational overhead so make sure the extraction actually makes your animation more performant overall.

### STEP 5: Composite

The last step of the rendering process is to combine the different layers into a single view for the screen, optionally with some manipulation of the layers first. The operations available at this step are generally the most performant ones since they can be performed at blazing speeds on the GPU. These properties are `transform` and `opacity` but ensure the element is already on its own layer (using `will-change`). Counter-intuitively it's more performant to rotate an element in 3D than it is to increase it's margin. Again though, make sure the benefit of making another layer outweighs the cost.

## Conclusions

As we've seen, each step in the pipeline has implications for what choices to make when animating but also necessitates updates in each subsequent step of the pipeline. As such it's generally better to try and keep changes towards the end of the pipeline in order to avoid cascading updates.

Having more familiarity with the five steps of the render pipeline, my hope is that exploring web animations feels more approachable and joyful to you in the future. The guidelines above provide a framework for confident experimentation where ultimately the end result turns out delightful in both aesthetics and performance.

Finally, while this article doesn't really touch on tooling, anytime you're working with performance it's absolutely crucial to measure and validate the optimizations applied, and there's a bunch of tooling to help you. Check out the recommended reading for more on that and other brilliant resources.

#### Recommended reading

- The venerable Nielsen Norman Group has compiled a lot of interesting data on how to use animation to support the user experience in this article on animation usability.
  - https://www.nngroup.com/articles/animation-usability/
- Google has written an abundance of great articles on the topic of animation ranging from UX to performance and tooling.
  - https://developers.google.com/web/fundamentals/design-and-ux/animations/
  - https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
  - https://developers.google.com/web/fundamentals/performance/rendering/
- Anna Migas amazing talk on animation performance at Nordic.js was the main inspiration that got me writing this article.
  - https://twitter.com/szynszyliszys/status/1037668518999846912
