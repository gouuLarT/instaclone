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
    <View style={{ marginLeft: 10 }}>
      <Divider
        width={1}
        orientation="vertical"
        style={{ marginBottom: 5 }} />
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
        margin: 5
      }}
    >
      <Image
        source={{ uri: post.imageURL }}
        style=
        {{
          width: 35,
          height: 35,
          borderWidth: 1,
          borderColor: '#F7A34B',
          borderRadius: 50,
        }}
      />
      <Text
        style=
        {{ 
        color: 'black', 
        fontWeight: '600',
        paddingRight: 280 
        }}
        >{post.user}
        </Text>
        <View>
          <Text style={{ color: 'black', fontWeight: '900', marginRight: 8 }}>...</Text>
        </View>
    </View>
  );
}

export default Post