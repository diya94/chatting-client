### Social Media Application with Post Generation

A full-stack social media application with robust features, including user authentication, a complete post system, and a unique text-to-image generation capability. This project is a comprehensive showcase of MERN stack development and modern web technologies.

-----

### Key Features

  * **User Authentication**: Secure user registration and login with **JWT (JSON Web Tokens)**.
  * **Post System**: Users can create, edit, and delete text-based posts. The system also supports liking, unliking, and commenting on posts.
  * **Dynamic Feed**: A centralized feed displays posts from all users with an **infinite scroll** feature for enhanced performance.
  * **Text-to-Image Generation**: A unique feature allowing users to convert text to an image using the **Hugging Face** API, which can then be downloaded.
  * **Profile & Social Features**: Users can follow and unfollow others, view profile pages to see specific user posts, and edit their own profile details.
  * **Messaging**: A direct messaging system for private and group conversations between users.

-----

### Tech Stack

  * **Frontend**: React (with Vite)
  * **Backend**: Node.js + Express.js
  * **Database**: MongoDB (with Mongoose)
  * **Authentication**: JWT (JSON Web Tokens)
  * **API Integration**: Hugging Face (for Text-to-Image generation)

-----

### Folder Structure

This project follows a clear **monorepo** structure, separating the client (frontend) and server (backend) applications.

```
Social-Media-Web-App-Mern-Stack/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

-----

### Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone [Your-Repo-Link-Here]
    cd Social-Media-Web-App-Mern-Stack
    ```
2.  **Set up the server**:
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add your MongoDB connection string and JWT secret.
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
3.  **Run the server**:
    ```bash
    npm start
    ```
4.  **Set up the client**:
    ```bash
    cd ../client
    npm install
    ```
5.  **Run the client**:
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or the default port for Vite).

-----

### Learning Outcomes

This project provided a hands-on learning experience in:

  * Building a complete **MERN stack** application from scratch.
  * Implementing secure **JWT authentication**.
  * Mastering **CRUD** operations.
  * Integrating external APIs for unique functionality.
  * Handling real-time features like a **messaging system**.
  * Gaining practical knowledge of Git, GitHub, and deployment strategies.

This project is a strong addition to any developer's portfolio, demonstrating proficiency in full-stack development.

-----

### Links

  * **Live Demo**: [https://chatting-client-swart.vercel.app/auth]
  * **Server Repository**: [https://github.com/diya94/chatting-server]
  * **Client Repository**: [https://github.com/diya94/chatting-server]

-----

### Author

  * **Your Name**
  * **GitHub Profile**: [Your GitHub Profile Link]
  * **LinkedIn**: [Your LinkedIn Profile Link]

-----

### License

This project is licensed under the MIT License.
