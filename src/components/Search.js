import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NotFound from "./NotFound"
import "./styles/css/styles.css"
import * as MdIcons from "react-icons/md"
import * as HiIcons from "react-icons/hi"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as FiIcons from "react-icons/fi"

function Search({handleInput, input, theme}) {
    const [name, setName]=  useState("");
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] =useState("");
    const [bio, setBio] = useState("");
    const [repos, setRepos] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [location, setLocation] = useState("");
    const [blog, setBlog] = useState("");
    const [twitter, setTwitter] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const setData = (data) => {
        setName(data.name);
        setUsername(data.login);
        setBio(data.bio);
        setAvatar(data.avatar_url);
        setRepos(data.public_repos);
        setFollowers(data.followers);
        setFollowing(data.following);
        setLocation(data.location);
        setBlog(data.blog);
        setTwitter(data.twitter_username);
        setCompany(data.company);

    }

    useEffect(() => {
        fetchdata(); 
    }, []);

    console.log(typeof(theme)  + " inside Search")

    const fetchdata = async () =>{
        const result = await axios.get("https://api.github.com/users/example");
        setData(result.data);
    }

   const handleSearch = async () => {
       try {
        const result =await axios.get(`https://api.github.com/users/${input}`);
        if (result.data.message){
            setError(true);
        }else{
            setData(result.data);
            setError(false);
        }
      
       } catch (error) {
           console.log("User not found");
            setError(true);
       }
}

    return (
        <div>
         <form onSubmit ={(e) => e.preventDefault()}>
            <div className ="search-div" style = {theme === "dark" ? { backgroundColor : "#1f2a48"} : { backgroundColor : "#fefefe"}}>
            <span><FiIcons.FiSearch className= "search-icon" /></span><input className ="search-input" type="text" placeholder="Search Github username..." onChange={handleInput} value ={input} style = {theme === "dark" ? { backgroundColor : "#1f2a48"} : { backgroundColor : "#fefefe"}}/> 
            <span><button type="submit" onClick = {handleSearch} className="search-button">Search</button></span>
            </div>
        </form>

        {error  ? <NotFound /> : ( 
            <div className="container" style = {theme === "dark" ? { backgroundColor : "#1f2a48"} : { backgroundColor : "#fefefe"}}>
            <div className ="left-div">
                <img src ={avatar} alt="avatar"/>
            </div>

            <div className ="right-div">
            <div className = "top-div">
                
                <h2>{name ? name : "Github User"}</h2>
                <p>@{username ? username : "No username"}</p>
                <p>{bio  ? bio : "This profile has no bio"}</p>
            </div>


            <div className = "middle-container" style = {theme === "dark" ? { backgroundColor : "#141c2f"} : { backgroundColor : "#f5f8ff"}}>
            <div className="middle-div" >
                <p className ="middle-p">Repos</p>
                <p className ="middle-p">Followers</p>
                <p className ="middle-p">Following</p>
            </div>
            <div className ="middle-div">
                <p className ="middle-p">{repos ? repos : 0}</p>
                <p className ="middle-p">{followers ? followers : 0}</p>
                <p className ="middle-p">{following ? following : 0}</p>
            </div>
            </div>


            <div className = "bottom-div">
                <p className = "layer1"><MdIcons.MdLocationPin className ="icon"/>{location ? location : "Not available"}</p>
                <p className = "layer3"><IoIcons.IoLogoTwitter className ="icon"/>{twitter ? twitter : "Not available"}</p>
            </div>
            <div className = "bottom-div">
                <p className = "layer2"><HiIcons.HiLink className ="icon"/>{blog ? blog : "Not available"}</p>
                <p className = "layer4"><RiIcons.RiBuildingFill className ="icon"/>{company ? company : "Not available"}</p>
            </div>
            </div>
            </div>
      
       ) }
       
           
        </div>

    )
}

export default Search
