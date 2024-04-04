import { Pressable,StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

function IconButton({icon,color,onPress}){
   return <Pressable style={({pressed})=>pressed? style.pressed :null} onPress={onPress}>
        <FontAwesome name={icon} size={24} color={color} />
   </Pressable>
}

export default IconButton

const style=StyleSheet.create({
    pressed:{
        opacity:0.5,
    }
})