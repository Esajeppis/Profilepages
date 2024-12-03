import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id === parseInt(id!));

  if (!post) {
    return <p className="text-light text-center">Post not found!</p>;
  }

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <h1 className="fw-bold">{post.title}</h1>
        <p className="text-muted small">{post.date}</p>
        <hr style={{ backgroundColor: "white" }} />
        <p>{post.content}</p>
        <Link to="/blog" className="btn btn-outline-light mt-4">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
