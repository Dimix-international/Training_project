import {userType} from "../providers/AuthProvider";

const PROJECT_INFO_LOCALSTORAGE_KEY = 'project-firebase';

export const getInfoUserStorage = (): userType | null => {
    const storedInfo = localStorage.getItem(PROJECT_INFO_LOCALSTORAGE_KEY);
    return storedInfo ? JSON.parse(storedInfo) : null
}

export const setInfoUserStorage = (info:userType):void => {
    localStorage.setItem(PROJECT_INFO_LOCALSTORAGE_KEY, JSON.stringify(info))
}