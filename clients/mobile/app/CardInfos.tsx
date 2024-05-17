import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FONT } from '../constants'
import MapView from 'react-native-maps'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const CardInfos = () => {
    const centerCoordinate = {
        latitude: 41.0423,
        longitude: 29.0137,
      };
      
      const [center,setCenter] = useState(centerCoordinate)

  return (
    <SafeAreaView style={{backgroundColor:"#101114", width:"100%",height:"100%"}}>
        <ScrollView>
            <View style={{flex : 1}}>
            <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>
                <Text style={{}}>Green Museum </Text>
                <Text style={{color : "#FFAC70"}}>Museum </Text>
                <Text style={{}}> | </Text>
                <Text style={{color:"rgba(255,255,255,0.5)"}}>Bomonti</Text>
                <Text style={{}}> 9.1/10</Text>
            </Text>
            </View>
            <View>
            <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center",}}> Latest Stories :</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{flexDirection: 'row'}}>
                            {/* Örnek içerik */}
                            <View style={{width: 120, height: 120, backgroundColor: 'red', marginRight: 10}} />
                            <View style={{width: 120, height: 120, backgroundColor: 'green', marginRight: 10}} />
                            <View style={{width: 120, height: 120, backgroundColor: 'blue', marginRight: 10}} />
                            <View style={{width: 120, height: 120, backgroundColor: 'yellow', marginRight: 10}} />
                            <View style={{width: 120, height: 120, backgroundColor: 'purple', marginRight: 10}} />
                        </View>
                    </ScrollView>
            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:10,justifyContent: 'center',height: 80,borderLeftWidth:1,borderColor:"white",alignSelf:'flex-start'}}>
                    <View style={{margin:10,justifyContent:'center'}}>
                        <AntDesign name="infocirlceo" size={24} color="white" />
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style = {{fontFamily:FONT.regular,color:"white"}}>Restored 14th-century museum and former prison overlooking the Bosphorus with a top-floor restaurant. See More</Text>
                    </View>
             </View>
                <View style={{flexDirection:'row',flex:1,marginTop:10,justifyContent: 'center',height: 80,borderLeftWidth:1,borderColor:"white",alignSelf:'flex-start'}}>
                <View style={{margin:10,justifyContent:'center'}}>
                    <MaterialCommunityIcons name="web" size={24} color="white" />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style = {{fontFamily:FONT.regular,color:"white"}}>www.bomontigreenmuesum.com</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',flex:1,marginTop:10,justifyContent: 'center',height: 80,borderLeftWidth:1,borderColor:"white",alignSelf:'flex-start'}}>
                <View style={{margin:10,justifyContent:'center'}}>
                    <FontAwesome name="phone" size={24} color="white" />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style = {{margin :10,fontFamily:FONT.regular,color:"white"}}>0212 667 66 31</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',flex:1,marginTop:10,justifyContent: 'center',height: 80,borderLeftWidth:1,borderColor:"white",alignSelf:'flex-start'}}>
                <View style={{margin:10,justifyContent:'center'}}>
                    <Fontisto name="dollar" size={24} color="white" />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style = {{margin :10,fontFamily:FONT.regular,color:"white"}}>Between: $100 - $200 See All Prices</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',flex:1,marginTop:10,justifyContent: 'center',height: 80,borderLeftWidth:1,borderColor:"white",alignSelf:'flex-start'}}>
                <View style={{margin:10,justifyContent:'center'}}>
                    <Entypo name="back-in-time" size={24} color="white" />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style = {{margin :10,fontFamily:FONT.regular,color:"white"}}>Open Between: 06:00 AM - 02:00 AM See All</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <View style={{flex:1, width:379,height:178,borderRadius:50, borderWidth:1,overflow: 'hidden',}}>
                        <MapView style={{width:"100%",height:"100%"}} 
                        initialRegion={{
                            latitude: centerCoordinate.latitude,
                            longitude: centerCoordinate.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}/>
                    </View>
                </View>
                
        </ScrollView>
   </SafeAreaView>
  )
}

export default CardInfos
