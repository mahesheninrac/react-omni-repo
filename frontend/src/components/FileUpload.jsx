import React from "react";

function FileUpload() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setuser({ ...user, photo: file });
    console.log(file);
  };

  const formSubmitHandler = (e) => {
    e.preventDefaullt();
    const formData = new FormData();
    formData.append("photo", user.photo);
    formData.append("name", user.name);
    formData.append("email", user.email);

    console.log(user.photo);

    axios
      .post("http://localhost:5000/users/add", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="" onSubmit={formSubmitHandler}>
        <input type="file" name="photo" onChange={handleFileUpload} id="" />
        <input
          type="text"
          value={user.name}
          onChange={handleFormChange}
          name="name"
          id=""
        />
        <input
          type="text"
          value={user.email}
          onChange={handleFormChange}
          name="email"
          id=""
        />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default FileUpload;
