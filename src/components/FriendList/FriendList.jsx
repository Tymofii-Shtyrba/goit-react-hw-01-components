import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
  return <ul className={css.friend_list}>
    {friends.map(({avatar, name, isOnline, id}) => {
      return <li key={id} className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
      </li>
    })}
  </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }))
}