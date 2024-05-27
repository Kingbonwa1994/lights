import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import  Ionicons  from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { BottomSheet } from '@rneui/themed';



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarBackground : () => (
          <View style={{ backgroundColor: 'yellow', flex: 1, borderRadius: 20, marginHorizontal: 8 }} /> 
        )
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          
          title: 'Lumeno',
          headerStyle : {
            backgroundColor: '#FFFF00',
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ pressed }: any) => (<Entypo name="home" size={24}  color={Colors[colorScheme ?? 'light'].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
         />),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome name="search" size={24}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ pressed }: any) => (<Ionicons name="grid" size={24}  color={Colors[colorScheme ?? 'light'].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
         />),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon:  ({ pressed }: any) => (
            <FontAwesome
              name="shopping-cart"
              size={25}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, marginBottom: 0, shadowOpacity: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ pressed }: any)=> (<FontAwesome name="heart" size={24} color={Colors[colorScheme ?? 'light'].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>)
        }}
      /><Tabs.Screen
      name="notifications"
      options={{
        title: 'Notifications',
        tabBarIcon:  ({ pressed }: any) => (
          <Ionicons name="notifications" size={24} color={Colors[colorScheme ?? 'light'].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
        ),
      }}
    />
    </Tabs>
  );
}
