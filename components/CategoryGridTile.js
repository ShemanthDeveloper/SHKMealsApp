import { Pressable,View,Text,StyleSheet,Platform } from "react-native"

function CategoryGridTile({title,color,onPress}){
    return(
        <View style={styles.gridItem}>
            <Pressable
             android_ripple={{color:'#ccc'}} 
             onPress={onPress}
             style={({pressed})=>[styles.button, 
             pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer ,{ backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )

}

export default CategoryGridTile

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8, //it move to innerContainer for ios
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Platform.OS === 'ios' ? 8 :0,
    },
    button:{
        flex:1,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    buttonPressed:{
        opacity:0.5,
    }
})