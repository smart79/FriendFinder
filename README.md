# Friend-Finder- A Compatibility Matching App

A full-stack matchmaking application built with Node.js, Express, and JavaScript and hosted on Render. Users answer a short personality quiz, and the app finds their most compatible friend based on a similarity algorithm.

- Fill out a quick survey and get matched to those who are most like you!

### 🚀 Live Demo

Try it out: Friend Finder Live (https://friend-finder-y6vb.onrender.com)

## 📖 Overview

Friend Finder is a full-stack web application that matches users based on their answers to a 10-question personality quiz. The app:

    Collects user responses via a form.
    Uses a matching algorithm to compare responses.
    Returns the best match from a database of predefined users.
    Displays the best match's name and photo in a modal.

Built to showcase API integration, backend routing, and server-side logic.

## 📁 Project Structure

FriendFinder/
│── app/
│ ├── data/
│ │ ├── friends.js # Stores friend data (JSON format)
│ ├── public/
│ │ ├── images/ # Stores profile pictures
│ │ ├── home.html # Landing page
│ │ ├── survey.html # Quiz page
│ ├── routing/
│ │ ├── apiRoutes.js # API endpoints for matching algorithm
│ │ ├── htmlRoutes.js # Serves HTML pages
│── node_modules/ # Node dependencies
│── package.json # Project metadata & dependencies
│── server.js # Express server & routing setup
│── README.md # Project documentation

## ⚡ Installation & Setup

To run Friend Finder locally, follow these steps:

    Clone the repository:

git clone https://github.com/yourusername/friend-finder.git
cd friend-finder

Install dependencies:

npm install

Start the server:

    node server.js

    Open your browser and visit:
    http://localhost:3000

🛠 Technologies Used

    Node.js - Backend runtime environment
    Express.js - Web server & routing framework
    JavaScript (ES6+) - Client & server-side logic
    jQuery & AJAX - Dynamic content updates
    Bootstrap - Responsive UI design
    JSON - Data storage for user responses
    Path Module - Handles file path resolution
    Body-Parser (Built into Express) - Parses incoming form data

## 🧑‍💻 Skills Demonstrated

✔ Full-stack web development
✔ API routing & Express server setup
✔ JavaScript-based matching algorithm
✔ Handling POST & GET requests
✔ jQuery event handling & DOM manipulation
✔ Managing static files & middleware

## 🌟 Features & Functionality

Interactive Personality Quiz - Users answer 10 questions.
Real-Time Matching Algorithm - Finds the best friend match.
Dynamic UI Update - Uses AJAX to display results without refreshing.
JSON Database Storage - Stores user profiles for comparison.
RESTful API Integration - API routes handle matching logic.
Responsive Design - Works on desktop & mobile.

## 🧮 Algorithms & Logic

The matching algorithm calculates compatibility scores by:

    Looping through stored friends in friends.js.
    Computing the absolute difference between each user's answers.
    Summing up the differences to get a total compatibility score.
    Selecting the friend with the smallest total difference.

### 📌 Example Logic:

app.post("/api/friends", function (req, res) {
let newFriend = req.body;
let matches = [];

    friends.forEach(friend => {
        let totalDifference = 0;
        friend.scores.forEach((score, i) => {
            totalDifference += Math.abs(parseInt(score) - parseInt(newFriend.scores[i]));
        });
        matches.push(totalDifference);
    });

    let bestMatchIndex = matches.indexOf(Math.min(...matches));
    let bestMatch = friends[bestMatchIndex];

    friends.push(newFriend);
    res.json(bestMatch);

});

## 🚀 Future Enhancements

🔹 OAuth Authentication - Users log in via Google or Facebook.
🔹 Database Integration - Replace JSON storage with MongoDB or Firebase.
🔹 More Quiz Questions - Improve compatibility accuracy.
🔹 User-Uploaded Photos - Allow users to upload profile pictures.
🔹 Multiple Matches - Suggest top 3 matches instead of 1.

## 👥 Contributors

👤 Stephen Martinez (sole contributor) - Full-stack development, backend logic, and API design.

Want to contribute? Fork this repo and submit a pull request!

## 📜 Credits & Acknowledgments

Special thanks to:

    Bootstrap for front-end styling.
    jQuery & AJAX for dynamic updates.
    Express.js Docs for API routing guidance.
    Node.js Community for server setup tips.

## 📄 License

This project is licensed under the MIT License – free for personal and commercial use.

## 📂 More Projects

### Check out my other projects on GitHub:

🔗 GitHub Portfolio: https://github.com/smart79
📬 Contact: https://stephenmartinez.dev/contact.html

### Interested in working together?

📧 Email: stephen@stephenmartinezs.dev
🌐 Portfolio: https://stephenmartinez.dev/portfolio.html

### 🚀 Thank you for visiting! I hope you enjoy using Friend Finder. Let me know if you have any feedback or questions!
