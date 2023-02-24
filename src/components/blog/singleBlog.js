import { Link } from 'gatsby';
import React from 'react';
import { useDispatch } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const SingleBlog = ({ blog }) => {
    // distructure items
    const { id, img, title, desc, name, date, category, button } = blog;
    // dispatch
    const dispatch = useDispatch();
    // handleBlogDetails
    const handleBlogDetails = () => {
        dispatch(specificBlog(id))
    }
    return (
        <div className="blog-wrapper position-relative mb-30">
            <div className="blog-thumb ">
                <Link to="/blog-details" onClick={handleBlogDetails}><img src={img} alt="blog-img" /></Link>
            </div>
            <Link to="/blog-details" className="blog-tag" onClick={handleBlogDetails}><i className="fal fa-folder-open"></i>{category}</Link>
            <div className="blog-content-wrapper">
                <div className="blog-meta">
                    <div className="blog-date">
                        <i className="flaticon-calendar"></i>
                        <span>{date}</span>
                    </div>
                    <div className="blog-user">
                        <i className="flaticon-avatar"></i>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="blog-content">
                    <Link to="/blog-details" onClick={handleBlogDetails}><h3>{title}</h3></Link>
                    <p>{desc}</p>
                    <Link to="/blog-details" className="blog-btn" onClick={handleBlogDetails}>{button}</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;