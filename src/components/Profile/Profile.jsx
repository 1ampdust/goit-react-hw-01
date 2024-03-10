//components/Profile/Profile.jsx
import css from "./Profile.module.css"
  
const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className={css.profile}>
  <div className={css.profileInfo}>
    <img src={image} alt="User avatar" className={css.avatar} />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
<ul className={css.stats}>
        <li className={css.statsContent}>
        <span className={css.statsName}>Followers</span>
        <span className={css.statsValue}>{stats.followers}</span>
      </li>
      <li className={css.statsContent}>
        <span className={css.statsName}>Views</span>
        <span className={css.statsValue}>{stats.views}</span>
      </li>
      <li className={css.statsContent}>
        <span className={css.statsName}>Likes</span>
        <span className={css.statsValue}>{stats.likes}</span>
      </li>
    </ul>
</div>

  );
};

export default Profile;
