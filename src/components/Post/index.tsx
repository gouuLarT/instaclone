import React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from 'react-native-elements';

interface PostProps {
  post: { 
    imageURL: string;
    user: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, marginLeft: 10 }}>
      <Divider
        width={1}
        orientation="vertical"
        style={{ marginBottom: 20 }} />
      <PostHeader post={post} />

    </View>
  )
}

const PostHeader: React.FC<PostProps> = ({ post }) => {
  return (
    <View 
    style={{ 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    margin: 5 }}
    >
      <Image
        source={{ uri: post.imageURL }}
        style={{ width: 35, height: 35 }} />
      <Text
        style={{ color: 'black' }}>{post.user}</Text>
    </View>
  );
}

export default Post