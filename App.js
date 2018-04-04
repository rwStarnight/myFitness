import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={this.createStore(reducer)}>
                <View style={{flex: 1}}>
                 <AddEntry />
                </View>
            </Provider>
        )
    }
}


