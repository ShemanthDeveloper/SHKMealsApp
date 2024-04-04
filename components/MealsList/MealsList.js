import { View,StyleSheet,FlatList} from "react-native"
import MealItem from "./MealItem"
function MealsList({items}){

    function renderMealItem(itemData){
        return<MealItem title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        id={itemData.item.id}
        imageUrl={itemData.item.imageUrl}/>
    }


    return(
        <View style={styles.container}>
           <FlatList renderItem={renderMealItem} 
           data={items} 
           keyExtractor={(item)=>item.id}/>
        </View>
    )

}

export default MealsList

const styles=StyleSheet.create({
    container:{
       flex:1,
       padding:16,
    }
})