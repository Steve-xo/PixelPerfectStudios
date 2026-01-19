The PixelPerfect Studios website is a platform showcasing photography, videography, and post-production services. We make use of HTML, CSS, and JavaScript in this site. The HTML file includes the website’s structure, navigation, sections (Home, About Us, Gallery, Services, Contact Us), and integrated JavaScript functionality for interactive elements and CSS for styling. We make use of HTML, CSS, and JavaScript in this site.

**HTML Setup.**
1.	The document begins with the <DOCTYPE html> which informs the browser that it’s a HTML5 document. 
2.	We included the <html lang=”en”> tag to specify that the content is in English.
3.	In the <head> tags we added:
•	<meta charset=”UTF-8”> that ensures that text displays correctly across devices using UTF-8 encoding
•	<meta name="viewport" content="width=device-width, initial-scale=1.0">  and it allows the website to adjust to various screen sizes even smaller screens like mobile phones 
•	The <title> PixelPerfect Studios for the title of the page visible on the browser tab.
•	<link rel="stylesheet" href="Webstyles.css"> links an external CSS file, Webstyles.css, to style the HTML elements.
4.	In the <body> tags we added:
•	The <nav> tag which allows us to create the navigation bar for the website with two menus:
a)	.sidebar: Is the sidebar menu for mobile devices. Users can toggle it on and off by clicking a close button or the dropdown icon. We chose to use the sidebar to be used on smaller screens because the main navigation bar is wider and it would not have been presentable because some features would not be visible on smaller screens.
b)	Main navigation links are only visible on larger screens due to the .hideonmobile class which we set to hide in mobile phones and not be confused with the sidebar.
•	We used SVGs icons provide interactive elements for the close and dropdown in the sidebar
•	We then created the five sections: Home, About Us, Gallery, Services, Contacts.

i)	In the Home section we used the “id=home”:
•	It serves as an introduction to the website. The headings (h1) for the Studio name and (h2) to introduce the studio, and a "Book Now" button directs the user to book for a service.
ii)	In the About Us section we used the “id=about”:
•	Displays information about the studio and what we do with an image (<img class="aboutimg">)
iii)	In the Gallery section we used the “id=gallery”:
•	Displays a collection of images. Images are grouped into "slides" with slide1 as the class for each image element. The images are some of our works set there for potential clients to be able to see what we do as a studio. There are nine images in 3 columns with 3 images each on larger screens.
iv)	In the Services section we used the “id=services”:
•	Lists and briefly explains the services offered. Each service (.service) includes a visual representation and a caption.
v)	In the Contact Us section we used the “id=contact”:
•	Provides contact options, including email and phone links, and a form for users to provide their contact information for us to get in touch with them when they make an inquiry or book a service.
•	In the form, we added an app script link that sends the details entered in the form to a google sheet file after submit is clicked. A confirmation message is also sent to give feedback to the user.
5.	At the bottom of the html document, we have the <footer> tag and the JavaScript link: <script src="Webscript.js">


**CSS Styling.**

For styles we have:
1.	General Styles: This are the styles to be applied though the entire document.
•	*: This is the universal selector that removes the default margins and padding from all elements, ensuring a consistent base style.
•	The html style is set to smooth scroll behaviour for the page, enabling smooth transitions during navigating.
•	The body style defines the minimum height, sets the background image, fixed background attachment, and a flex-column layout. It uses a fallback font stack with Segoe UI as primary.
•	The main style, we configured to flexibly expand in height to cover available space around the pages.

2.	Navigation: This are the styles we applied on the navigation bar.
•	We have nav, where we set a light background color and a shadow to distinguish it from the background.
•	In the nav ul, we created a flex container to align the navigation items on the right.
•	The nav li, we set the height of the list items to create a uniform nav bar appearance.
•	The nav a, Configures padding, center alignment, color, and hover effects for navigation links.

3.	Sidebar Menu: The styles we applied for the side navigation bar are:
•	.sidebar: A fixed-position sidebar hidden by default; appears on mobile, with a blurred background.
•	.sidebar li and .sidebar a: Adjusts the sidebar link layout for full-width clickable areas.
•	.dropicon and .close: Sets icon colors for the sidebar.

4.	To make the styles responsive with regards to screen sizes, we used:
•	@media(max-width: 800px): Hides the main navigation bar on smaller screens.
•	@media(max-width: 500px): Expands the sidebar to full width on very small screens.

