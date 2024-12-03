import React from "react";
import { blogPosts } from "../data/blogData";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-5" style={{ minHeight: "87vh" }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Blog</h1>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card" style={{ backgroundColor: "#33363b" }}>
                <div className="card-body">
                  <h4 className="card-title text-white">{post.title}</h4>
                  <p className="text-light small">{post.date}</p>
                  <p className="card-text text-light">{post.summary}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-outline-light"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

