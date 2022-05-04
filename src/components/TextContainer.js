import "./TextContainer.css";

function TextContainer() {
  return (
    <div className="text-container">
      <div className="heading">
        <h1>Quam Tristique Condimentum</h1>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.{" "}
          <a href="/">Curabitur blandit</a> tempus porttitor. Integer posuere
          erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id
          ligula porta felis euismod semper.
        </p>
      </div>
      <div className="secondary">
        <div>
          <h2>Fringilla Euismod Adipiscing Ipsum</h2>
          <p className="secondary-description">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
            lacinia bibendum nulla sed.
          </p>
        </div>
        <div>
          <img src={"/images/Image.png"} alt="Welcome" />
        </div>
      </div>
      <div className="list">
        <ul>
          <li className="bullet-primary">Tellus Ullamcorper Inceptos</li>
          <li className="bullet-primary">Magna Condimentum</li>
          <li className="bullet-secondary">Mattis Tristique</li>
          <li className="bullet-secondary">Pharetra Pellentesque Dapibus</li>
          <li className="bullet-primary">Aenean Inceptos</li>
          <li className="bullet-primary">Parturient Bibendum</li>
        </ul>
      </div>
    </div>
  );
}

export default TextContainer;
