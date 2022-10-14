import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect, } from 'react'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native'
import SearchableDropdown from 'react-native-searchable-dropdown';

import { Header, Layout, SearchFilter } from '../../../../components'
import * as images from '../../../../assets/image'
import * as colors from '../../../../Themes/colors'
import { hp, wp } from '../../../../utils/screenResponsiveFunctions'
import { screens } from '../../../../constants'

const AddMeal = () => {
    const [cardData, setCardData] = useState(DATA)
    const [itemData, setItemData] = useState(DATA)
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState(true)
    const [selectedItems, setSelectedItems] = useState([])

    const renderItem = ({ item, index }) => (
        <CardItem item={item} color={index % 2 === 0 ? colors.LightGreen : colors.primaryPurple} />
    )
    const renderCardItem = ({ item, index }) => (
        <CardfoodItem item={item} />
    )

    const getMeal = () => {
        setIsLoading(true)
        firestore()
            .collection('Food')
            .get()
            .then(response => {
                // console.log(response.docs)
                const docs = response.docs.map(item => ({ ...item.data(), docId: item.id }))
                setCardData(docs);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };



    useEffect(() => {
        getMeal();
    }, []);

    const onSearch = () => {

    }
    console.log(cardData)
    const HeaderComponent = () => {
        return (
            <>
                {/* <SearchFilter value={search} onChangeText={setSearch} onSearch={onSearch} /> */}
                <TouchableOpacity onPress={() => setSearch(true)} style={{ marginHorizontal: 25, marginVertical: 0 }}>
                    <SearchableDropdown
                        multi={true}
                        selectedItems={selectedItems}
                        onItemSelect={(item) => {
                            //   const items = this.state.selectedItems;
                            //   items.push(item)
                            //   this.setState({ selectedItems: items });
                            setSelectedItems([...selectedItems, item])
                            console.log('selected', [...selectedItems, item])
                            setSearch(false)
                        }}
                        containerStyle={{ padding: 5 }}
                        onRemoveItem={(item, index) => {
                            setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id))
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: colors.White,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: colors.TextGreen
                        }}
                        itemTextStyle={{ color: '#222' }}
                        itemsContainerStyle={{}}
                        items={cardData.map((item, index) => ({ id: index, name: item.docId, ...item }))}
                        defaultIndex={2}
                        // chip={true}
                        resetValue={false}
                        textInputProps={
                            {
                                placeholder: "Search for Food",
                                underlineColorAndroid: "transparent",
                                style: {
                                    padding: 12,
                                    borderWidth: 1,
                                    borderColor: colors.TextGreen,
                                    borderRadius: 15,
                                },
                                onTextChange: text => {
                                    alert(text)
                                }
                            }
                        }
                        listProps={
                            {
                                nestedScrollEnabled: true,
                            }
                        }
                    />
                </TouchableOpacity>

                <View style={styles.topContainer}>
                    <Text style={styles.titleStyle}>Cook Book Recipe</Text>
                </View>
                <View style={{ marginLeft: 25 }}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </>
        )
    }
    return (
        <Layout>
            {
                !search ?
                    (<Header title={'Add meals'} />) : (<></>)
            }

            <FlatList
                keyboardShouldPersistTaps={'handled'}
                ListHeaderComponent={() => <HeaderComponent />}
                data={selectedItems}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[styles.containercard]}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ color: colors.DarkPurple, fontSize:16 }} key={item.docId}>{item.docId} </Text>
                                <Text style={{ color: colors.Gray2,fontSize:16 }}>{item.size} g</Text>
                            </View>
                            <Text></Text>
                            <Text style={styles.titleBtn}> Fat: {item?.fat}</Text>
                            <Text style={styles.titleBtn}> Protein: {item?.protein}</Text>
                            <Text style={styles.titleBtn}> Carbs: {item?.carbs}</Text>
                            <Text style={styles.titleBtn}> Sodium: {item?.sodium}</Text>


                            <Text>{item?.time}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            {/* <View style={styles.topContainer}>
                <Text style={styles.titleStyle}>Recomendations for Diet</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={itemData}
                    renderItem={renderCardItem}
                    keyExtractor={item => item.id}
                />
            </View> */}
            <View>

            </View>
        </Layout>

    )
}

export default AddMeal



const CardItem = ({ item, color }) => {
    const navigation = useNavigation()

    const onclick = () => {
        navigation.navigate(screens.WORKOUT_DETAIL, {
            name: item?.name,
        })
    }

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
    }, []);

    return (
        <TouchableOpacity onPress={onclick} style={[styles.cardContainer, { backgroundColor: color }]}>
            <Image source={item?.image} style={{ width: 95, height: 95 }} />
            <Text style={styles.titleBtn}>{item?.name}</Text>
            <Text>{item?.primaryName}</Text>
            <Text>{item?.time}</Text>
        </TouchableOpacity>
    );
}
const CardfoodItem = ({ item }) => {
    const navigation = useNavigation()

    const onclick = () => {
        // navigation.navigate(screens.ADDMEAL, {
        //     name: item?.name,
        // })
    }

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
    }, []);

    return (
        <TouchableOpacity onPress={onclick} style={[styles.container]}>
            <Text style={styles.titleBtn}>{item?.name}</Text>
            <Text style={{ color: '#000', fontSize: 16 }}>fat: </Text>
        </TouchableOpacity>
    );
}

const DATA = [
    {
        name: 'Honey Pancake',
        primaryName: '130 calories',
        id: '1',
        time: 'per serving',
        day: 'Today',
        image: images.PanCake
    },
    {
        name: 'Protein Salad',
        primaryName: '550 calories',
        id: '2',
        time: 'high protein',
        day: 'Today',
        image: images.VegetablesSalad
    },
    {
        name: 'low calory Pizza',
        id: '3',
        primaryName: '540 calories',
        time: 'meat',
        image: images.pizza
    }, {
        name: 'salmon',
        id: '4',
        primaryName: '208 calories',
        time: 'per 100g',
        image: images.salmon
    },

]


const styles = StyleSheet.create({
    containercard: {
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        backgroundColor: '#EEE',
        shadowColor: colors.LightBlue,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.32,
        elevation: 20,
        marginVertical: 10,
        marginHorizontal: 35,
        padding: 10,
        borderColor: colors.LightBlue
    },
    titleStyle1: {
        color: colors.Black,
    },
    titleStyle: {
        color: colors.Black,
        fontSize: 20,
        fontSize: 20,
        fontWeight: '800'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 0
    },
    titleBtn: {
        fontSize: 16,
        color: colors.Black,
        fontWeight: '600'
    },

    checkButton: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cefbce',
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 25,
        marginVertical: 20
    },

    checkBtn: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryPurple,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 25,
    },

    container: {
        marginHorizontal: 30,
        flexDirection: 'row'
    },
    textButton: {
        color: colors.White,
        fontWeight: '500',
        fontSize: 15
    },
    cardContainer: {
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.LightGreen,
        shadowColor: colors.purple,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.32,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        borderColor: colors.primaryPurple,
        height: 180,
        width: 200
    },
    singleCard: {
        justifyContent: 'space-between',
        borderRadius: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomColor: colors.LightGreen,
        marginVertical: 10,
        marginHorizontal: 25,
        padding: 10,
    },
})