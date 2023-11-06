import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Button from "../Shared/Button";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import toast from "react-hot-toast";

const BookForm = () => {
  const { data: categories, isLoading } = useGet(
    ["CategoriesName"],
    "/categories-name"
  );

  const { mutateAsync: addBook } = usePost(
    [["BooksDataByCategory", "History"]],
    "/book"
  );

  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory((categories && categories[0]?.name) || "NA");
  }, [categories]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Extract form values into an object using object destructuring
    const book = Object.fromEntries(formData);

    await addBook(book);
    toast.success("Successfully toasted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%]  mx-auto flex flex-col gap-4 lg:grid grid-cols-3 mt-4 -z-1"
    >
      <TextField
        required
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className=" md:col-span-2 md:row-span-1 bg-white "
      />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        name="category"
        className="md:col-span-1 bg-white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories?.map(({ name, _id }) => (
          <MenuItem key={_id} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        required
        name="author_name"
        id="outlined-basic"
        label="Author"
        variant="outlined"
        className="md:col-span-1 md:row-span-1 bg-white"
      />
      <TextField
        required
        name="quantity"
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        className="md:col-span-1  bg-white"
      />

      <TextField
        required
        name="rating"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        className=" md:col-span-1  bg-white"
        type="number"
        min={0}
        max={5}
      />
      <TextField
        required
        name="image"
        id="outlined-basic"
        label="Photo URL"
        variant="outlined"
        className="md:col-span-3  bg-white"
      />
      <TextField
        required
        name="short_description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        className="md:col-span-3  bg-white"
      />
      <TextareaAutosize
        required
        name="content"
        aria-label="minimum height"
        minRows={3}
        placeholder="Content"
        className="md:col-span-3 md:row-span-2 border border-[#212121]/30 focus:outline-none pl-3 py-2 text-[#666666] rounded-md"
      />
      <Button className="col-span-3 border border-black py-2 mt-2 bg-black text-white hover:bg-white hover:text-black">
        Submit
      </Button>
    </form>
  );
};

export default BookForm;
