
const passwordTypeCheck = (inputText: string): boolean => {
    //대/소문자, 숫자, 특수문자 하나 이상 들어가며 8~20자 길이의 비밀번호 정규식
    const passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;

    if(passwordPattern.test(inputText)) {
        return true;
    }
    else {
        return false;
    }
}

export { passwordTypeCheck };