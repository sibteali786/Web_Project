const Contact = () => {
  return (
    <>
      <div>
        <p className="pt-3 text-center">
          Here is how you can schedule an appointment with me.
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-sm-center">
        <button
          className="py-2 d-flex btn btn-outline-dark w-100 justify-content-around align-items-center me-0 me-sm-3 my-1"
          style={{ maxWidth: "280px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 87.5 72"
            width="25px"
            height="28px"
          >
            <path
              fill="#00832d"
              d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"
            />
            <path
              fill="#0066da"
              d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z"
            />
            <path fill="#e94235" d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z" />
            <path fill="#2684fc" d="M20.5 20.5H0v31h20.5z" />
            <path
              fill="#00ac47"
              d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32zM49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z"
            />
            <path
              fill="#ffba00"
              d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z"
            />
          </svg>
          <p className="m-0 p-0">Schedule a Google Meet Call</p>
        </button>
        <button
          className="py-2 d-flex btn btn-outline-dark w-100 justify-content-around align-items-center my-1"
          style={{ maxWidth: "280px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="32px"
            height="30px"
          >
            <path
              fill="#673ab7"
              d="M12,44c-1.657,0-3-1.343-3-3V7c0-1.657,1.343-3,3-3h16l11,11v26c0,1.657-1.343,3-3,3H12z"
            />
            <path fill="#5e35b1" d="M39 15L28.883 14.125 39 24.124z" />
            <path fill="#b39ddb" d="M39,15h-8c-1.657,0-3-1.343-3-3V4L39,15z" />
            <path
              fill="#f5f5f5"
              d="M22 23H32V25H22zM22 28H32V30H22zM22 33H32V35H22zM17.5 22.5A1.5 1.5 0 1 0 17.5 25.5 1.5 1.5 0 1 0 17.5 22.5zM17.5 27.5A1.5 1.5 0 1 0 17.5 30.5 1.5 1.5 0 1 0 17.5 27.5zM17.5 32.5A1.5 1.5 0 1 0 17.5 35.5 1.5 1.5 0 1 0 17.5 32.5z"
            />
          </svg>
          <p className="m-0 p-0">Fill out a Google Form</p>
        </button>
      </div>
    </>
  );
};

export default Contact;
