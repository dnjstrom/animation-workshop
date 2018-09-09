# Presentation

## Resting page

- "The illusion of life" - 12 principles of animation, playing in the bacground

## Title page

- Working title: "(an intro to) Animating the Web"
- name, client role

## Agenda

- talking points
- schedule (including break and workshop)
- What this talk is not!

## Why animate?

- pros and cons

Base assumption is that given that you animate responsibly with due considerations for the risks and downsides animations can improve accessibility, interaction design and user expericnce in general by imbuing your app with personality and delighting the user.

- Any research on the pros/cons of animation? \*
- Google Consumer Surveys determined that the most wanted feature of a news app was _smooth_ navigation.

Now we'll switch focus to the technical side of things.

- https://paul.kinlan.me/what-news-readers-want/

## Ways of implementing animations

1. CSS animation
2. Web Animation API
3. Vanilla JS (requestAnimationFrame)

Try to use the technique with the minimal footprint for your use case (top to bottom)

## CSS Animation

- Declarative way of specifying animations using `animate` or `transition`, usually along with a css class toggle.
- Runs on a separate thread from your javascript (🤩)
- Take care to vendor-prefix everything
- Keyframes term from back in the day, denotes "key" frames which gives a sense of the whole animation.
- You can detect when animations finish in js using the `transitionend` event.

- https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript

### Easing

- Choose ease-out animations for UI elements.
- Avoid ease-in or ease-in-out animations unless you can keep them short; they tend to feel sluggish to end users.
- <insert a bunch of graphs here>
- If the pre-defined easings aren't suitable for your situation, you can define your own Bézier curve
- For bounce or elastic easings, you'll have to use js.

## Web Animation API

- Imperative control of animation
- Only applies presentation changes during animation, so you'll have to add the final styles manually after the animation has finished.
- The Animation API is very new.
  - Supported in Chrome and Opera, soon Firefox
  - Polyfills exists
- Compared with CSS animation you have much more control (pause, change, etc)

* https://drafts.csswg.org/web-animations/
* https://github.com/web-animations/web-animations-js

## Vanilla JS

- requestAnimationFrame
  -- Ensures your js is run at the beginning of a frame (setTimeout might fire right before the end) (jquery <3 (2016) uses setTimeout!)

- jQuery
- GreenSock

## How does a browser render stuff?

- The rendering pipeline (later/less more efficient)

js -> style -> layout -> paint -> composite

- https://developers.google.com/web/fundamentals/performance/rendering/
- https://aerotwist.com/blog/the-anatomy-of-a-frame/

### JS

### Style

### Layout

- If necessary, make sure the layout scope is small
- Flexbox is generally more performant than float
- Be mindful when reading and writing layout changes (read first & batch)

- https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing

### Paint

- Often the most expensive part of the pipeline
- "Paint rectangles" and "Paint profiler" in Chrome debugger
- Some things are more expensive (i.e. blur) than others
  - reduce paint complexity during animation?

### Composite

## Performance

- "Premature optimization is the root of all evil" - Donald Knuth
- Try and maintain 60 fps
  - Why? Because that's the refresh rate of most screens
- `transform` and `opacity` are the most performant (gpu accelerated)
- Parallax effects forces the entire screen to be repainted - avoid
- Each frame has a budget of about 16ms (1 second / 60 fps = 16.66ms).
- FLIP technique - calculate start and end values in click and animation start window of 100ms.

- https://csstriggers.com/
- https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
- http://jankfree.org/ **\*\*\*\***
- https://eu.udacity.com/course/browser-rendering-optimization--ud860
- https://aerotwist.com/blog/flip-your-animations/

### `will-change`

- Optimizes for change ahead of time by putting the the thing on a separate layer `will-change: transform;`.
- Currently supported in Chrome, Firefox and Opera
- Workaround for Safari and Mobile Safari `transform: translateZ(0);`
- Don't overuse as it can lead to other performance issues - always profile first

* https://drafts.csswg.org/css-will-change/

### DevTools

- FPS-meter
- flame chart
- layers panel
- performance limiting!

* https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/

## Further reading

- https://en.wikipedia.org/wiki/12_basic_principles_of_animation
  - https://vimeo.com/93206523
- https://developers.google.com/web/fundamentals/performance/rail
- http://perf.rocks/tools/
