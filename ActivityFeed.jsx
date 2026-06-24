import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        <li>User John Doe logged in</li>
        <li>User Jane Smith updated profile</li>
        <li>New user registered</li>
      </ul>
    </div>
  );
}

export default ActivityFeed;