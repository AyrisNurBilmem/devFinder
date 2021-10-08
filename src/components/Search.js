import React, { useState, useEffect } from "react";
import axios from "axios";
import NotFound from "./NotFound";
import "./styles/css/styles.css";
import "./styles/css/searchArea.css";
import "./styles/css/responsive.css";
import moment from "moment";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";

function Search({ theme }) {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  const [user, setUser] = useState({
    name: String,
    username: String,
    bio: String,
    createDate: String,
    repos: String,
    followers: String,
    following: String,
    location: String,
    blog: String,
    twitter: String,
    company: String,
    error: String,
    avatar: String,
  });

  const setData = (data) => {
    setUser({
      name: data.name,
      username: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
      createDate: data.created_at,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      blog: data.blog,
      twitter: data.twitter_username,
      company: data.company,
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const fetchdata = async () => {
    const result = await axios.get("https://api.github.com/users/example");
    setData(result.data);
  };

  const handleSearch = async () => {
    try {
      const result = await axios.get(`https://api.github.com/users/${input}`);
      setData(result.data);
      setError(false);
      setInput("");
    } catch (error) {
      console.log("User not found");
      setError(true);
    }
  };

  return (
    <div>
      <div className="devfinder">
        <h3>devfinder</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="search-div"
          style={
            theme === "dark"
              ? { backgroundColor: "#1f2a48", color: "#fefefe" }
              : {
                  backgroundColor: "#fefefe",
                  color: "#121212",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                }
          }
        >
          <span>
            <FiIcons.FiSearch
              size={24}
              className="search-icon"
              style={
                theme === "dark" ? { color: "#0a50a7" } : { color: "#5C7AEA" }
              }
              r
            />
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search Github username..."
            onChange={handleInput}
            value={input}
            style={
              theme === "dark"
                ? { backgroundColor: "#1f2a48" }
                : { backgroundColor: "#fefefe" }
            }
          />

          <button
            type="submit"
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </button>
        </div>
      </form>

      {error ? (
        <NotFound />
      ) : (
        <div
          className="container"
          style={
            theme === "dark"
              ? { backgroundColor: "#1f2a48" }
              : {
                  backgroundColor: "#fefefe",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                }
          }
        >
          <div className="left-div">
            <img src={user.avatar} alt="avatar" />
          </div>

          <div className="right-div">
            <div className="top-div">
              <p className="date">
                {user.createDate
                  ? moment(user.createDate).format("[Joined] Do MMM YYYY")
                  : "Date not available"}
              </p>
              <h2 style={{ marginBottom: "0px" }}>
                {user.name ? user.name : "Github User"}
              </h2>
              <p style={{ color: "#0a50a7", marginTop: "2px" }}>
                @{user.username ? user.username : "No username"}
              </p>
              <p>{user.bio ? user.bio : "This profile has no bio"}</p>
            </div>

            <div
              className="middle-container"
              style={
                theme === "dark"
                  ? { backgroundColor: "#141c2f" }
                  : { backgroundColor: "#f5f8ff" }
              }
            >
              <div className="middle-div">
                <p className="middle-p">Repos</p>
                <p className="middle-p">Followers</p>
                <p className="middle-p">Following</p>
              </div>
              <div className="middle-div">
                <p className="middle-p number">{user.repos ? user.repos : 0}</p>
                <p className="middle-p number">
                  {user.followers ? user.followers : 0}
                </p>
                <p className="middle-p number">
                  {user.following ? user.following : 0}
                </p>
              </div>
            </div>

            <div className="bottom-div">
              <div className="bottom-div-items">
                <p className="layer1">
                  <MdIcons.MdLocationPin className="icon" />
                  {user.location ? user.location : "Not Available"}
                </p>
                <p className="layer1">
                  <IoIcons.IoLogoTwitter className="icon" />
                  {user.twitter ? user.twitter : "Not Available"}
                </p>
              </div>

              <div className="bottom-div-items">
                <p className="layer2">
                  <HiIcons.HiLink className="icon" />
                  {user.blog ? user.blog : "Not Available"}
                </p>
                <p className="layer2">
                  <RiIcons.RiBuildingFill className="icon" />
                  {user.company ? user.company : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
