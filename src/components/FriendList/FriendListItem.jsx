import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const renderCarrentStatus = isOnline ? (
    <p className={styles.statusOnline}>Online</p>
  ) : (
    <p className={styles.statusOffline}>Offline</p>
  );

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {renderCarrentStatus}
    </div>
  );
};

export default FriendListItem;
