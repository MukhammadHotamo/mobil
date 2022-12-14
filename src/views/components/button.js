import { Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import React from "react";
import { COLORS } from "../../colors/colors";

export const AppButton = ({text, ...props}) => {
    return(
        <Button 
            {...props}
            color={COLORS.yellow} 
            buttonStyle={{borderRadius: 21, height: 42}} 
            titleStyle={{color: COLORS.black}}>{text}</Button>
    )
}

export const SotIconWithBtn = ({sotIconName}) => (
    <Button 
        buttonStyle={{
                    width: 75, 
                    height: 50, 
                    backgroundColor: COLORS.white, 
                    borderWidth: 1,
                    borderRadius: 14, 
                    borderColor: COLORS.lightSecondary}}
    >
        <Icon size={20} name={sotIconName} />
    </Button>
)

export const LoginWithBtn = ({text, iconName, ...props}) => (
    <Button 
        {...props}
        buttonStyle={{
        marginVertical: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f8f8f8',
        borderRadius: 21,
        }}
        titleStyle={{
            fontSize: 16,
            color: COLORS.black
        }}
    >   
        <Icon name={iconName} style={{fontSize: 18, marginRight: 10 }} />
        {text}
    </Button>
)