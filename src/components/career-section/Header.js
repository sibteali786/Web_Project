import styles from "../../Styles/MntrProfGrid.module.css";

const Header = () => {
  return (
    <div className={`${styles.Back_img}`}>
      <div className="wrapper d-flex flex-column align-items-center justify-content-center text-align-center text-white">
        <h1 className="display-2">Career Counselling</h1>
        <h5 className="py-4 w-50 fw-light text-center">
          Choosing a career is one of the most significant decisions youll ever come across. Our career counselors shall help and guide you in chosing the right career in accordance with your aptitue and interests.
        </h5>
      </div>
    </div>
  );
};

export default Header;
