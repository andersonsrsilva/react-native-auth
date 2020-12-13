import React from "react";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import Spinner from 'react-native-loading-spinner-overlay';
import { useAuth } from '../contexts/auth';

export default function Loading() {
    const { loading } = useAuth();

    return (
        <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
        />
    );
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: colors.WHITE,
    },
});
