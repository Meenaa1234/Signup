import React from "react";

function Signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 background">
            <img src="../../images/Ellipse.png"  className="banner-sub-img" alt=""></img>
            <img
              src="../../images/zoro.png"
              className="ms-5 mt-5"
              alt="Zorolegal
            One-Stop-Shop Legal Platform."
              style={{ width: "60%" }}
            ></img>

            <div className="row">
              <div className="col-md-12 banner">
                <img
                  className="img-fluid"
                  src="../../images/Homepage.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row inputFields">
              <div className="col-md-8 mt-5 m-auto">
                <p class="heading mt-5 text-center">Sign Up to Zorolegal</p>
                <p className="heading2 mt-2">
                  Welcome back! Log in with your data that you entered during
                  registration.
                </p>
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-12">
                    <label class="form-label">Email</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="yourUsername"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                     
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label class="form-label">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      class="form-control"
                     
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <p class="small ">
                      Already Have An Account ? <a href="/login"> Login </a>
                      <button
                        class="ms-5 btn1"
                        type="submit"
                        style={{ background: "#47455A", color: "white" }}
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
