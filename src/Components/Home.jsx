import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h1>This is the total amount of phones {phones.length}</h1>{" "}
    </div>
  );
}
