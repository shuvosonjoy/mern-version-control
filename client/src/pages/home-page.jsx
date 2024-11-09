
import Search from "../components/search";
import SortRepos from "../components/sort";
import ProfileInfo from "../components/profile-info";
import Repos from "../components/repos";
import Spinner from "../components/spinner";


const HomePage = () => {
	return (
		<div className='m-4'>
           <Search/>
           <SortRepos/>
		
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
                <ProfileInfo/>
                <Repos/>
                <Spinner/>
				
			</div>
		</div>
	);
};

export default HomePage;



