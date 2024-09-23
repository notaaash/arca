import { ScrollView, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from '../constants'



export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="font-libre text-balck text-9xl">Arca</Text>
        </View>
      </ScrollView>
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}


{/* <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Hello World!</Text>
      <Link href="/home" style={{color: 'blue'}}>Go to Profile!</Link>
    </View> */}