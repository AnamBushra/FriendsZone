import "./sidebar.css"
import { Feed,ChatBubble,Videocam,Groups,Bookmark ,Quiz,Work,Event,School} from "@mui/icons-material"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <Feed className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <ChatBubble className="sidebarIcon"/>
                <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                <Videocam className="sidebarIcon"/>
                <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                <Groups className="sidebarIcon"/>
                <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                <Bookmark className="sidebarIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                <Quiz className="sidebarIcon"/>
                <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                <Work className="sidebarIcon"/>
                <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                <Event className="sidebarIcon"/>
                <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                <School className="sidebarIcon"/>
                <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                 {Users.map(u=>(
                  <CloseFriend key={u.id} user={u}/>
                 ))}
                    
                </ul>
        </div>
    </div>
  )
}
