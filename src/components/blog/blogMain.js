import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../common/pagination';
import BlogSidebar from './blogSidebar';
import SingleBlog from './singleBlog';

const BlogMain = () => {
    const blogs = useSelector(state => state.blogs.blogs);
    return (
        <div className="blog-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <div className="blog-main-wrapper mb-30">
                            <div className="row">
                                <div className="col-xl-12 col-lg-6 col-md-12">
                                    <div className="blog-wrapper position-relative mb-30">
                                        {
                                            blogs.slice(0, 3).map(blog => <SingleBlog key={blog.id} blog={blog} />)
                                        }
                                    </div>
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-8">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMain;