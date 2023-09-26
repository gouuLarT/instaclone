import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, Modal } from "react-native";
import { Divider } from 'react-native-elements';
import styles from "./styles";

interface PostProps {
  post: {
    imageURL: string;
    user: string;
    profilepic: string;
    imageurl: string;
    likes: number;
    caption: string;
    comments: string | { user: string; comment: string }[];
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
      <View style={{ marginTop: 15 }}>
        <PostFooter post={post} />
        <View style={{ marginLeft: 10 }}>
          <Likes post={post} />
          <Caption post={post} />
          <CommentSection post={post} />
        </View>
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
    imageurl: require('../../assets/Like.png')
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
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10 }}>
      <View style={{ flexDirection: 'row' }}>
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

const Likes: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Text style={{ fontWeight: '500' }}>{post.likes.toString()} likes</Text>
    </View>
  )
}

const Caption: React.FC<PostProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 70;
  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <Text style={{ marginRight: 5, fontWeight: 'bold' }}>
        {post.user}
      </Text>
      <Text numberOfLines={isExpanded ? 0 : 2}>
        {isExpanded ? post.caption : (post.caption.length > maxLength ? post.caption.substring(0, maxLength) + "..." : post.caption)}
      </Text>
      {post.caption.length > maxLength && (
        <TouchableOpacity onPress={toggleText}>
          <Text style={{ color: 'blue' }}>{isExpanded ? "Less" : "More"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const CommentsModal = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <View style={styles.containerModal}>
      <Modal
        animationType="fade"
        onRequestClose={() => setModalActive(false)}
        transparent={true}
        visible={modalActive}
      >
        <View style={styles.outerView}>
          <View style={styles.modalView}></View>
        </View>
      </Modal>
    </View>
  )
}

const CommentSection: React.FC<PostProps> = ({ post }) => {

  if (post.comments && post.comments.length > 0) {
    return (
      <View style={{ marginTop: 5 }}>
        <TouchableOpacity>
          <Text style={{ color: '#00000080' }}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
            {post.comments.length > 1 ? ' comments' : 'comment'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
}

export default Post;