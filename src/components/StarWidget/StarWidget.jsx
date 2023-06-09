import style from "./StarWidget.module.css";

const StarWidget = () => {
  return (
    <div>
      <div className={`${style.rating} d-flex-reverse`}>
        <input
          className="label"
          type="radio"
          id="star5"
          name="rate"
          defaultValue={5}
        />
        <label className="label" htmlFor="star5" title="text" />
        <input
          className="input"
          type="radio"
          id="star4"
          name="rate"
          defaultValue={4}
        />
        <label className="label" htmlFor="star4" title="text" />
        <input
          defaultChecked
          type="radio"
          id="star3"
          name="rate"
          defaultValue={3}
        />
        <label htmlFor="star3" title="text" />
        <input type="radio" id="star2" name="rate" defaultValue={2} />
        <label htmlFor="star2" title="text" />
        <input type="radio" id="star1" name="rate" defaultValue={1} />
        <label htmlFor="star1" title="text" />
      </div>
    </div>
  );
};

export default StarWidget;
