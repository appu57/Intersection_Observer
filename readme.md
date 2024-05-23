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





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lazy Load Example</title>
</head>
<body>
    <h1>Lazy Load Example</h1>
    <!-- Placeholder image that will be lazy-loaded -->
    <img src="placeholder.jpg" data-src="actual-image.jpg" alt="Image" class="lazyload">
    
    <script>
        // Run this code when the DOM is fully loaded
        document.addEventListener("DOMContentLoaded", function() {
            // Get all images with the class 'lazyload'
            let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
            
            // Check if IntersectionObserver is supported by the browser
            if ("IntersectionObserver" in window) {
                // Create a new IntersectionObserver instance
                let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    // Loop through each entry (observed element)
                    entries.forEach(function(entry) {
                        // Check if the entry is intersecting (visible in the viewport)
                        if (entry.isIntersecting) {
                            // Get the target element (the image)
                            let lazyImage = entry.target;
                            // Set the src attribute to the actual image source
                            lazyImage.src = lazyImage.dataset.src;
                            // Remove the 'lazyload' class
                            lazyImage.classList.remove("lazyload");
                            // Stop observing this element
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });

                // Observe each lazy image
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }
        });
    </script>
</body>
</html>
