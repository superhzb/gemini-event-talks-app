# Gemini Event Talks App

A simple single-page web application to display the schedule for a one-day technical conference.

## Features

*   **Dynamic Schedule Display:** The website dynamically generates and displays a schedule of talks for the day, including the start and end times for each talk, and a lunch break.
*   **Talk Details:** For each talk, the website shows the title, the speaker(s), a description, and the categories it belongs to.
*   **Category-based Search:** Users can search for talks by category. The schedule updates in real-time as the user types in the search bar, showing only the talks that match the search query.
*   **Single-Page Application (SPA):** The entire website is on a single page. The schedule is loaded and updated without needing to reload the page, which provides a smooth and fast user experience.

## Technologies Used

*   **Backend:**
    *   [Node.js](https://nodejs.org/)
    *   [Express.js](https://expressjs.com/)
*   **Frontend:**
    *   HTML
    *   CSS
    *   JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/superhzb/gemini-event-talks-app.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd gemini-event-talks-app
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1.  Start the server:
    ```sh
    node server.js
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

## Usage

Once the application is running, you will see the full schedule of talks for the day. To search for a talk, simply start typing a category (e.g., "JavaScript", "Frontend", "Python") in the search bar at the top of the page. The schedule will automatically filter to show only the talks that match your search.
