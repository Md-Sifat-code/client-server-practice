import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const { phones, users: initialUsers } = useLoaderData(); // Destructure phones and initial users
  const [users, setUsers] = useState(initialUsers); // Create state for users

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };

    fetch("http://localhost:7000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New user added:", data);
        setUsers([...users, data]); // Update the users state to include the new user
        form.reset(); // Reset the form after submission
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>This is the total amount of phones: {phones.length}</h1>
      <form onSubmit={handlesubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add User</button>
        </div>
      </form>
      <div className="border border-red-600 mt-6 w-40 flex flex-col justify-center items-center">
        <h1>Total Users: {users.length}</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
