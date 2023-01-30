import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      setpost(res.data);
      console.log(res.data);
    };
    fetchPost();
  }, []);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />

      <h1 className="feed">BLOG FEEDS</h1>
      <div className="home">
        <Posts post={post} />
        <Sidebar />
      </div>
    </>
  );
}
