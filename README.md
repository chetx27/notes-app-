# Notes App

A modern, full-stack notes application built with React and Express.js. Write and preview Markdown notes with tagging functionality, and persist them via a RESTful API.

## Features

- **Markdown Editor**: Write notes in Markdown with live preview.
- **Tagging System**: Add tags to organize your notes.
- **Save and Load**: Persist notes to a backend server and load the latest note on app start.
- **Responsive Design**: Clean, simple UI that works on desktop and mobile.
- **Real-time Preview**: See your Markdown rendered instantly.

## Tech Stack

- **Frontend**: React 18, React Markdown, CSS
- **Backend**: Express.js, Node.js
- **Deployment**: Ready for deployment on platforms like Heroku, Vercel, or Netlify

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000`.

2. In a new terminal, start the frontend:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

## Usage

- Type your Markdown content in the textarea.
- Add a tag in the input field.
- Click "Save Note" to persist it.
- Refresh the page to load the latest saved note.

## API Endpoints

- `GET /notes`: Retrieve all notes (returns the latest note).
- `POST /notes`: Save a new note. Body: `{ "markdown": "content", "tag": "tag" }`

## Project Structure

```
notes-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── server.js
├── package.json
├── README.md
└── .gitignore
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -am 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Markdown](https://github.com/remarkjs/react-markdown) for Markdown rendering.
- [Express.js](https://expressjs.com/) for the backend framework.