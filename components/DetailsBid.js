import { View, Text, Image } from 'react-native'
import { EthPrice } from './SubInfo'; 
import { COLORS, SIZES, FONTS } from '../constants';
import React from 'react'

const DetailsBid = ({ bid }) => {
  return (
    <View style = {{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2, //add padding to the left and right of the view
    }}>
      <Image //show people who are bidding for NFT
        source={bid.image}
        resizeMode='contain'
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
        }}>
            Bid placed by {bid.name}
        </Text>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
        }}>
            {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid