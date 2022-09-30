import React from "react";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

import { postsData } from './data.js'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postsData.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
