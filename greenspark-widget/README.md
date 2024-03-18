# Product Widget App

This project is a React application that allows users to view and customize product widgets. The widgets represent environmental impacts such as carbon offset, trees planted, or plastic bottles collected.

## Why this approach?

The application is built using React with TypeScript for a robust front-end architecture. TypeScript provides static typing, which enhances code quality and readability. For state management, Redux Toolkit (RTK) with RTK Query is used due to its simplicity and efficiency in handling server state and asynchronous logic.

Styled Components are utilized for styling because of their theming capabilities and power to dynamically alter styles based on props, which is essential for changing widget colors as required by the task.

## Features

- Fetch and display product widgets from an API.
- Update widget settings (color, active state, and linked state) using client-side state management.
- Ensure only one widget is active at a time.
- Use RTK Query for efficient server state management.
- Customized widget styling with Styled Components.

## Installation

To run this project, you need to have Node.js installed on your system.

1. Clone the repository:
2. Navigate to the project directory:
   cd my-widget-app
3. Install dependencies:
   npm install
4. Run the Application
   npm start

This will launch the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

## Usage

The application presents a list of product widgets that can be customized:

# View Widgets

    Upon loading, the app fetches widget data from the API and displays it.

# Customize Widgets

    Users can change the color of the widgets, activate/deactivate them, and link/unlink them from their public profile using controls provided in the UI.

# Active State

    Only one widget can be active at a time. Activating one widget will automatically deactivate the others.
