import { ScrollView } from "react-native";
import * as React from "react";


import ProfileHeader, { Profile } from "../components/ProfileHeader";

export function ProfileScreen(post: any) {
  return (
    <ScrollView>
      <ProfileHeader post={post} selectedUser={""} />
      <Profile post={post} />
    </ScrollView>
  )
}
