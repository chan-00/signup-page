
const telTypeCheck = (inputText: string): boolean => {
    //전화번호 정규식(숫자3-숫자4-숫자4)
    const telPattern: RegExp = /^\d{3}-\d{4}-\d{4}$/;

    if(telPattern.test(inputText)) {
        return true;
    }
    else {
        return false;
    }
}

export { telTypeCheck };