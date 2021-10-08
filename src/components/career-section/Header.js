import styles from "../../Styles/MntrProfGrid.module.css";

const Header = () => {
  return (
    <div className={`${styles.Back_img}`}>
      <div className="wrapper d-flex flex-column align-items-center justify-content-center text-align-center text-white">
        <h1 className="display-2">Career Counselling</h1>
        <h5 className="py-4 w-50 fw-light text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quasi
          voluptatum non libero impedit facere cupiditate voluptas minima
          voluptatibus? Nam dolorum facilis laboriosam cupiditate inventore
          possimus totam deleniti, minima eos!
        </h5>
      </div>
    </div>
  );
};

export default Header;
