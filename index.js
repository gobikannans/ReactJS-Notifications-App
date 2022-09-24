const Notification = (props) => {
  const { name, style, image } = props;
  return (
    <div className={style}>
      <img src={image} className="img" />
      <p className="paragraph">{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Notifications</h1>
      <Notification
        name="Information Message"
        style="info"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        name="Success Message"
        style="success"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        name="Warning Message"
        style="warning"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        name="Error Message"
        style="danger"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
