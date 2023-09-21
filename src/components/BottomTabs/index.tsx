import { View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: require('../../assets/HomeActive.png') as ImageSourcePropType,
    inactive: require('../../assets/Home.png') as ImageSourcePropType
  },
  {
    name: 'Search',
    active: require('../../assets/SearchActive.png') as ImageSourcePropType,
    inactive: require('../../assets/Search.png') as ImageSourcePropType
  },
  {
    name: 'Reels',
    active: require('../../assets/Reels.png') as ImageSourcePropType,
    inactive: require('../../assets/ReelsActive.png') as ImageSourcePropType  // Use a imagem correta para a inativa
  },
  {
    name: 'Like',
    active: require('../../assets/LikeActive.png') as ImageSourcePropType,
    inactive: require('../../assets/Like.png') as ImageSourcePropType
  },
]

interface BottomProps {
  icons: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
    name: string;
  }[];
}

const BottomTabs: React.FC<BottomProps> = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('[]')

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveTab(icon.name)}
        >
          <Image
            source={activeTab === icon.name ? icon.active : icon.inactive}
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
})

export default BottomTabs
