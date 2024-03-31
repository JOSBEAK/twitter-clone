import { MoreHoriz, SearchOutlined } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Button from "@mui/material/Button";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
import { useState } from "react";

const RightSection = () => {
  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
  const handleSubscriptionModalOpen = () => setOpenSubscriptionModal(true);
  const handleSubscriptionModalClose = () => setOpenSubscriptionModal(false);
  const handleChangeTheme = () => {};
  return (
    <div className="sticky top py-5">
      <div className="relative flex  items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchOutlined className="text-gray-500" />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          onClick={handleSubscriptionModalOpen}
        >
          Get Verified
        </Button>
      </section>

      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What is happening</h1>
        <div>
          <p className="text-sm">Fifa Women WorldCup - LIVE</p>
          <p className="font-bold">Fifa Women WorldCup - LIVE</p>
        </div>
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entertainment . Trending</p>
              <p className="font-bold">#TheMarvels</p>
              <p>34.3k Tweets</p>
            </div>
            <MoreHoriz />
          </div>
        ))}
      </section>
      <section>
        <SubscriptionModal
          open={openSubscriptionModal}
          handleClose={handleSubscriptionModalClose}
        />
      </section>
    </div>
  );
};

export default RightSection;
