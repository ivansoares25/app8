import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button,
    TouchableHighlight,
    } from 'react-native';

export default props => (
    <View style={styles.tela}>
        <View style={styles.vwTitulo}>
            <Text style={styles.titulo}>
                WhatsApp Clone
            </Text>
        </View>
        <View style={styles.vwDados}>
            <TextInput style={styles.dados} placeholder='E-mail' />
            <TextInput style={styles.dados} placeholder='Senha' />
            <TouchableHighlight 
                underlayColor='#115E54' 
                activeOpacity={0.3} 
                onPress={() => props.navigation.navigate('CadUsuario')}
            >
                <Text style={styles.txtCad}>
                    Ainda não tem cadastro? Cadastre-se
                </Text>
            </TouchableHighlight>
        </View>
        <View style={styles.vwAcessar}>
            <Button 
                title='Acessar'
                color='#115E54'
                accessibilityLabel='Pressione para validar o acesso.'
                onPress={()=>false}
            />
        </View>
    </View>
);

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
    },
    vwDados: {
        flex: 2,
    },
    dados: {
        fontSize: 20,
        height: 45,
    },
    txtCad: {
        fontSize: 18,
    },
    vwAcessar: {
        flex: 2,
    },
});
