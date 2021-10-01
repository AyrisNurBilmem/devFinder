import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NotFound from "./NotFound"

function Search({handleInput, input}) {
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
            <div>
            <input type="text" placeholder="Search Github username..." onChange={handleInput} value ={input}/> 
            <span><button type="submit" onClick = {handleSearch}>Search</button></span>
            </div>
        </form>

        {error  ? <NotFound /> : ( 
            <div>
            <div>
                <img src ={avatar} alt="avatar"/>
                <h6>{name ? name : "Github User"}</h6>
                <p>@{username ? username : "No username"}</p>
                <p>{bio  ? bio : "This profile has no bio"}</p>
            </div>
            
            <div>
                <p>{repos ? repos : 0}</p>
                <p>{followers ? followers : 0}</p>
                <p>{following ? following : 0}</p>
            </div>

            <div>
                <p>{location ? location : "Not available"}</p>
                <p>{blog ? blog : "Not available"}</p>
                <p>{twitter ? twitter : "Not available"}</p>
                <p>{company ? company : "Not available"}</p>
                

            </div>
            </div>
      
       ) }
       
           
        </div>

    )
}

export default Search
