import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome to Notes App\nType your Markdown here...');
  const [tag, setTag] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setMarkdown(data[0].markdown);
          setTag(data[0].tag);
        }
      });
  }, []);

  const saveNote = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown, tag }),
      });
      const result = await response.json();
      alert('Note saved!');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <textarea
        style={{ width: '100%', height: 200, marginBottom: 20 }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        style={{ marginBottom: 20, width: '100%' }}
      />
      <button onClick={saveNote} style={{ marginBottom: 20 }}>Save Note</button>
      <div>
        <h2>Preview</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
