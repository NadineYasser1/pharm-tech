import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Colors } from '../../constants/GlobalColors';

const CustomDropdown = ({
    options,
    onSelect,
    dropdownStyles,
    dropdownTextStyles,
    inputStyles, defaultOption,
    selectedOpt,
    style,
    label,
    labelStyle,
    ...otherProps }) => {
    const [selectedOption, setSelectedOption] = useState(selectedOpt || null);
    const handleSelectOption = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <View style={[styles.dropdownContainer, dropdownStyles]}>
                <SelectList
                    setSelected={(val) => handleSelectOption(val)}
                    data={options}
                    save="label"
                    boxStyles={[styles.dropdown, style]}
                    dropdownStyles={{ backgroundColor: 'white', borderColor: style?.borderColor || styles.dropdown.borderColor }}
                    dropdownTextStyles={dropdownTextStyles}
                    search={false}
                    inputStyles={inputStyles}
                    defaultOption={defaultOption}
                    {...otherProps}
                />
            </View>
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    label: {
        marginTop: 30,
        fontWeight: "500"
    },
    dropdownContainer: {
        //   marginBottom: 10,
        marginEnd: 10,
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 10,
        height: 42,
        borderWidth: 1,
        borderColor: Colors.white400,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    option: {
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: Colors.white400,
    },

});