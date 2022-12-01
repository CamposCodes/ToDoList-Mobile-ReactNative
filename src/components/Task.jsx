import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function Task({item, deleteItem}) {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    };
    const back = () => {
        setCheck(false);
    };

    return (
        <View 
            style={[
                styles.taskContainer, 
                {backgroundColor: check === false ? "#23395d" : "green"}]}
            >
            {
            check === false ? (
            <TouchableOpacity style={styles.checkCircle} onPress={handleCheck}/>
            ) : (
            <TouchableOpacity onPress={handleCheck}>
                <Image style={styles.iconImage} source={require('../assets/check.png')}/>
            </TouchableOpacity>
            )}
            <View>
                <Text style={styles.taskTitle}>{item.value}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={back}>
                    <Image style={styles.backImage} source={require('../assets/back.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(item.key)}>
                    <Image style={styles.trashImage} source={require('../assets/trash.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer:{
        marginTop: 20,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    checkCircle:{
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 12,
        borderColor: '#ffff',
    },
    taskTitle:{
        color: '#ffff',
        fontSize: 16,
        minWidth:180,
        maxWidth:180,
        paddingHorizontal: 15,
    },
    iconImage:{
        width: 25,
        height: 25,
    },
    backImage:{
        width: 15,
        height: 15,
        marginBottom: 5,
        bottom: 10,
        left: 13
    },
    trashImage:{
        width: 20,
        height: 20,
        bottom: 10,
        marginTop: 5,
        top: 10,
        left: 10
    }
})

