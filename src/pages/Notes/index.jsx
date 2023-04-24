import React, { useState } from 'react';
import EmptyList from '../../components/EmptyList';
import BlogList from '../../components/BlogList';
import { blogList } from '../../assets/config/data';

import "./style.scss"

const Notes = () => {
  const [blogs] = useState(blogList);

  return (
    <div className="notes">
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Notes;
