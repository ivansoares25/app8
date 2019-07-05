import React from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Text,
    TouchableHighlight,
    ImageBackground, } 
    from 'react-native';
import { connect } from 'react-redux';
import { changeName, changeEmail, changePassword } from '../actions/AuthenticationActions';
TextInput.defaultProps.selectionColor = 'white';

const formRegister = props => {
    return (
        <ImageBackground style={{ flex: 1, width: null, }} source={require('../images/bg.png')} >
            <View style={styles.tela}>
                <View style={styles.vwForm}>
                    <TextInput value={props.name} style={styles.dados} placeholder='Name' placeholderTextColor='#FFF' onChangeText={name => props.changeName(name)} />
                    <TextInput value={props.email} style={styles.dados} placeholder='E-mail' placeholderTextColor='#FFF' onChangeText={email => props.changeEmail(email)} />
                    <TextInput secureTextEntry value={props.password} style={styles.dados} placeholder='Password' placeholderTextColor='#FFF' onChangeText={password => props.changePassword(password)} />
                </View>
                <View style={styles.vwCadastrar}>
                    <TouchableHighlight 
                        underlayColor='#115E54' 
                        activeOpacity={0.3} 
                        onPress={()=>false}>
                            <Text style={styles.btn}>
                                Register
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
    vwForm: {
        flex: 4,
        justifyContent: 'center',
    },
    dados: {
        fontSize: 20,
        height: 45,
        color: '#FFF',
    },
    btn: {
        fontSize: 18,
        color: '#FFF',
    },
    vwCadastrar: {
        flex: 1,
        alignItems: 'center',
    },
});

const mapStateToProps = state => {
    return (
        {
            name: state.AuthenticationReducer.name,
            email: state.AuthenticationReducer.email,
            password: state.AuthenticationReducer.password,
        }
    );
}

export default connect(mapStateToProps, { changeName, changeEmail, changePassword })(formRegister);
