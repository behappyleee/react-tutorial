import axios from "axios";
import React, { useState } from "react";
import { json } from "stream/consumers";

export default function Join() {
    let [inputName, setInputName] = useState('');
    let [inputId, setinputId] = useState('');
    let [inputPassword, setInputPassword] = useState('');
    const onChangeNameInput = (e) => {
        setInputName(e.target.value);
    }
    const onChangeIdInput = (e) => {
        console.log('onChangeIdInput Input : ',e );
        setinputId(e.target.value);
    }
    const onChangePasswordInput = (e) => {
        console.log('onChangePasswordInput Input : ',e );
        setInputPassword(e.target.value);
    }

    // userId, userPassword, userName
    async function userJoin() {
        var data = {
            userName : inputName,
            userId : inputId,
            userPassword : inputPassword,
        }

        //var isValidationSuccess = checkInputValidation();
        // if(!isValidationSuccess) return false;

        var userJoinResult = await axios.post('http://localhost:8080/userJoin', data);

    }

    async function postUserJoin(userJoinData) {
        return await axios({
            url : 'http://localhost:8080/userJoin',
            method: 'POST',
            data: userJoinData
        }).then((res) => {

           // console.log('RES 통신 결과 확인 ', res);

        }).catch((err) => {
            // console.log(err);
        })
    }
    // 입력 Validation Check 
    function checkInputValidation() {
        var isSuccess = true;
        if(!inputName){alert('이름을 입력해주세요'); return isSuccess=false;}
        if(!inputId) {alert('아이디를 입력해주세요'); return isSuccess=false;}
        if(!inputPassword) {alert('패스워드를 입력해주세요'); return isSuccess=false;}
        return isSuccess;
    }

    return (
        <div>
            <h1>회원가입</h1>
            <div>
                <input type="text" id="userName" placeholder="이름" onChange={onChangeNameInput} />
                <input type="text" id="userId" placeholder="아이디" onChange={onChangeIdInput} />
                <input type="text" id="userPassword" placeholder="패스워드" onChange={onChangePasswordInput} />
            </div>
            <button onClick={userJoin}>회원가입</button>
        </div>
    )
}