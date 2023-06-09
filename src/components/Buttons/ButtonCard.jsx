const ButtonCard = ({
  label = "label",
  textColor = "",
  colorHover = "",
  bg = "",
  font = "",
  onClick,
  icon,
}) => {
  return (
    <button
      className={`btn btn-outline-${colorHover} text-${textColor} fw-${font} bg-${bg} mt-auto ms-2 me-2`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default ButtonCard;
