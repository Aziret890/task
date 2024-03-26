import axios from "axios";
import React, { useEffect } from "react";

function NavBar() {
  useEffect(() => {
    axios
      .get("https://postive.tata.kg/api/v1/products/categories", {
        headers: {
          "Accept-Language": "ru",
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  }, []);
  return <div>NavBar</div>;
}

export default NavBar;
