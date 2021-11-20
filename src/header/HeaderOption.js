import "./HeaderOption.css";
export const HeaderOption = (props) => {
  const { Icon, title, avatar } = props;
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <avatar className="headerOption__icon" src={avatar} alt="max" />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
