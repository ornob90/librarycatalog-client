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
import usePut from "../../hooks/usePut";

const BookForm = ({ method, bookId = 12, bookToUpdate }) => {
  const [book, setBook] = useState(bookToUpdate || {});

  const { data: categories, isLoading } = useGet(
    ["CategoriesName"],
    "/categories-name"
  );

  const { mutateAsync: addBook } = usePost(
    [["BooksDataByCategory", "History"]],
    "/book"
  );

  const { mutateAsync: updateBook } = usePut(
    [["BookDetails", bookId]],
    `/book/${bookId}`
  );

  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory((categories && categories[0]?.name) || "NA");
  }, [categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);

    // Extract form values into an object using object destructuring
    // const book = Object.fromEntries(formData);

    console.log(book);

    // try {
    //   if (method === "POST") {
    //     await toast.promise(addBook(book), {
    //       loading: "Adding book...",
    //       success: "Book added successfully!!",
    //       error: "Failed to add book",
    //     });
    //   } else if (method === "PUT") {
    //     await toast.promise(updateBookQuantity(updateBook(book)), {
    //       loading: "Updating book...",
    //       success: "Book updated successfully!",
    //       error: "Failed to update book",
    //     });
    //   }
    // } catch (error) {
    //   toast.error("Oops!! Somethings gone wrong!!");
    // }

    // await addBook(book);
    // toast.success("Successfully toasted!");
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
        value={book?.name || ""}
        onChange={handleChange}
      />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        name="category"
        className="md:col-span-1 bg-white"
        value={book?.category || ""}
        onChange={handleChange}
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
        value={book?.author_name || ""}
        onChange={handleChange}
      />
      <TextField
        required
        name="quantity"
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        className="md:col-span-1  bg-white"
        value={book?.quantity || ""}
        onChange={handleChange}
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
        value={book?.rating || ""}
        onChange={handleChange}
      />
      <TextField
        required
        name="image"
        id="outlined-basic"
        label="Photo URL"
        variant="outlined"
        className="md:col-span-3  bg-white"
        value={book?.image || ""}
        onChange={handleChange}
      />
      <TextField
        required
        name="short_description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        className="md:col-span-3  bg-white"
        value={book?.short_description || ""}
        onChange={handleChange}
      />
      <TextareaAutosize
        required
        name="content"
        aria-label="minimum height"
        minRows={3}
        placeholder="Content"
        className="md:col-span-3 md:row-span-2 border border-[#212121]/30 focus:outline-none pl-3 py-2 text-[#666666] rounded-md"
        value={book?.content || ""}
        onChange={handleChange}
      />
      <Button className="col-span-3 border border-black py-2 mt-2 bg-black text-white hover:bg-white hover:text-black">
        Submit
      </Button>
    </form>
  );
};

export default BookForm;
