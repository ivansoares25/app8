import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Text,
    TouchableHighlight,
    ImageBackground, } 
    from 'react-native';
import { connect } from 'react-redux';
import { 
    changeName, 
    changeEmail, 
    changePassword,
    registerUser, }
    from '../actions/AuthenticationActions';

TextInput.defaultProps.selectionColor = 'white';

class formRegister extends Component {

    _registerUser() {
        const { name, email, password } = this.props;

        this.props.registerUser({ name, email, password });
    }

    render() {
        return (
            <ImageBackground style={styles.img} source={require('../images/bg.png')} >
                <View style={styles.tela}>
                    <View style={styles.vwForm}>
                        <TextInput 
                            value={this.props.name} 
                            style={styles.dados} 
                            placeholder='Name' 
                            placeholderTextColor='#FFF' 
                            onChangeText={name => this.props.changeName(name)}
                        />
                        <TextInput 
                            value={this.props.email} 
                            style={styles.dados} 
                            placeholder='E-mail' 
                            placeholderTextColor='#FFF' 
                            onChangeText={email => this.props.changeEmail(email)}
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.password} 
                            style={styles.dados} 
                            placeholder='Password' 
                            placeholderTextColor='#FFF' 
                            onChangeText={password => this.props.changePassword(password)}
                        />
                        <Text style={styles.err} >
                            {this.props.registerErr}
                        </Text>
                    </View>
                    <View style={styles.vwCadastrar}>
                        <TouchableHighlight 
                            underlayColor='#115E54' 
                            activeOpacity={0.3} 
                            onPress={()=>this._registerUser()}>
                                <Text style={styles.btn}>
                                    Register
                                </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    err: {
        fontSize: 22,
        color: '#ff0000',
    },
    img: { 
        flex: 1, 
        width: null,
    },
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
        fontSize: 22,
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
            registerErr: state.AuthenticationReducer.registerErr,
        }
    );
}

export default connect(
    mapStateToProps, 
    { 
        changeName, 
        changeEmail, 
        changePassword,
        registerUser,
    }
)(formRegister);
