<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6 ">
      <div className="w-full border-t border-b py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1 ">
          <p className="text-sm ">See Personalised recommendations</p>
          <Link to="/signin">
            <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold hover:bg-yellow-500 active:bg-yellow-700 duration-150">
              Sign In
            </button>
          </Link>
          <p className="text-xs mt-1 ">
            New Customer?{" "}
            <span className="text-blue-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
=======
import React from "react";
import { Link } from "react-router-dom";
const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6 ">
      <div className="w-full border-t border-b py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1 ">
          <p className="text-sm ">See Personalised recommendations</p>
          <Link to="/signin">
            <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold hover:bg-yellow-500 active:bg-yellow-700 duration-150">
              Sign In
            </button>
          </Link>
          <p className="text-xs mt-1 ">
            New Customer?{" "}
            <span className="text-blue-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
>>>>>>> 6d7858233edd166cd04ec5265f9d09fd6e302ba5
