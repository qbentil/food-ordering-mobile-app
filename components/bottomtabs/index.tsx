import { AntDesign } from '@expo/vector-icons';
import CartScreen from '../../screens/Cart';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import { Profiler } from 'react';
import SearchScreen from '../../screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: '#000',
            headerTitleContainerStyle: {
                display: 'none'
            }
        }}>
        <Tabs.Screen name="Home" component={HomeScreen} options= {{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Cart" component={CartScreen} options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="shoppingcart" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Search" component={SearchScreen} options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="search1" color={color} size={size} />
            )
        }} />
        <Tabs.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
                <AntDesign name="user" color={color} size={size} />
            )
        }} />
        </Tabs.Navigator>
    );
}

export default BottomTabs;