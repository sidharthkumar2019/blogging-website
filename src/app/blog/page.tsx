import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import React from 'react';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post} >
        <PostCard />
      </div>
      <div className={styles.post} >
        <PostCard />
      </div>
      <div className={styles.post} >
        <PostCard />
      </div>
      <div className={styles.post} >
        <PostCard />
      </div>
    </div >
  )
}

export default BlogPage
