import user from './user.json';
import Profile from './user/Profile';
import Statistics from './Statistics/Statistics';
import data from './data.json';



export default function Container() {
    return(<div><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    /> 
<Statistics title="Upload stats" stats={data} />
    </div>
    )
}