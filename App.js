import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator()

function DrawerNavigator(){
  return<Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#e4baa1'
  }}>
    <Drawer.Screen  name="Categories" component={CategoriesScreen}
    options={{
      title:'All Categories',
      drawerIcon:({color,size})=><EvilIcons name="navicon" size={24} color="white" />
    }}/>
    <Drawer.Screen name="Favorites"
    options={{
      drawerIcon:({color,size})=><FontAwesome name="star" size={24} color="white" />
    }}
     component={FavoritesScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}

        }}
      >
        <Stack.Screen
         name="Drawer"
         component={DrawerNavigator}
         options={{
          headerShown:false
         }}/>

         <Stack.Screen name="MealsOverview"
         component={MealsOverviewScreen} 
         />

         <Stack.Screen name="MealDetail"
          component={MealDetailScreen}
          options={{
            title:"About the Meal"
           }}/>
    </Stack.Navigator>
      
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
