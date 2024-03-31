import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import Modal from "@mui/material/Modal";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ open, handleClose }) {
  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: "",
    },
    onSubmit: handleSubmit,
  });
  const handleSelectImage = (e) => {
    setUploadingImage(true);
    const imgUrl = e.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5 ">
            <Avatar
              onClick={() => navigate(`/profile/${5}`)}
              className="cursor-pointer"
              alt="username"
              src="https://img00.deviantart.net/dd90/i/2016/363/f/1/goku_ssj2_v2___dbkai___render_by_fradayesmarkers-dataoid.png"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">Anurag Pandey</span>
                  <span className="text-gray-600">@drecothea</span>
                </div>
              </div>
              <div className="mt-2">
                <div
                  onClick={() => navigate(`/tweet/${3} `)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">content</p>
                </div>
              </div>
            </div>
          </div>
          <section className="pb-10">
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://img00.deviantart.net/dd90/i/2016/363/f/1/goku_ssj2_v2___dbkai___render_by_fradayesmarkers-dataoid.png"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening?"
                      className="border-none outline-none text-xl bg-transparent"
                      {...formik.getFieldProps("content")}
                    />{" "}
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <InsertPhotoIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <EmojiEmotionsIcon className="text-[#1d9bf0]" />
                      </label>
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <FmdGoodIcon className="text-[#1d9bf0]" />
                      </label>
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "29px",
                          py: "8px",
                          px: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
