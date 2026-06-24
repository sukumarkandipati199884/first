import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FeedItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

function ActivityFeed() {
  return (
    <FeedContainer>
      <h2>Activity Feed</h2>
      <FeedItem>User John Doe logged in</FeedItem>
      <FeedItem>User Jane Smith updated profile</FeedItem>
    </FeedContainer>
  );
}

export default ActivityFeed;