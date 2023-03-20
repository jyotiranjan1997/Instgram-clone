import { CgProfile } from "react-icons/cg";

export default function UserCard({ username }) {
  return (
    <div
      style={{
        marginTop: "5px",
        display:"flex",
        border: "0.5px solid grey",
        padding: "4px 5px",
        gap:"8px"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems:"center"
        }}
      >
        <CgProfile />
        <p>{username}</p>
      </div>
      <button
        style={{
          padding: "5px 8px",
          backgroundColor: "grey",
          border: "none",
          boderRadious: "8px",
        }}
      >
        Follow
      </button>
    </div>
  );
}
