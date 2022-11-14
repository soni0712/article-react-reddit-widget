import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import './App.css';


//chatbot start
const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  }, {
    id: '1',
    message: 'Please write your username',
    trigger: '2'
  }, {
    id: '2',
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " hi {previousValue}, how can I help you?",
    trigger: 4
  }, {
    id: '4',
    options: [
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },

    ],
    end: true
  }
];
//chatbot close
// Render each post
// function renderPost(post) {
//   const { data: { title, url, author, id } } = post
//   const authorUrl = `https://www.reddit.com/u/${author}`

//   return (
//     <div className="reddit_widget__post" key={id}>
//       <div className="reddit_widget__posted_by">
//         posted by <a href={authorUrl} className="reddit_widget__posted_by" target="_blank" rel="noopener noreferrer">u/{author}</a>
//       </div>
//       <a href={url} className="reddit_widget__title" target="_blank" rel="noopener noreferrer">{title}</a>
//     </div>
//   )
// }

// Filter, since reddit always returns stickied posts up top
// function nonStickiedOnly(post) {
//   return !post.data.stickied
// }

function App({ domElement }) {
  // const subreddit = domElement.getAttribute("data-subreddit")
  // const [loading, setLoading] = useState();
  // const [error, setError] = useState('');
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from reddit
  //   setLoading(true)
  //   fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data.data.children.slice(0, 10));
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //       setLoading(false);
  //       setError('error fetching from reddit');
  //     });
  // }, [subreddit])

  return (
    <div className="reddit_widget__app">
      <div className="App">
        <h1>Welcome to Sheelafoam</h1>
        <ChatBot steps={steps} />
      </div>
      {/* <h1 className="reddit_widget__header">
        Latest posts in <a href={`https://reddit.com/r/${subreddit}`} rel="noopener noreferrer">/r/{subreddit}</a>
      </h1> */}
      {/* <div className="reddit_widget__inner">
        {loading && "Loading..."}
        {error && error}
        {!!data.length && data.filter(nonStickiedOnly).map(renderPost)}
      </div> */}

    </div>
  );
}

export default App;
