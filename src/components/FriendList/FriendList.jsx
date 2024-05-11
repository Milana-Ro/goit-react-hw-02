import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const renderItems = friends.map((friend) => (
    <li key={friend.id}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));

  return <ul>{renderItems}</ul>;
};

export default FriendList;
