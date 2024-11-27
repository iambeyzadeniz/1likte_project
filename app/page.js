"use client";
import MainContent from "@/components/MainContent";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <MainContent searchQuery={searchQuery} />
      <Footer />
    </>
  );
}
