import { View ,Text,Pressable,Image,StyleSheet,Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigation = useNavigation()
     function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId:id
        })
     }

    
    return<View style={styles.mealItem}>
        <Pressable
        onPress={selectMealItemHandler}
        style={({pressed})=>
            pressed ? styles.buttonPressed : null}
        android_ripple={{color:"#ccc"}}>
            <View style={styles.innerContainer}>
            <View>
                <Image style={styles.image} source={{uri:imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
            </View>
           <MealDetails complexity={complexity} affordability={affordability} duration={duration}/>
            </View>
        </Pressable>
        
    </View>
}

export default MealItem;

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    buttonPressed:{
        opacity:0.5
    }
})