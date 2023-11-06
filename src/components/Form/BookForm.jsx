import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Button from "../Shared/Button";

const BookForm = () => {
  return (
    <form className="w-[90%] mx-auto flex flex-col gap-4 lg:grid grid-cols-3 mt-4 -z-1">
      <TextField
        value={""}
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
        value={-1}
        label="Age"
        className="md:col-span-1 bg-white"
      >
        <MenuItem value={-1}>Category</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <TextField
        value={""}
        required
        name="author_name"
        id="outlined-basic"
        label="Author"
        variant="outlined"
        className="md:col-span-1 md:row-span-1 bg-white"
      />
      <TextField
        value={""}
        required
        name="quantity"
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        className="md:col-span-1  bg-white"
      />
      <TextField
        value={""}
        required
        name="rating"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        className="md:col-span-1  bg-white"
      />
      <TextField
        value={""}
        required
        name="short_description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        className="md:col-span-3  bg-white"
      />
      <TextareaAutosize
        value={""}
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
