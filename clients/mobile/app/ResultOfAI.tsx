import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { FONT } from '../constants'

const ResultOfAI = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#101114", width:"100%",height:"100%"}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            <View style={{justifyContent:'center',marginHorizontal:18,flex:1 ,width:"100%",height:"100%"}}>
                <View style={{}}> 
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:'flex-start',alignSelf:"flex-start",fontSize:20}}> Creating A Route</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Description Of Route *</Text>
                    <Text style = {{height: 120,borderLeftWidth:1,borderColor:"white",marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}></Text>
                </View>
                <View style={{flex:1}}>
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Plan Of The Day 1/x *</Text>
                    <Text style = {{height: 120,borderLeftWidth:1,borderColor:"white",marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}></Text>
                </View>
                <View style={{flex:1}}>
                <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Places Of The Day</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
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
            </View>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <View style={{justifyContent:'center',marginHorizontal:18,flex:1 ,width:"100%",height:"100%"}}>
                <View style={{}}> 
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:'flex-start',alignSelf:"flex-start",fontSize:20}}> Creating A Route</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Description Of Route *</Text>
                    <Text style = {{height: 120,borderLeftWidth:1,borderColor:"white",marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}></Text>
                </View>
                <View style={{flex:1}}>
                    <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Plan Of The Day 1/x *</Text>
                    <Text style = {{height: 120,borderLeftWidth:1,borderColor:"white",marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}></Text>
                </View>
                <View style={{flex:1}}>
                <Text style = {{marginTop:10,fontFamily:FONT.regular,color:"white",justifyContent:"center"}}>Places Of The Day</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
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
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ResultOfAI