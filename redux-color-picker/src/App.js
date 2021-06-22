
 import React, { useEffect, useState } from 'react';
 import { connect } from 'react-redux';
 import { fetchPosts } from '../actions/postActions';

 const Posts = (props) => {

    const [data, setData] = useState([]);


   useEffect(() => {
    if(props.fetchPosts()){
      let dupData = [...data]
      dupData.unShift(props.newPost)
      setData(dupData)
    }

 },[props.newPost]) 

 console.log('new post',props.newPost)
 let updatedPosts = [data, ...props.posts]
 const postItems = updatedPosts.map((item, index) => (
    <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.body}</p> 
    </div>
 ))

 return (
    <div>
        <h1>Posts</h1>
        {postItems}
    </div>
  )
}

 const mapStateToProps = state => ({
   posts: state.posts.items, 
   newPost: state.posts.item 
 })
 export default connect(mapStateToProps, { fetchPosts })(Posts);
