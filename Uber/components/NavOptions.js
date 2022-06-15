import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
]

const NavOptions = () => {
    return (
        <FlatList // puts things in a list 
            data={data}
            horizontal
            keyExtractor={(item) => item.id} // key allows the build to know what item you are rendering, makes things more efficient
            renderItem={({ item }) => (
                <TouchableOpacity> 
                    {/* allows a chance in bahavior when clicked on */}
                    <View>
                        <Image
                        style={{width:120, height:120, resizeMode:'contain'}}
                        source = {{uri: item.image}}/>
                    </View>
                </TouchableOpacity>
            )}
        />


    );
};
export default NavOptions;