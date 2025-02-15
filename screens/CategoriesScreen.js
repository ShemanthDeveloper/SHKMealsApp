import React from 'react';
import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"



function CategoriesScreen({navigation}){

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile color={itemData.item.color}
        onPress={pressHandler}
         title={itemData.item.title}/>
    }

    return <FlatList data={CATEGORIES} 
    keyExtractor={(item)=> item.id}
   
    renderItem={renderCategoryItem}
    numColumns={2}
    />
   
    

}

export default CategoriesScreen