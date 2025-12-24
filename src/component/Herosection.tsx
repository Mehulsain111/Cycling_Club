import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Herosection = () => {
  return (
    <div className="container-fluid">
      <div className="text-center text-light pt-5 pb-md-5">
        <div className=" mt-5 pt-5">
          <p
            style={{ letterSpacing: "10px", color: "yellow" }}
            className="pt-md-5 mt-md-5"
          >
           YOU WANT TO ENJOY CYCLING
          </p>
          <h1 style={{ fontSize: "400%" }} className="pb-md-3 pt-md-3 ">
            Welcome to Cycling Club  <span className="text-warning fw-bolder">.</span>
          </h1>
        </div>
        <div className="row my-card">
          <div className="col-md-3 pb-3">
            <div className="card2">
              <div className="card-body">
                <i className="fa-solid fa-shapes"></i>
              </div>
              <h3 className="fw-bold">Fully Customizable.</h3>
              <p className="text-warning ">Almost on every page</p>
              <p className="px-2">
                You can edit or create your own layout almost on every
                page/element.
              </p>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="card2">
              <div className="card-body">
                <i className="fa-solid fa-border-none"></i>
              </div>
              <h3 className="fw-bold">Page Builder</h3>
              <p className="text-warning ">Drag & drop elementor builder</p>
              <p className="px-2">
                Powered by elementor page builder with drag & drop widget
                function.
              </p>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="card2">
              <div className="card-body">
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <h3 className="fw-bold">Inline Editor</h3>
              <p className="text-warning ">One Click Importer</p>
              <p className="px-2">
                You can change directly the content inside most of the custom
                element of page builder.
              </p>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="card2">
              <div className="card-body">
                <i className="fa-solid fa-file-import"></i>
              </div>
              <h3 className="fw-bold px-1">One Click Importer</h3>
              <p className="text-warning ">Use the demo data</p>
              <p className="px-2">
                Import everything on demo page with only single click and you’re
                done!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
