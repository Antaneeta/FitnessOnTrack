import { PermissionsAndroid, Platform } from "react-native";

export const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') return true;
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "FittnessOnTrack",
                message: "FittnessOnTrack",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return false;
    }
};

export const requestExternalStorageReadPermission = async () => {
    if (Platform.OS === 'ios') return true;
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: "FittnessOnTrack",
                message: "FittnessOnTrack",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return false;
    }
};

export const requestExternalStorageWritePermission = async () => {
    if (Platform.OS === 'ios') return true;
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "FittnessOnTrack",
                message: "FittnessOnTrack",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return false;
    }
};

export const requestDownloadWithoutNotificationPermission = async () => {
    if (Platform.OS === 'ios') return true;
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.DOWNLOAD_WITHOUT_NOTIFICATION,
            {
                title: "FittnessOnTrack",
                message: "FittnessOnTrack",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        return false;
    }
};