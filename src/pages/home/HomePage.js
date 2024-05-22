import React from "react";
import "../home/HomePage.css";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <div className="container-post">
        <form className="form-post">
            <textarea type="text" name="post" id="post" placeholder="Escreva seu post..." />

            <button>Postar</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