5.	Home section styles:
•	hometextA and .hometextB: Configures the main title and subtitle on the home page, centering text, adding color, shadows, and fonts.
•	.buttonBooknow and .booknow: Styles a prominent button with colors, font styling, hover effects, and custom radius.

6.	About section styles:
•	#about: Adds padding, color, and a semi-transparent black background.
•	.row: Displays a flex container for aligning about section content, responsive with wrapping.
•	.aboutC1 and .aboutC2: Defines column layout for image and text content.
•	.about-title and .about-text: Sets styling for the title and paragraph text in the about section.

7.	Gallery section styles:
•	#gallery: Sets a semi-transparent black background for the gallery section.
•	.gallerytitle and .gallerydesc: Styles the gallery section title and description, adding text alignment and shadow.
•	.gallerycontainer: Adds padding and centers the gallery grid.
•	.slides: Configures a grid layout with responsive columns and spacing.
•	.slide1 and .slide1 img: Sets image styling with borders, shadows, and hover effects.

8.	Service section styles:
•	#services: Adds background color styling similar to the gallery.
•	.servicestitle and .servicesdesc: Styles title and description text for the services section.
•	.servicescontainer: Sets up a responsive grid layout for displaying services.
•	.service and .service img: Adds padding, radius, and hover effects to service items and images.

9.	Contact section styles:
•	.contact-left and .contact-right: Aligns content into left and right sections for contact details and form.
•	.contacttitle: Styles the main title in the contact section.
•	.socialicons and .socialicons a: Configures social icons, hover effects, and animation scaling.
•	.form input, .form textarea: Styles inputs and textarea with rounded borders and padding for the contact form.
•	.submitbtn: Adds a stylized button for form submission, with custom hover effects.
10.	Footer styles:
.copyright: Styles the footer, centering text with a background color.
#gotop: Creates a "back to top" button with a fixed position and hover effects.
We labelled each CSS section making it easy to locate and understand the styles for specific components. This will also make it easier to troubleshoot, update, or expand the CSS file.

**JavaScript functions.**

Here we explain the JavaScript codes that we used for the document.
1.	Open and Close functions of the Sidebar:
•	showsidebar() Function: This function opens the sidebar menu. It selects the sidebar element using document.querySelector('.sidebar') and changes its display style property to flex, making it visible on the page.
•	hidesidebar() Function: This function hides the sidebar menu by setting the display style property back to none. This hides the sidebar when the close icon is clicked.
•	The querySelector allows us to select based on CSS selectors, such as in this case the class. Here, .sidebar selects an element with the class name sidebar. Since document.querySelector('.sidebar') returns the first element it finds with the specified selector, it’s a simple and efficient way to select a single sidebar element.
2.	Section Navigation Function:
•	showsection(sectionid) Function: This function is used to control which section of the website is visible. It:
•	First, selects all section elements on the page with document.querySelectorAll('section').
•	Hides all sections by looping through each one and setting style.display to 'none'.
•	Finally, it makes only the selected section visible by setting style.display of the specific section to 'block'. The section to display is specified by sectionid, which is passed to the function.
•	Initial Section Display on Page Load: After the page content is loaded, the DOMContentLoaded event listener triggers showsection('home'), displaying the 'home' section by default.
•	The DOMContentLoaded ensures that your JavaScript code runs only after the initial HTML is ready, allowing you to safely access and manipulate elements within the page.
3.	“Go To Top” Button:
•	window.onscroll Event: This listens for the scroll event on the window, calling toggleGoTopButton() whenever the user scrolls.
•	toggleGoTopButton() Function: This function controls the visibility of the "Go to Top" button (gotop). It checks if the scroll position is more than 100 pixels from the top:
-	If the user scrolls down more than 100 pixels, it sets the display of gotop to "block", making the button appear.
-	Otherwise, it hides the button by setting gotop.style.display = "none".
4.	Smooth scroll to top function:
•	scrollToTop() Function: This function smoothly scrolls the page to the top when the "Go to Top" button is clicked. It uses window.scrollTo() with { top: 0, behavior: 'smooth' } to smoothly animate the scroll back to the top of the page.
Each of these functions helps improve the user experience by providing easy navigation between sections, a convenient "back to top" option, and a clean sidebar menu toggle for mobile and desktop views. Let me know if you need further clarification on any part of the code.
