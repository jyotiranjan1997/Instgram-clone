import Styles from "./Footer.module.css";

const footerData = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Account",
  "Locations",
  "Instagram Lite",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

export default function Footer() {
  return (
    <div>
      <div className={Styles.Para1}>
        {footerData.map((name, i) => (
          <p key={i}>{name}</p>
        ))}
      </div>
      <div className={Styles.Para1}>
        <p>© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
}
