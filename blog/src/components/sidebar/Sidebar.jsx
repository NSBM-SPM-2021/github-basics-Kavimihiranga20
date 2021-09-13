import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1623595289196-007a22dd8560?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3JpbGFua2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
        Sri Lanka, formerly known as Ceylon, and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {/* {cats.map((c) => ( */}
            {/* <Link to={`/?cat=${c.name}`} className="link"> */}
            {/* <li className="sidebarListItem">{c.name}</li> */}
            {/* </Link> */}
          {/* ))} */}
          <li className="sidebarListItem">WILD</li>
                        <li className="sidebarListItem">THRILLS</li>
                        <li className="sidebarListItem">BLISS</li>
                        <li className="sidebarListItem">PRISTINE</li>
                        <li className="sidebarListItem">HERITAGE</li>
                        <li className="sidebarListItem">SCENIC</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
