import React from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Button } 
    from 'react-native';

export default props => (
    <View style={styles.tela}>
        <View style={styles.vwForm}>
            <TextInput style={styles.dados} placeholder='Nome' />
            <TextInput style={styles.dados} placeholder='E-mail' />
            <TextInput style={styles.dados} placeholder='Senha' />
        </View>
        <View style={styles.vwCadastrar}>
            <Button 
                title='Cadastrar'
                color='#115E54'
                accessibilityLabel='Pressione para incluir o usuário.'
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
    vwForm: {
        flex: 4,
        justifyContent: 'center',
    },
    dados: {
        fontSize: 20,
        height: 45,
    },
    vwCadastrar: {
        flex: 1,
    },
});
