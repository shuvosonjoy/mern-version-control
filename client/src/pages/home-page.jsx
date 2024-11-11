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

  useEffect(() => {
    getUserProfilAndRepos();
  }, [getUserProfilAndRepos]);
  return (
    <div className="m-4">
      <Search onSearch={onSearch}/>
      <SortRepos />

      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
	
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
