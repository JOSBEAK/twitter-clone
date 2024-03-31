import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = useState(0);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <section
        className={`bg-white z-0 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Anurag Pandey
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Anurag Pandey"
            src="https://img00.deviantart.net/dd90/i/2016/363/f/1/goku_ssj2_v2___dbkai___render_by_fradayesmarkers-dataoid.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              className="rounded-full"
              variant="contained"
              sx={{
                borderRadius: "20px",
                py: "8px",
                px: "20px",
                bgcolor: "#1e88e5",
              }}
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              className="rounded-full"
              variant="content"
              sx={{ borderRadius: "20px" }}
              onClick={handleFollowUser}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Anurag Pandey</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png"
              />
            )}
          </div>
          <h1 className="text-gray-500">@drecothea</h1>
          <div className="mt-2 space-y-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus reprehenderit aspernatur ad quo, ipsam harum
              provident quam, non aut vitae. Voluptate sapiente saepe voluptatum
              rerum illum laboriosam nemo officia.
            </p>
            <div className="py-1 flex space-x-5">
              <div className="flex items-center text-gray-500">
                <StorefrontIcon />
                <p className="ml-2">Education</p>
              </div>
              <div className="flex items-center text-gray-500">
                <LocationOnIcon />
                <p className="ml-2">India</p>
              </div>
              <div className="flex items-center text-gray-500">
                <CalendarMonthIcon />
                <p className="ml-2">Joined Jun 2022</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1 font-semibold">
                <span>1100</span>
                <span className="text-gray-500">Following</span>
                <span>1100</span>
                <span className="text-gray-500">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Tweets" {...a11yProps(0)} />
              <Tab label="Replies" {...a11yProps(1)} />
              <Tab label="Media" {...a11yProps(2)} />
              <Tab label="Likes" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {[1, 1, 1, 1, 1].map((item) => (
              <TweetCard />
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Replies
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Media
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Likes
          </CustomTabPanel>
        </Box>
      </section>
      <section>
        <ProfileModal open={openProfileModal} handleClose={handleClose} />
      </section>
    </div>
  );
};

export default Profile;
