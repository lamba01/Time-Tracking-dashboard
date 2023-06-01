# Time-Tracking-dashboard
# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Links

- Solution URL: (https://github.com/lamba01/Time-Tracking-dashboard)
- Live Site URL: (https://time-trackingdash.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- JSON data


### What I learned
To see how you can add code snippets, see below:

```js
const localJsonFile = "data.json";
window.addEventListener("DOMContentLoaded", () => {
  let data = null;
  // Make fetch request to local.json file
  fetch(localJsonFile)
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;
```


### Continued development
I intend to work on more JSON data as time goes on to help build a solid foundation in my API integration learning

### Useful resources

- [Example resource 1]((https://www.youtube.com/watch?v=C3dfjyft_m4)) - This is an amazing article which helped me finally understand how to display my JSON data in my webpage. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@lamba01](https://www.frontendmentor.io/profile/lamba01)
- Twitter - [@lambacodes](https://www.twitter.com/lambacodes)


## Acknowledgments

I thank myself for not giving up on my career as the future is bright!
