import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
