import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [notes, setNotes] = useState([]);
  const [markdown, setMarkdown] = useState('# Welcome to Notes App\nType your Markdown here...');
  const [tag, setTag] = useState('');
  const [search, setSearch] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

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
      loadNotes(); // Refresh the list
      setSelectedNoteId(result.id);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'DELETE',
      });
      loadNotes();
      if (selectedNoteId === id) {
        setMarkdown('# Welcome to Notes App\nType your Markdown here...');
        setTag('');
        setSelectedNoteId(null);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const selectNote = (note) => {
    setMarkdown(note.markdown);
    setTag(note.tag);
    setSelectedNoteId(note.id);
  };

  const exportNotes = () => {
    const dataStr = JSON.stringify(notes, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'notes-export.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const filteredNotes = notes.filter(note =>
    note.markdown.toLowerCase().includes(search.toLowerCase()) ||
    note.tag.toLowerCase().includes(search.toLowerCase())
  );

  const appStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
  };

  const sidebarStyle = {
    width: '30%',
    padding: 20,
    borderRight: '1px solid #ccc',
    overflowY: 'auto',
    backgroundColor: darkMode ? '#444' : '#f9f9f9',
  };

  const mainStyle = {
    width: '70%',
    padding: 20,
    backgroundColor: darkMode ? '#333' : '#fff',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: darkMode ? '#555' : '#fff',
    color: darkMode ? '#fff' : '#000',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    marginBottom: 20,
    padding: '10px 20px',
    backgroundColor: darkMode ? '#666' : '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  const noteItemStyle = (isSelected) => ({
    marginBottom: 10,
    padding: 10,
    border: '1px solid #ddd',
    cursor: 'pointer',
    backgroundColor: isSelected ? (darkMode ? '#666' : '#e9ecef') : (darkMode ? '#555' : '#fff'),
    color: darkMode ? '#fff' : '#000',
  });

  return (
    <div style={appStyle}>
      <div style={sidebarStyle}>
        <h2>All Notes ({notes.length})</h2>
        <button onClick={() => setDarkMode(!darkMode)} style={buttonStyle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={exportNotes} style={{...buttonStyle, backgroundColor: darkMode ? '#888' : '#28a745'}}>
          Export Notes
        </button>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />
        <button onClick={() => { setMarkdown('# New Note\nType here...'); setTag(''); setSelectedNoteId(null); }} style={buttonStyle}>New Note</button>
        {filteredNotes.map(note => (
          <div key={note.id} style={noteItemStyle(selectedNoteId === note.id)} onClick={() => selectNote(note)}>
            <h4>{note.markdown.split('\n')[0]}</h4>
            <p>Tag: {note.tag}</p>
            <small>{new Date(note.timestamp).toLocaleString()}</small>
            <button onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }} style={{ marginLeft: 10, color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
          </div>
        ))}
      </div>
      <div style={mainStyle}>
        <textarea
          style={{...inputStyle, height: 200}}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your Markdown here..."
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          style={inputStyle}
        />
        <button onClick={saveNote} style={buttonStyle}>Save Note</button>
        <div>
          <h2>Preview</h2>
          <div style={{ border: '1px solid #ccc', padding: 10, minHeight: 200, backgroundColor: darkMode ? '#444' : '#f9f9f9' }}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
