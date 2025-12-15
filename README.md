# Notes App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)

A modern, full-stack notes application built with React and Express.js. Write and preview Markdown notes with tagging functionality, and persist them via a RESTful API. Perfect for developers, writers, and anyone needing organized note-taking with rich text support.

## 🚀 Features

- **📝 Markdown Editor**: Write notes in Markdown with instant live preview using React Markdown.
- **🏷️ Tagging System**: Add custom tags to categorize and organize your notes.
- **💾 Persistent Storage**: Save notes to a backend server with timestamps.
- **🔄 Real-time Preview**: See your Markdown rendered in real-time as you type.
- **📱 Responsive Design**: Clean, minimal UI that works seamlessly on desktop, tablet, and mobile devices.
- **⚡ Fast Performance**: Lightweight and optimized for quick loading and smooth interactions.
- **🔒 CORS Enabled**: Secure cross-origin requests between frontend and backend.
- **🛠️ Easy Setup**: Simple installation and running with npm scripts.
- **📋 Notes Management**: View all notes in a sidebar, search by content or tag, select and edit notes.
- **🗑️ Delete Notes**: Remove unwanted notes with a single click.
- **🔍 Search Functionality**: Find notes quickly by searching content or tags.
- **📅 Timestamps**: Each note includes creation timestamp for better organization.
- **🌙 Dark Mode**: Toggle between light and dark themes for comfortable viewing.
- **📤 Export Notes**: Download all notes as a JSON file for backup or sharing.
- **📊 Notes Counter**: See the total number of notes in the sidebar.

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern JavaScript library for building user interfaces.
- **React Markdown**: Library for rendering Markdown as React components.
- **CSS**: Custom styling for a clean, professional look.

### Backend
- **Express.js**: Fast, unopinionated web framework for Node.js.
- **Node.js**: JavaScript runtime for server-side development.
- **CORS**: Middleware for enabling cross-origin resource sharing.

### Development Tools
- **Create React App**: Build setup for React applications.
- **ESLint**: Linting utility for JavaScript.
- **Git**: Version control system.

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation

Follow these steps to get the application running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chetx27/notes-app-.git
   cd notes-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install all necessary packages for both frontend and backend.

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the backend server**:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:5000` and display a confirmation message.

2. **Start the frontend** (in a new terminal window):
   ```bash
   npm start
   ```
   The React app will open in your default browser at `http://localhost:3000`.

### Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder, ready for deployment.

## 📖 Usage

1. **Writing Notes**: Type your content in the Markdown editor textarea on the right.
2. **Adding Tags**: Enter a tag in the input field below the editor.
3. **Saving Notes**: Click the "Save Note" button to persist your note to the server.
4. **Viewing All Notes**: Use the sidebar on the left to see all saved notes with a counter.
5. **Searching Notes**: Use the search bar in the sidebar to filter notes by content or tag.
6. **Selecting Notes**: Click on any note in the sidebar to load it into the editor.
7. **Creating New Notes**: Click "New Note" to start a fresh note.
8. **Deleting Notes**: Click the "🗑️" button next to any note to remove it.
9. **Dark Mode**: Toggle between light and dark themes using the "Dark Mode" / "Light Mode" button.
10. **Exporting Notes**: Click "Export Notes" to download all notes as a JSON file.
11. **Preview**: See your formatted Markdown in the preview section instantly.

### Example Workflow

- Toggle to Dark Mode for comfortable night-time use.
- Click "New Note" to start fresh.
- Write: `# My Project Ideas`
- Add tag: `work`
- Save the note.
- Create another note with different content.
- Use search to find notes by tag or keyword.
- Export all notes for backup.

## 🔌 API Endpoints

The backend provides the following RESTful API endpoints:

### GET /notes
- **Description**: Retrieves all saved notes.
- **Response**: JSON array of notes with id, markdown, tag, and timestamp.
- **Example Response**:
  ```json
  [
    {
      "id": 1,
      "markdown": "# Sample Note\nThis is a sample note.",
      "tag": "sample",
      "timestamp": "2025-12-15T10:30:00.000Z"
    }
  ]
  ```

### POST /notes
- **Description**: Saves a new note.
- **Request Body**: JSON object with `markdown` and `tag` properties.
- **Response**: The saved note object with id and timestamp.
- **Example Request**:
  ```json
  {
    "markdown": "# New Note\nContent here.",
    "tag": "personal"
  }
  ```
- **Example Response**:
  ```json
  {
    "id": 2,
    "markdown": "# New Note\nContent here.",
    "tag": "personal",
    "timestamp": "2025-12-15T10:35:00.000Z"
  }
  ```

### DELETE /notes/:id
- **Description**: Deletes a note by ID.
- **Response**: Success message or 404 if not found.
- **Example**: `DELETE /notes/1`

## 📁 Project Structure

```
notes-app/
├── public/
│   └── index.html          # Main HTML file for React app
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # React app entry point
│   ├── index.css           # Global styles
│   └── public/             # (Legacy files, can be removed)
├── server.js               # Express.js backend server
├── package.json            # Project dependencies and scripts
├── README.md               # This file
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
└── package-lock.json       # Dependency lock file
```

## 🚀 Deployment

### Backend Deployment (Express.js)
- **Heroku**: Push to Heroku with `git push heroku master`.
- **Railway**: Connect your GitHub repo for automatic deployments.
- **Vercel**: Use Vercel's serverless functions.

### Frontend Deployment (React)
- **Vercel**: Connect your GitHub repo for automatic deployments.
- **Netlify**: Drag and drop the `build` folder or connect via Git.
- **GitHub Pages**: Use `gh-pages` package for deployment.

### Full-Stack Deployment
For a complete deployment, deploy backend and frontend separately, updating the API URLs accordingly.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m 'Add amazing feature'`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

Please ensure your code follows the existing style and includes tests if applicable.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Markdown](https://github.com/remarkjs/react-markdown) for excellent Markdown rendering.
- [Express.js](https://expressjs.com/) for the robust backend framework.
- [Create React App](https://create-react-app.dev/) for the streamlined React setup.

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Happy Note-Taking! 📓✨**