import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
const NavigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },
  { title: "Messages", icon: <MessageIcon />, path: "/messages" },
  { title: "Lists", icon: <ListAltIcon />, path: "/lists" },
  { title: "Communities", icon: <PeopleIcon />, path: "/communities" },
  { title: "Verified", icon: <VerifiedIcon />, path: "/verified" },
  { title: "Profile", icon: <AccountCircleIcon />, path: "/profile/5" },
  { title: "More", icon: <MoreHorizIcon />, path: "/more" },
];

export default NavigationMenu;
