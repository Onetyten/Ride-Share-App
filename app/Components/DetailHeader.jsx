import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { router } from 'expo-router';
import { AppContext,AppProvider } from '../Context';

const DetailHeader = (props) => {
    const {carListings,detailsIndex,bookmark,setBookmark} = useContext(AppContext)
    const {name} = props
  return (
    <View>
        <View className='flex-row justify-between px-4'>
        <TouchableOpacity style={{padding:10, paddingHorizontal:12 ,borderRadius:100,backgroundColor:'#FF934F22'}} onPress={()=>{router.back()}} >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color='#ffffff'/>  
        </TouchableOpacity>
        

        <Text className='text-primary font-QuickSand text-xl'>
            {name}
        </Text>
        <TouchableOpacity className='border-2 border-primary' style={{padding:10,borderRadius:100}} onPress={()=>{
            setBookmark(prevBookmark =>{
                if (!prevBookmark.some(bookmark=>bookmark.id === carListings[detailsIndex].id))
                {return[...prevBookmark ,carListings[detailsIndex]]}
                else{
                    Alert.alert("Added to cart","The vehicle selected has already been added to cart previously")
                }
                return prevBookmark
                
            })
        }}>
            <FontAwesomeIcon icon={faCartShopping} size={20} color='#ffffff'/>  
        </TouchableOpacity>

        </View>
    </View>
  )
}

export default DetailHeader