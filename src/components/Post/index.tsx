import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Divider } from 'react-native-elements';

interface PostProps {
  post: {
    imageURL: string;
    user: string;
    profilepic: string;
    imageurl: string;
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
      <PostImage post={post} />
      <View style={{ marginTop: 10 }}>
        <PostFooter post={post} />
      </View>
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
        source={{ uri: post.profilepic }}
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

const PostImage: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <Image
        source={{ uri: post.imageURL }}
        style={{ height: '100%', resizeMode: 'cover', marginRight: 5 }}
      />
    </View>
  )
}

const PostIcons = [
  {
    name: 'Like',
    imageurl: require('../../assets/Lİke.png')
  },
  {
    name: 'Comment',
    imageurl: require('../../assets/Comment.png')
  },
  {
    name: 'Share',
    imageurl: require('../../assets/SharePosts.png')
  },
  {
    name: 'Save',
    imageurl: require('../../assets/Save.png')
  },
]

const PostFooter: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row'}}>
        <Icon imageurl={PostIcons[0].imageurl} />
        <Icon imageurl={PostIcons[1].imageurl} />
        <Icon imageurl={PostIcons[2].imageurl} />
      </View>
      <View style={{}}>
        <Icon imageurl={PostIcons[3].imageurl} />
      </View>
    </View>
  );
}

const Icon = ({ imageurl }: { imageurl: ImageSourcePropType }) => (
  <TouchableOpacity>
    <Image
      style={{
        width: 20,
        resizeMode: 'contain',
        height: 20,
        marginRight: 15
      }}
      source={imageurl}
    />
  </TouchableOpacity>
)


export default Post