**RetroRa**
================

A Retro-themed Personal Portfolio Website
----------------------------------------

**Table of Contents**
-----------------

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Contact Section](#contact-section)


**Introduction**
---------------

RetroRa is a personal portfolio website with a retro theme. It's a single-page application built with React, featuring a unique and nostalgic design. The website showcases my skills, experience, and projects in a fun and interactive way.

**Features**
------------

* **Retro-themed design**: A unique and nostalgic design inspired by old-school video games and computers.
* **Interactive elements**: Animations, hover effects, and sound effects create an immersive experience.
* **Project showcase**: A grid-based layout to showcase my projects, with filtering and sorting options.
* **Skill matrix**: A visual representation of my skills and experience.
* **Contact section**: A simple form to send me an email directly, used EmailJS dor that.
* **Responsive design**: The website is fully responsive and works on all devices.

**Technologies Used**
--------------------

* **Frontend**: React, React Router, Framer Motion, Tailwind CSS
* **Backend**: EmailJS (for contact form)
* **Sound effects**: Beep sound effect used throughout the website

**Getting Started**
-------------------

1. Clone the repository: `git clone https://github.com/anmolsah/RetroRa.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the website in your browser: `http://localhost:3000`

**Contact Section**
------------------

The contact section features a simple form that allows users to send me an email directly. I've used EmailJS to handle the form submission and send the email. To use this feature, you'll need to:

1. Create an EmailJS account and get your API key.
2. Replace the `import.meta.env.VITE_EMAILJS_SERVICE_ID` and `import.meta.env.VITE_EMAILJS_TEMPLATE_ID` variables in the `Contact.jsx` file with your own EmailJS service ID and template ID.
3. Replace the `import.meta.env.VITE_EMAILJS_PUBLIC_KEY` variable in the `Contact.jsx` file with your own EmailJS public key.

