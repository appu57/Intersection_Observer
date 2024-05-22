Sometimes in a website , we see bundle size is huge . We can reduce the size of those bundle using
1. Dynamic Import
2. Bundle Splitting
3. Optimize loading third-parties
4. Import On Interaction

We can reduce bundle size by splitting the javascript code to smaller blocks , remove unused imports , optimise assets folder which has HD or unoptimised image .
Or by importing bundles only when required 

document.querySelectorAll('#myForm input').addEventListener('blur', async () => {

  const { validateForm } = await import('/validate-form.mjs'); //importing only when required
 
  validateForm();
}, { once: true });

We can improve web loading performance by using Intersection Observer. Suppose we have 1000 images in a website and which can lead to infinite scrolling . Loading 1000 images initially when UI comes up can consume time and memory . Instead we can load images that can fit to the screen and is visible to the user when user scrolls , we can load next few set of images that fits the viewport(part of screen that is visible to user) . We can use Intersection Observer to set a pivot(or a a marker) to indicate a browser that when a user scrolls till that pivot point call a function and load next set of images till next pivot point