import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import user from './incoming-data/user.json';
import data from './incoming-data/data';
import friends from './incoming-data/friends';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends}/>
  </React.StrictMode>
);

