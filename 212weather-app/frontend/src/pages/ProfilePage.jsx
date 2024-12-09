import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [preferredCity, setPreferredCity] = useState('');
  const [preferredUnit, setPreferredUnit] = useState('metric');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found, user not authenticated');
          return;
        }
        const response = await api.get('/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
        setPreferredCity(response.data.preferredCity || 'London');
        setPreferredUnit(response.data.preferredUnit || 'metric');
      } catch (err) {
        console.error(err.response ? err.response.data : err);
      }
    };
    fetchUser();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found, user not authenticated');
        return;
      }
      await api.put('/auth/profile', { preferredCity, preferredUnit }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (err) {
      console.error(err.response ? err.response.data : err);
    }
  };

  return (
    <div>
      <div>
        <h3>Profile</h3>
        <input
          type="text"
          value={preferredCity}
          onChange={(e) => setPreferredCity(e.target.value)}
        />
        <select value={preferredUnit} onChange={(e) => setPreferredUnit(e.target.value)}>
          <option value="metric">°C</option>
          <option value="imperial">°F</option>
        </select>
        <button onClick={handleSaveProfile}>Save</button>
      </div>
    </div>
  );
};

export default ProfilePage;
