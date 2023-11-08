<<<<<<< HEAD
import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div className="w-full">
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data, index) => (
            <li key={index} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
=======
import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div className="w-full">
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data, index) => (
            <li key={index} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
>>>>>>> 6d7858233edd166cd04ec5265f9d09fd6e302ba5
