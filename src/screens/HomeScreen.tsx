import { SafeAreaView, ScrollView, View } from "react-native";
import * as React from "react";
import { Header } from "../components/HomeHeader";
import { Stories } from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../../data/POST";

export function Home(post: any) {
  return (
      <ScrollView>
        <Header />
        <Stories />
        {POSTS.map((post: any, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
  )
}
