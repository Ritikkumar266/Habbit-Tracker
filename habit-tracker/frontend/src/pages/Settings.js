import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/api';
import './Settings.css';

function Settings({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authAPI.getCurrentUser();
      setUser(response.data);
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure? This cannot be undone!')) {
      // In a real app, you'd call an API to delete the account
      handleLogout();
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      {error && <div className="error-box">{error}</div>}
      {success && <div className="success-box">{success}</div>}

      <div className="settings-content">
        <div className="settings-tabs">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button
            className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            🎨 Preferences
          </button>
          <button
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
          <button
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            ℹ️ About
          </button>
        </div>

        <div className="settings-panel">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <h2>Profile Information</h2>
              <div className="profile-info">
                <div className="info-item">
                  <label>Name</label>
                  <p>{user?.name}</p>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <p>{user?.email}</p>
                </div>
                <div className="info-item">
                  <label>Member Since</label>
                  <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="tab-content">
              <h2>Preferences</h2>
              <div className="preference-group">
                <div className="preference-item">
                  <div className="preference-info">
                    <h3>Dark Mode</h3>
                    <p>Enable dark theme for the app</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h3>Notifications</h3>
                    <p>Receive daily reminders</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h3>Email Digest</h3>
                    <p>Weekly summary of your habits</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="tab-content">
              <h2>Security</h2>
              <div className="security-section">
                <div className="security-item">
                  <h3>Password</h3>
                  <p>Change your password regularly to keep your account secure</p>
                  <button className="action-btn">Change Password</button>
                </div>
                <div className="security-item">
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                  <button className="action-btn">Enable 2FA</button>
                </div>
                <div className="security-item">
                  <h3>Active Sessions</h3>
                  <p>Manage your active sessions across devices</p>
                  <button className="action-btn">View Sessions</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="tab-content">
              <h2>About Habit Tracker</h2>
              <div className="about-section">
                <div className="about-item">
                  <h3>Version</h3>
                  <p>1.0.0</p>
                </div>
                <div className="about-item">
                  <h3>Built With</h3>
                  <p>React, Node.js, Express, MongoDB</p>
                </div>
                <div className="about-item">
                  <h3>Features</h3>
                  <ul>
                    <li>✅ Daily habit tracking</li>
                    <li>✅ Streak system</li>
                    <li>✅ Calendar view</li>
                    <li>✅ Statistics & analytics</li>
                    <li>✅ Leaderboard</li>
                    <li>✅ History tracking</li>
                  </ul>
                </div>
                <div className="about-item">
                  <h3>Support</h3>
                  <p>For issues or feedback, please contact support@habittracker.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="settings-actions">
        <button onClick={handleLogout} className="logout-btn">
          🚪 Logout
        </button>
        <button onClick={handleDeleteAccount} className="delete-btn">
          🗑️ Delete Account
        </button>
      </div>
    </div>
  );
}

export default Settings;
