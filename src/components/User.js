import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsersOneInfo } from "../redux/actions";

export default function User({ userInfo }) {
    const dispatch = useDispatch();

    const getOneUser = () => {
        dispatch(fetchUsersOneInfo(userInfo.id));
    };

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            {userInfo.additionalInfo && (
                <>
                    <li>phone: {userInfo.additionalInfo.phone}</li>
                    <li>street: {userInfo.additionalInfo.address.street}</li>
                    <li>suite: {userInfo.additionalInfo.address.suite}</li>
                    <li>city: {userInfo.additionalInfo.address.city}</li>
                    <li>zipcode: {userInfo.additionalInfo.address.zipcode}</li>
                    <li>geo: {userInfo.additionalInfo.address.geo.lat}, {userInfo.additionalInfo.address.geo.lng}</li>
                    <li>website: {userInfo.additionalInfo.website}</li>
                    <li>company: {userInfo.additionalInfo.company.name}</li>
                    <li>catchPhrase: {userInfo.additionalInfo.company.catchPhrase}</li>
                    <li>bs: {userInfo.additionalInfo.company.bs}</li>
                </>
            )}
            <button onClick={getOneUser}>get more</button>
        </ul>
    );
}