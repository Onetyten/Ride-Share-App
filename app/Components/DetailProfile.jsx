import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React ,{useContext} from 'react'
import {AppContext,AppProvider} from '../Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { router } from 'expo-router'

const DetailProfile = () => {
    const {carListings,detailsIndex} = useContext(AppContext)
  return (
    <View>
           <View className ='bg-[#ff924f63] mt-10 mb-5 h-36 mx-4 rounded-xl gap-4 p-2'>
                <Text className='text-xl text-slate-100 font-Handlee'>
                    Meet the renter
                </Text>
            <View className=' flex-row justify-between p-4 '>
                    
                    <View className='flex-row items-start gap-2'>
                    <View >
                        <Image source={typeof carListings[detailsIndex].profilepic === 'string'? {uri: carListings[detailsIndex].profilepic}:carListings[detailsIndex].profilepic} width={45} height={45} resizeMode='cover' className='rounded-full '/>
                    </View>

                    <View>
                        <View>
                        <Text className='font-QuickSand text-primary'>
                            { carListings[detailsIndex].profileName}
                        </Text>
                        </View>
                        <View className='flex-row mt-1 items-center justify-around gap-3'>
                        <View className='flex-row gap-1'>
                            <FontAwesomeIcon icon={faStar} size={15} color='#f5ed31'/> 
                            <Text className='font-QuickSand text-primary text-sm'>
                            { carListings[detailsIndex].reviewStore}
                            </Text> 

                        </View>
                        <View>
                            <Text className='font-QuickSand text-sm text-primary'>
                            {carListings[detailsIndex].comments.length} reviews
                            </Text>
                        </View>
                        </View>
                    </View>
                    </View>

                    <View className='items-end flex-row'>
                    <TouchableOpacity onPress={()=>{router.push('/rentalRules')}}>
                        <Text className='font-QuickSand underline text-primary' >
                            Rental rules
                        </Text>
                    </TouchableOpacity>
                    
                    <FontAwesomeIcon icon={faChevronRight} size={14} color='#F5ed31'/> 

                    </View>

                </View>
            </View> 
    </View>
  )
}

export default DetailProfile