import React, {useState, useEffect} from "react";
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Button,
    TextInput,
    Alert,
} from "react-native";

// const getRandomNumber = () => {
//     return Math.floor(Math.random() * 100) + 1
// };





// const getRandomBEER = () => {
//     return fetch('https://api.punkapi.com/v2/beers/random')
//         .then(response => response.json())
//         .then(json => {
//             return json.name;
//         })
//         .catch(error => {
//             console.error(error);
//         });
// };

// class MyComponent extends React.Component {
//     render() {
//         return (
//             <View style={styles.compo}>
//                 <Text style={styles.title}>
//                     Bienvenue sur
//                 </Text>
//                 <Text style={styles.title}>
//                     RandomBEER !
//                 </Text>
//                 {TestComponent()}
//                 <Text style={styles.texte}>
//                     {/*{getRandomBEER().toString()}*/}
//                     {/*{getRandomNumber().toString()}*/}
//                 </Text>
//             </View>
//         );
//     }
// }

export default function App() {

    const [data, setData] = useState({});
    const getBeer = async () => {
        try {
            const response = await fetch('https://api.punkapi.com/v2/beers/random');
            const json = await response.json();
            setData(json[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBeer();
    }, []);

    return (
        // <MyComponent/>
        <View style={styles.compo}>
            <Text style={styles.title}>
                Bienvenue sur
            </Text>
            <Text style={styles.title}>
                RandomBEER !
            </Text>
            <Text style={styles.texte}>
                {data.name}
            </Text>
            <Text style={styles.desc}>
                {data.description}
            </Text>
            <Image
                style={styles.img}
                source={{
                    uri: `${data.image_url}`,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    texte: {
        color: "black",
        fontSize: 20,
        marginTop:20,
    },
    title: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    compo: {
        marginTop: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    desc: {
        fontSize:15,
        margin:10,

    },
    img:{
        height:200,
        width:100,
    }
});
