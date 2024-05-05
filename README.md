# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- This is a candidate application platform that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience.

**Features**

View job listings as cards with detailed information including job title, company name, location, job description, experience required, and apply button/link.
Filter job listings based on criteria such as minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
Infinite scroll to load additional job listings as the user scrolls down the page.

**Usage**

Upon running the application, you will be able to view job listings in the "Search jobs" section.
Use the filters on the left side to refine job listings based on your preferences.
Scroll down the page to load more job listings dynamically.

**API Integration**

The application fetches job listings from the following API: https://api.weekday.technology/adhoc/getSampleJdJSON.
The API endpoint accepts limit and offset as request body parameters to retrieve job listings.

**Folder Structure**

src/actions: Redux action creators.
src/components: React components.
src/reducers: Redux reducers.
src/utils: Utility functions.

**Technology Stack**

ReactJs
Redux
CSS
Antd
