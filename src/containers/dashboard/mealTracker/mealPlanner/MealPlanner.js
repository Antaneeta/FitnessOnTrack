import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';


import { Layout, Header, GreenBtn, AddIcon } from '../../../../components'
import * as colors from '../../../../Themes/colors'
import * as image from '../../../../assets/image'
import { hp, wp } from '../../../../utils/screenResponsiveFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { screens } from '../../../../constants';

const MealPlanner = () => {


    const [duration, setDuration] = useState('Weekly');
    const [meal, setMeal] = useState('Breakfast');
    const [cardData, setCardData] = useState(DATA)
    const [mealList, setMealList] = useState('')
    const screenWidth = 300
    const navigation = useNavigation()

    const renderItem = ({ item, index }) => (
        <CardItem item={item} />
    )
    return (
        <Layout>
            <Header title={'Meal planer'} titleStyle={styles.titleStyle1} />
            <ScrollView>
                <View style={styles.topContainer}>
                    <Text style={[styles.titleStyle]}>Meal Nutritions</Text>
                    <GreenBtn
                        buttonStyle={{ width: 140 }}
                        itemList={DURATIONS}
                        value={duration}
                        onValueChange={setDuration} />
                </View>

                <LineChart
                    data={data}
                    width={wp(90)}
                    height={hp(30)}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    style={{ marginHorizontal: 20, borderColor: colors.TextGreen, borderWidth: 0, marginVertical: 25 }}
                    bezier
                />


                <TouchableOpacity style={styles.checkButton}>
                    <Text style={styles.titleBtn}>Daily Meal Schedule</Text>
                    <TouchableOpacity style={styles.checkBtn} >
                        <Text style={styles.textButton}>Check</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.topContainer}>
                    <Text style={[styles.titleStyle]}>Today Meals</Text>
                    <GreenBtn
                        buttonStyle={{ width: 160 }}
                        itemList={TYPES_OF_MEAL}
                        value={meal}
                        onValueChange={setMeal} />
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        data={cardData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={{ justifyContent: 'space-around' }}>
                        <AddIcon onPress={() => navigation.navigate(screens.ADDMEAL)}/>
                    </View>
                </View>
            </ScrollView>
        </Layout>

    )
}

export default MealPlanner

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    titleStyle1: {
        color: colors.Black,
    },
    titleStyle: {
        color: colors.Black,
        fontSize: 18,
        fontSize: 20,
        fontWeight: '600'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
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
        backgroundColor: colors.purple,
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
        justifyContent: 'space-between',
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: colors.LightBlue,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.32,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 25,
        padding: 10,
        borderColor: colors.LightBlue
    },
    singleCard: {
        borderRadius: 10,
        flexDirection: 'column',
        borderBottomColor: colors.LightGreen,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: `rgba(180,	192, 254, ${0.28})`,

    },
})

const DURATIONS = [
    "Weekly",
    "Monthly",
    "Daily"
]

const TYPES_OF_MEAL = [
    "Breakfast",
    "Dinner",
    "Lunch",
    "Snack"
]

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            data: [1200, 1500, 2200, 1200, 2500, 1890, 1400, 1780],
            color: (opacity = 0.1) => `rgba(66,215,66, ${opacity})`, // optional
            strokeWidth: 2, // optional
        },
    ],
    legend: ['Calories'], // optional
};

const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0.7,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.4,
    color: (opacity = 0) => `rgba(69,215,69, ${opacity})`,
    strokeWidth: 8, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: true, // optional
    propsForDots: {
        r: "6",
        strokeWidth: "5",
        stroke: colors.purple
    }
};

const CardItem = ({ item }) => {
    const navigation = useNavigation()

    const onclick = () => {
        navigation.navigate(screens.ADDMEAL, {
            name: item?.name,
        })
    }

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
    }, []);

    return (
        <TouchableOpacity onPress={onclick} style={styles.singleCard}>
            <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                <Image source={item?.image} style={{ height: 50, width: 55 }} />
                <Text style={styles.titleStyle1}>{item?.name}</Text>
                <Text style={styles.titleStyle1}>{item?.time}</Text>
            </View>
            <View style={{ flexDirection: 'column',marginLeft:80 }}>
                <Text style={[styles.titleStyle1,{color:colors.DarkPurple}]}>{item?.day}</Text>
            </View>
        </TouchableOpacity>
    );
}

const DATA = [
    {
        name: 'Oats Pan Cake',
        id: '888',
        time: '81 Calories',
        day: '1 pancake (5") ',
        image: image.PanCake,
    },
    {
        name: 'Banana',
        id: '889',
        time: '105 calories',
        day: 'Medium (7–8 inches, 118 grams)',
        image:image.banana,
    },
    {
        name: '1 Glass Milk',
        id: '886',
        time: ' 122 Calories ',
        image:image.milk,
        day: 'glass (244g grams)'
    },
]