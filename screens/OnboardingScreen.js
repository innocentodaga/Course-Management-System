import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('GetInto');
    };

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                containerStyles={{
                    paddingHorizontal: 15,
                    flex:1, 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems:'center',
                    columnGap: 10
                }}
                pages={[
                    {
                        backgroundColor: '#fff',                        
                        title: 'Welcome',
                        subtitle: 'Introducing our cutting-edge Course Management System (CMS)',
                        image: (
                            <View style={styles.lottie}>
                                <Image
                                    source={require('../assets/onboard1.jpg')}
                                    style={{ width: width * 0.8, height: 280, borderRadius: 5}}
                                    autoPlay
                                    loop
                                    onLoop={() => console.log('Animation looped')}
                                />
                            </View>
                        ),
                    },
                    {
                        backgroundColor: '#fff',                        
                        title: 'Why Us?',
                        subtitle: 'The ultimate solution designed to revolutionize the way educational institutions operate',
                        image: (
                            <View style={styles.lottie}>
                                <Image
                                    source={require('../assets/onboard2.jpg')}
                                    style={{ width: width * 0.9, height: 280, borderRadius: 5 }}
                                    autoPlay
                                    loop
                                    onLoop={() => console.log('Animation looped')}
                                />
                            </View>
                        ),
                    },
                    {
                        backgroundColor: '#fff',                        
                        title: 'C-M-S',
                        subtitle: 'Unlock unparalleled organization with our user-friendly interface',
                        image: (
                            <View style={styles.lottie}>
                                <Image
                                    source={require('../assets/onboard3.jpg')}
                                    style={{ width: width * 0.9, height: 280, borderRadius: 5 }}
                                    autoPlay
                                    loop
                                    onLoop={() => console.log('Animation looped')}
                                />
                            </View>
                        ),
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lottie: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom:80
    },
    doneButton: {
        padding: 20,
    },
});
