import { Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, {useState} from 'react'

export default function Input({submitHandler}) {

    const [value,setValue] = useState("");
    
    const onChangeText = (text) => {
        setValue(text);
    };

    const handleAddHabit = () => {
        setValue(submitHandler(value));
        setValue("");
        Keyboard.dismiss();
    }

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Adicione sua task!"
                    placeholderTextColor='#bbbb'
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleAddHabit} style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: 200,
        color: '#ffff',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    button:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        paddingVertical: 8,
        marginTop: 25,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',

    }
});