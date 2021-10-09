import styles from "../../Styles/MntrProfGrid.module.css";

const Header = () => {
  return (
    <div className={`${styles.back_image}`}>
      <div className="wrapper d-flex flex-column align-items-center justify-content-center text-align-center text-white">
        <h1 className="display-2">Mentorships</h1>
        <h5 className="py-4 w-50 fw-light text-center">
        We offer totally unpaid mentorships from experienced mentors, guiding you in your affairs and showing you what path to chose.
        </h5>
      </div>
    </div>
  );
};

export default Header;
