import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';
import React from 'react'

const DetailsHeader = ({data, navigation}) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%'}}
    />
  </View>

)

const Details = ( {route, navigation } ) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FocusedStatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

     <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item}/>}
        keyExtractor={(item) => item.id}
        showVerticalScrollIndicator={false}
        contentCotnainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style= {{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semibold,
                  color: COLORS.primary,
                }}>
                  Current Bid
                </Text>
              )}

            </View>
          </React.Fragment>
        )}

      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 70}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => navigation.goBack()}
        right={15}
        top={StatusBar.currentHeight + 70}
      />
    </SafeAreaView>
  )
}

export default Details
