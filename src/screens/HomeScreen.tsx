import { SafeAreaView, ScrollView, View } from "react-native";
import * as React from "react";
import { Header } from "../components/Header";
import { Stories } from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../../data/POST";
import BottomTabs from "../components/BottomTabs";

export function Home() {
  return (
      <ScrollView>
        <Header />
        <Stories />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
  )
}
