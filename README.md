# StackForge

StackForge is a modern web application that helps developers explore, compare, and build their ideal technology stack. Users can browse different technologies and add their preferred tools to a personalized stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON / Fetch API


## Features

- **Explore Technologies** — Browse frontend, backend, database, and development tools with useful details.
- **Build Your Stack** — Add technologies to your personal stack and remove them individually or all at once.
- **Interactive UI & Notifications** — Responsive design with loading states, hover effects, and toast notifications for user actions.


Question 1-  JSX is a syntax  for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React code easier to read, write, and maintain.

Question 2- Props are  passed from a parent component to a child component, on the other hand state is mutable data managed inside a component. Props are mainly used for communication between components, whereas state is used to manage dynamic data and changes in the UI.

Question 3- The useState hook is used to create and manage state in a React functional component.When the state changes, React re-renders the component and updates the UI.I have used in my TechCard tsx for button interactive.


Question 4- The useEffect hook is used to perform side effects in a React component, such as fetching data, setting up event listeners, or working with timers. I did not use useEffect in this project. I loaded the JSON data using the Fetch API and handled the data with React Suspense and the use() hook.

Question 5- Every item in a .map() list needs a unique key prop so that React can identify each item efficiently. It helps React determine which items have been added, removed, or changed and update the DOM correctly.


Question 6- Conditonal Rendering means changing the UI based on condition.If the condtion is true show this or false show this.

Question 7- I always send data from parent to child by props and i receive data from child to parent by callback function as props.
