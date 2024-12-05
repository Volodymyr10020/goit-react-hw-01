const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    color: isOnline ? "green" : "red",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p style={statusStyle}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
