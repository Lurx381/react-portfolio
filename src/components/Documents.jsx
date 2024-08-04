import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Documents = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [documents, setDocuments] = useState([]); // State for documents
  const navigate = useNavigate();

  useEffect(() => {
    if (loginAttempts >= 7) {
      setErrorMessage('Too many login attempts. Please try again later.');
    }
  }, [loginAttempts]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginAttempts >= 7) return;

    try {
      const response = await axios.post('/login.php', { username, password });
      if (response.data.exists) {
        setIsLoggedIn(true);
        setErrorMessage('');
        setSuccessMessage('Login successful');
        loadDocuments(); // Load documents after successful login
      } else {
        setLoginAttempts(prevAttempts => prevAttempts + 1);
        setErrorMessage('User does NOT exist');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error checking user:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleGoToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const loadDocuments = () => {
    // Load documents here (dummy data for now)
    setDocuments([
      { id: 1, title: 'Sample Document 1', description: 'This is a description of the first sample document.' },
      { id: 2, title: 'Sample Document 2', description: 'This is a description of the second sample document.' }
    ]);
  };

  return (
    <div className="bg-black text-white py-20 min-h-screen flex flex-col items-center">
      {isLoggedIn ? (
        <div className="max-w-3xl w-full px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My Documents</h2>
          <div className="space-y-6">
            {documents.map(doc => (
              <div key={doc.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-400">{doc.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleGoToHome}
            className="hover:bg-blue-600 transition-colors mt-4 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            Go to Home
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="hover:bg-blue-600 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              disabled={loginAttempts >= 7}
            >
              Login
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 mt-4 text-center">{successMessage}</p>
            )}
          </form>
          <button
            onClick={handleGoBack}
            className="hover:bg-blue-600 w-full mt-4 bg-gray-700 text-white px-4 py-2 rounded-full"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Documents;
