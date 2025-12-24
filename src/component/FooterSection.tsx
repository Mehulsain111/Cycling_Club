import img from "../../public/logo (1).png";
export const FooterSection = () => {
  return (
    <div className="container-fluid footersection  pt-4">
      <div className="row mt-4">
        <div className="col-md-3 frist  border-end ">
          <div className="d-flex pb-2">
            <img src={img} alt="logo" className=" w-25" />{" "}
            <h4 className="my-auto fw-bolder fst-italic ps-1 text-danger">
              Cycling Club
            </h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aliquam totam rerum aliquid repudiandae impedit est incidunt, quasi
            fugit ex harum accusantium.
          </p>
          <div className="row icons ">
            <div className="col-md-4">
              <i className="fa-brands fa-facebook bg-light text-primary"></i>
            </div>
            <div className="col-md-4">
              <i className="fa-brands fa-x-twitter bg-black"></i>
            </div>
            <div className="col-md-4">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col-md-3 secound text-center border-end">
          <h4 className="fst-italic fw-bold ">Navigation</h4>
          <ul className="list-unstyled fst-italic">
            <li>Home </li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="col-md-3  thrid text-center border-end">
          <h4 className="fst-italic fw-bold">Quick Link</h4>
          <ul className="list-unstyled fst-italic">
            <li>Contact Us </li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Pricing </li>
          </ul>
        </div>
        <div className="col-md-3 fourth text-center">
          <h4 className="fst-italic fw-bold">Work Hours</h4>
          <div className="d-flex align-items-center time  pb-2 ">
            <i className="fa-regular fa-clock text-danger ps-4  pe-1"></i>{" "}
            <p className="my-auto"> 7 AM - 5 PM , Mon - Sat </p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn btn-danger">
            <i className="fa-solid fa-phone"></i>
            {"  "}
            Call Us
          </button>
        </div>
      </div>
      <hr/>
      <h4 className="m-0 fst-italic fw-bold text-center pb-4">
        © 2025 <span className="text-danger">Mehul Sain</span> Template • All Rights Reserved
      </h4>
    </div>
  );
};
