import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};
const features = [
  "Edit post: This highly requested feature gives you a 1 hour window to make a limited number of changes to published posts. Use it to make updates, tag someone, or reorder the media you attached. ",
  "Longer posts: Want to post more than 280 characters? Longer posts allow subscribers to post up to 25,000 characters. You can also compose longer posts in a quote or reply. ",
  "Longer video uploads: Share more content with your followers.",
];
export default function SubscriptionModal({ open, handleClose }) {
  const [plan, setPlan] = React.useState("Annually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[100%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-900">
                <h1 className="text-xl pr-5 text-white">
                  Blue subscribers with verified phone number will get a blue
                  tick after verification.
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-instagram-bule-tick-insta-blue-star-vector-png-image_6695210.png"
                  alt=""
                />
              </div>

              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-700">
                <div>
                  <span
                    onClick={() => {
                      setPlan("Annually");
                    }}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    }  cursor-pointer`}
                  >
                    Annualy
                  </span>
                  <span className="text-green-500 text-sm ml-5 ">Save 12%</span>
                </div>
                <p
                  onClick={() => {
                    setPlan("Monthly");
                  }}
                  className={`${
                    plan === "Monthly" ? "text-black" : "text-gray-400"
                  }  cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{item} </p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-700 text-white rounded-full px-5 py-3">
                <span className="line-through italic">₹8000</span>
                <span className="px-5">₹6000/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
