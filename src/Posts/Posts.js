import React from 'react'
import axios from 'axios';
import Post from './Post';

class Posts extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const res = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10');
    // this.state.posts = res.data; //Not good
    this.setState({
      posts: res.data
    });
  }

  render() {
    //const posts = this.state.posts;
    const { posts } = this.state;
    return (
      <div className="post-list">
        { posts.map(post => <Post key={ post.id } postare={post} />) }
      </div>
    );
  }
}

export default Posts;
