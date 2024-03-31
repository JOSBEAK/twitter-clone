import Avatar from "@mui/material/Avatar";
import { useFormik } from "formik";
import * as Yup from "yup";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@mui/material/Button";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useState } from "react";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet Text is required"),
});
const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (e) => {
    setUploadingImage(true);
    const imgUrl = e.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
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
                  <span className="text-red-500">{formik.errors.content}</span>
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
      <div>
        <TweetCard />
      </div>
    </div>
  );
};

export default HomeSection;
