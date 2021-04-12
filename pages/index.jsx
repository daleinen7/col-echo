// import { connectToDatabase } from '../util/mongodb'
import Layout from '../components/Layout';
import dbConnect from '../util/dbConnect'
import User from '../models/User';
// import Echo from '../models/Echo';
import Echo from '../components/Echo';
import Post from '../models/Post';

export default function Home({ users, posts }) {
  // console.log(posts);
  return (
    <Layout>

        <ul>
          {posts.map((echo) => (
            <Echo 
              title={echo.title}
              description={echo.title}
              category={echo.category}
              slug={echo.slug}
            />
          ))}
        </ul>
      
    </Layout>
  )
}

// Find user by name from query, then find all posts by that user's name
export async function getServerSideProps(context) {
  await dbConnect()
	const users = await User
		.find({})
  const posts = await Post
    .find({})
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
			users: JSON.parse(JSON.stringify(users)),
    },
  };
}