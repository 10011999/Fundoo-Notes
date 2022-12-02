import React,{useContext} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CustomButton from '../component/CustomButton';
import { AuthContext } from '../navigation/AuthProvider';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const HomePage = ({navigation}) => {
const {user,logout} = useContext(AuthContext);
const onLogout = () => {
    logout();
    //navigation.navigate('Login');
  };
    return (
        <View style={styles.mainBody}>
            <View style={styles.subView} >
            <Text style={styles.title}> Welcome Home Page </Text>
            </View>
            <View>
                <CustomButton MyText="Sign Out" buttonOnClick={()=>{onLogout();}} />
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00ffff',
      },
});
export default HomePage;
