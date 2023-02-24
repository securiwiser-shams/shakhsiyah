import { Link } from 'gatsby';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const BlogSidebar = () => {
    const sidebarBlogs = useSelector(state => state.blogs.blogs);
    const dispatch = useDispatch();
    return (
        <div className="sidebar-widget-wrapper">
            <div className="sidebar__search p-relative mb-30">
                <form action="#">
                    <input type="text" placeholder="Search for courses..." />
                    <button type="submit">
                        <i className="far fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="sidebar__widget mb-30">
                <div className="sidebar__widget-head mb-35">
                    <h4 className="sidebar__widget-title">Recent posts</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc__post-wrapper">
                        {
                            sidebarBlogs.slice(3, 6).map(blog => {
                                return <div key={blog.id} className="rc__post d-flex align-items-center">
                                    <div className="rc__thumb mr-20" onClick={() => dispatch(specificBlog(blog.id))}>
                                        <Link to="/blog-details">
                                            <img src={blog.sm_img} alt="" />
                                        </Link>
                                    </div>
                                    <div className="rc__content">
                                        <div className="rc__meta">
                                            <span>{blog.date}</span>
                                        </div>
                                        <h6 className="rc__title" onClick={() => dispatch(specificBlog(blog.id))}>
                                            <Link to="/blog-details">
                                                {blog.title.substring(0, 40)}...
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-30">
                <div className="sidebar__widget-head mb-35">
                    <h4 className="sidebar__widget-title">Category</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="sidebar__category">
                        <ul>
                            <li><Link to="/blog">Data Science(2)</Link></li>
                            <li><Link to="/blog">Video and Tips (4)</Link></li>
                            <li><Link to="/blog">Education (8)</Link></li>
                            <li><Link to="/blog">Business (5)</Link></li>
                            <li><Link to="/blog">UX Design (3)</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-30">
                <div className="sidebar__widget-head mb-35">
                    <h4 className="sidebar__widget-title">Tags</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="sidebar__tag">
                        <Link to="/blog">Art and Design</Link>
                        <Link to="/blog">Course</Link>
                        <Link to="/blog">Videos</Link>
                        <Link to="/blog">App</Link>
                        <Link to="/blog">Education</Link>
                        <Link to="/blog">Data Science</Link>
                        <Link to="/blog">Machine Learning</Link>
                        <Link to="/blog">Tips</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;