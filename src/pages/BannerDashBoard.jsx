import React, { useEffect, useState } from "react";
import { FileInput, Button, Label, TextInput } from "flowbite-react";
import axios from "axios";

const BannerDashBoard = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [dataBanner, setDataBanner] = useState([]);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [itemData, setItemData] = useState();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", description);
    formData.append("image", bannerImage);

    try {
      await axios.post("http://localhost:3000/banner-post", formData);
      setCheck(!check);
      console.log("first");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const dataList = await axios.get(`http://localhost:3000/banner-get`);
        setDataBanner(dataList.data);
        // console.log(dataList.data[0].image.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [check]);

  const handleEdit = (items) => {
    setItemData(items._id);
    console.log(items);
    setShow(!show);
  };

  const handleUpdate = async () => {
    try {
      const data = {
        title,
        subtitle,
        description,
        // id: "6899f55a73543bec84bb6230",
      };
      const id = itemData;

      await axios.put(`http://localhost:3000/banner-update/${id}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (items) => {
    console.log(items);

    const userConfirmed = window.confirm("Do you want to delete?");
    console.log("deleted", items.id);
    if (userConfirmed) {
      try {
        await axios
          .delete(`http://localhost:3000/banner-delete/${items.id}`, {
            data: { imageName: items.imageName },
          })
          .then(() => {
            setCheck(!check);
          });
      } catch (error) {
        console.log(error);
      }
      console.log("user deleted successfully");
    } else {
      console.log("delete cancel");
    }
  };

  return (
    <>
      <div className="border-2 m-10 rounded-lg p-6">
        BannerDashBoard
        <div className="w-[500px] space-y-3">
          <FileInput
            onChange={(e) => setBannerImage(e.target.files[0])}
            id="file-upload"
          />

          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            id="email1"
            type="email"
            placeholder="Banner Title"
            required
          />
          <TextInput
            onChange={(e) => setSubtitle(e.target.value)}
            id="email1"
            type="email"
            placeholder="Banner Subtitle"
            required
          />
          <TextInput
            onChange={(e) => setDescription(e.target.value)}
            id="email1"
            type="email"
            placeholder="Banner Description"
            required
          />

          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className=" max-w-[1000px] mx-auto ">
        <div className="mb-3 flex justify-between border-[1px] border-solid p-2.5">
          <h2 className="text-xl font-bold text-gray-700">Image</h2>
          <h2 className="text-xl font-bold text-gray-700">Title</h2>
          <h2 className="text-xl font-bold text-gray-700">Subtitle</h2>
          <h2 className="text-xl font-bold text-gray-700">Description</h2>
        </div>

        <div>
          {dataBanner.map((items, index) => (
            <div key={index}>
              <div className="flex justify-between border-[1px] border-solid p-2.5">
                <div>
                  <img
                    onChange={(e) => setBannerImage(e.target.files[0])}
                    className="w-[100px] h-[100px] object-cover"
                    src={items.image.data.toString("base64")}
                    alt="no image"
                  />
                </div>
                <h1 className="text-xl font-sm text-gray-700">{items.title}</h1>
                <p className="text-xl font-sm text-gray-700">
                  {items.subtitle}
                </p>
                <a className="text-xl font-sm text-gray-700" href="">
                  {items.description}
                </a>
                <h2 className="text-xl font-sm text-gray-700">
                  <i
                    onClick={() => handleEdit(items)}
                    className="fa-solid fa-pen-to-square"
                  ></i>
                  <i
                    onClick={() => handleDelete(items)}
                    className="fa-solid fa-circle-xmark"
                  ></i>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* delete section */}

      {show ? (
        <div className="border-[1px] p-8 bg-gray-500 w-[600px] ">
          <div className="w-[500px] space-y-3">
            <FileInput
              onChange={(e) => setBannerImage(e.target.files[0])}
              id="file-upload"
            />

            <TextInput
              onChange={(e) => setTitle(e.target.value)}
              id="email1"
              type="email"
              placeholder="Banner Title"
              required
            />
            <TextInput
              onChange={(e) => setSubtitle(e.target.value)}
              id="email1"
              type="email"
              placeholder="Banner Subtitle"
              required
            />
            <TextInput
              onChange={(e) => setDescription(e.target.value)}
              id="email1"
              type="email"
              placeholder="Banner Description"
              required
            />

            <Button
              onClick={() => {
                handleUpdate();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BannerDashBoard;
