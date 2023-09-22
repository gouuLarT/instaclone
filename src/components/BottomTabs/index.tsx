import React, { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import style from "./styles";
import { Divider } from "react-native-elements";

export const BottomTabsIcon = [
  {
    name: 'Home',
    active: require('../../assets/HomeActive.png'),
    inactive: require('../../assets/Home.png')
  },
  {
    name: 'Search',
    active: require('../../assets/SearchActive.png'),
    inactive: require('../../assets/Search.png')
  },
  {
    name: 'Reels',
    active: require('../../assets/ReelsActive.png'),
    inactive: require('../../assets/Reels.png')
  },
  {
    name: 'Like',
    active: require('../../assets/LikeActive.png'),
    inactive: require('../../assets/Like.png')
  }
]

export function BottomTabs() {
  const [activeTab, setActiveTab] = useState("Home")

  const handleTabChange = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginTop: 10, marginBottom: 15, marginLeft: 20 }}>
      {BottomTabsIcon.map((tab, index) => (
        <TouchableOpacity key={index} onPress={() => handleTabChange(tab.name)}>
          <Image
            source={activeTab === tab.name ? tab.active : tab.inactive}
            style={style.icons}
          />
        </TouchableOpacity>
      ))}

    </View>
  )
}

export default BottomTabs
