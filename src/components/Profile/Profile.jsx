import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.item}>Followers:</span>
          <span className={css.followers}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.item}>Views:</span>
          <span className={css.followers}>{stats.views}</span>
        </li>
        <li>
          <span className={css.item}>Likes:</span>
          <span className={css.followers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
