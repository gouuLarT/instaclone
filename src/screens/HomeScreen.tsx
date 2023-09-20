import { View, SafeAreaView, Text, ScrollView } from "react-native";
import * as React from "react";
import { Header } from "../components/Header";
import { Stories } from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../../data/POST";

export function Home() {
    return (
        <SafeAreaView>
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
