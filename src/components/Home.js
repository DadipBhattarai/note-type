import React from "react";
import AddInput from "./AddInput";
import Header from "./Header";
import NoteList from "./NoteList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddInput />
      <NoteList />
    </div>
  );
};

export default Home;
