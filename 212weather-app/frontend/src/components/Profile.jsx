import React from 'react';

const Profile = ({ user, onUnitChange, onCityChange }) => {
    return (
        <div>
            <div>
                <div className="profile-photo">Photo</div>
                <h2>{user.username}</h2>
            </div>
            <div>
                <label>
                    Preferred Unit:
                    <select
                        value={user.preferredUnit}
                        onChange={(e) => onUnitChange(e.target.value)}
                    >
                        <option value="metric">Celsius</option>
                        <option value="imperial">Fahrenheit</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Preferred City:
                    <input
                        type="text"
                        value={user.preferredCity}
                        onChange={(e) => onCityChange(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Profile;
