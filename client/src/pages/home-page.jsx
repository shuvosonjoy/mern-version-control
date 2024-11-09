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

  const getUserProfilAndRepos = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.github.com/users/shuvosonjoy");
      const user = await res.json();
      setUserProfile(user);

      const reposRes = await fetch(user.repos_url);
      const reposData = await reposRes.json();
      setRepos(reposData);

      console.log("userProfile: ", user);
      console.log("repos: ", reposData);
	  console.log(repos.length);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfilAndRepos();
  }, [getUserProfilAndRepos]);
  return (
    <div className="m-4">
      <Search />
      <SortRepos />

      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
	
        {repos.length > 0 && !loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
