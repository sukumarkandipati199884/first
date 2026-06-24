import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FeedItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

function ActivityFeed() {
  return (
    <FeedContainer>
      <h2>Activity Feed</h2>
      <FeedItem>User John Doe logged in</FeedItem>
      <FeedItem>New user Jane Smith registered</FeedItem>
      <FeedItem>Payment of $200 received</FeedItem>
    </FeedContainer>
  );
}

export default ActivityFeed;