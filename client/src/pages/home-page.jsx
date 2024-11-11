import toast from "react-hot-toast";

import Search from "../components/search";
import SortRepos from "../components/sort";
import ProfileInfo from "../components/profile-info";
import Repos from "../components/repos";
import Spinner from "../components/spinner";

import { useState, useEffect, useCallback } from "react";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserProfilAndRepos = useCallback(async (username="shuvosonjoy") => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const user = await res.json();
      setUserProfile(user);

      const reposRes = await fetch(user.repos_url);
      const reposData = await reposRes.json();
      setRepos(reposData);

      console.log("userProfile: ", user);
      console.log("repos: ", reposData);
	  console.log(repos.length);
	  return {userProfile,repos};

    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, []);



  const onSearch=async(e,username)=>{
	console.log(username);
	e.preventDefault();
	setLoading(true);
	setUserProfile(null);
	setRepos([]);
	const {userProfile,repos}= await getUserProfilAndRepos(username);
	// setUserProfile(userProfile);
	// setRepos(repos);
	setLoading(false);
	console.log("from function: ",userProfile,repos);
	

  }

  const onSort = async(sortType)=>{
	if(sortType==="recent"){
	repos.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));}
	else if(sortType==="stars"){
		repos.sort((a,b)=>b.stargazers_count-a.stargazers_count);}
	else if(sortType==="forks"){
		repos.sort((a,b)=>b.forks_count-a.forks_count);}
	setSortType(sortType);
	setRepos([...repos]);


  }

  useEffect(() => {
    getUserProfilAndRepos();
  }, [getUserProfilAndRepos]);
  return (
    <div className="m-4">
      <Search onSearch={onSearch}/>
 {repos.length>0 &&      <SortRepos onSort={onSort} sortType={sortType}/>}

      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
	
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
