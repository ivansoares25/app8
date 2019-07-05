import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    TouchableHighlight,
    ImageBackground,
    } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from '../actions/AuthenticationActions';
TextInput.defaultProps.selectionColor = 'white';

const formLogin = props => {
    return (
        <ImageBackground style={{ flex: 1, width: null, }} source={require('../images/bg.png')} >
            <View style={styles.tela}>
                <View style={styles.vwTitulo}>
                    <Text style={styles.titulo}>
                        WhatsApp Clone
                    </Text>
                </View>
                <View style={styles.vwDados}>
                    <TextInput value={props.email} style={styles.dados} placeholder='E-mail' placeholderTextColor='#FFF' onChangeText={email => props.changeEmail(email)} />
                    <TextInput secureTextEntry value={props.password} style={styles.dados} placeholder='Password' placeholderTextColor='#FFF' onChangeText={password => props.changePassword(password)} />
                    <TouchableHighlight 
                        underlayColor='#115E54' 
                        activeOpacity={0.3} 
                        onPress={() => props.navigation.navigate('RegisterUser')}
                    >
                        <Text style={styles.txtCad}>
                            New user? Register
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.vwAcessar}>
                    <TouchableHighlight 
                        underlayColor='#115E54' 
                        activeOpacity={0.3} 
                        onPress={()=>false}>
                            <Text style={styles.btn}>
                                Login
                            </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>    
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
    },
    vwTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        color: '#FFF',
    },
    vwDados: {
        flex: 2,
    },
    dados: {
        fontSize: 20,
        height: 45,
        color: '#FFF',
    },
    txtCad: {
        fontSize: 18,
        color: '#FFF',
    },
    btn: {
        fontSize: 18,
        color: '#FFF',
    },
    vwAcessar: {
        flex: 2,
        alignItems: 'center',
    },
});

const mapStateToProps = state => (
    {
        email: state.AuthenticationReducer.email,
        password: state.AuthenticationReducer.password,
    }
)

export default connect(mapStateToProps, { changeEmail, changePassword })(formLogin);
