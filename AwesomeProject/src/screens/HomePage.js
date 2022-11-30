import React from 'react';
import { Text, View, StyleSheet ,useContext} from 'react-native';
import CustomButton from '../component/CustomButton';
//import { AuthContext } from '../navigation/AuthProvider';

const HomePage = ({ navigation }) => {
   // const { logout } = useContext(AuthContext);
    const onSignIn = () => {
        //logout();
        navigation.navigate('Login');
    };
    return (
        <View style={styles.mainBody}>
            <View style={styles.subView} />
            <View>
                <Text>Welcome </Text>
                <View>
                <CustomButton MyText="Sign Out" buttonOnClick={()=>{onSignIn();}} />
                </View>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    mainBody: {
        navBarHidden: false,
        flex: 1,
        padding: 5,
        alignContent: 'center',
        backgroundColor: 'white',
    },
    subView: {
        width: '100%',
        height: 50,
        // backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
});
export default HomePage;
