import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
    <img src={avatar} alt={name} className={css.avatar} />
    <p className={css.name}>{name}</p>
  </li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}