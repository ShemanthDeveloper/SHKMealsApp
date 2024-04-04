import { useLayoutEffect,useContext } from "react"
import { View ,Text,Image,StyleSheet,ScrollView,Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavoritesContext} from '../store/context/favorites-context'
function MealDetailScreen({route,navigation}){
    const favoriteMealsCtx=useContext(FavoritesContext);
    const mealId=route.params.mealId;
    const selectdMeal=MEALS.find((meal)=>meal.id===mealId)

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function changeFavoritesStatusHandler(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId);
        }else{
            favoriteMealsCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={changeFavoritesStatusHandler}
                 icon="star" color={mealIsFavorite?"yellow":"white"} />
            }
        })
    },[navigation,changeFavoritesStatusHandler])
   
   return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectdMeal.imageUrl}}/>
        <Text style={styles.title}>{selectdMeal.title}</Text>
        <MealDetails textStyle={styles.detailText} affordability={selectdMeal.affordability}  complexity={selectdMeal.complexity} duration={selectdMeal.duration}/>
           <View style={styles.listsContainer}>
           <View style={styles.listContainer}>
           <Subtitle>Ingredients</Subtitle>
            <List data={selectdMeal.ingredients}/>
            </View>
            <View style={styles.listContainer}>
            <Subtitle>Steps</Subtitle>
            <List data={selectdMeal.steps}/>
            </View>
            </View>
    </ScrollView>
}

export default MealDetailScreen

const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:22,
    },
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        margin:8,
        fontSize:24,
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listContainer:{
        width:'80%',   
    },
    listsContainer:{
        alignItems:'center'
    }
    
})