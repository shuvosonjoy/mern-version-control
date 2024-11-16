import dotenv from 'dotenv';

export const userProfile = async (req, res) => {
    dotenv.config();
    const github_token = process.env.GITHUB_API_TOKEN;

    const username = req.params.username;
    // console.log(username);
  try {


    const result = await fetch(`https://api.github.com/users/${username}`
			, {
          headers: {
            authorization: `token ${github_token}`,
          },
        }
	);
        const user = await result.json();
        // console.log(user);
        // console.log(github_token);
        const reposRes = await fetch(user.repos_url);
        const reposData = await reposRes.json();

      return res.status(200).json({ userProfile: user, repos: reposData }); 
  } catch (e) {
    res.status(500).json({error: e.message});
  }
};
