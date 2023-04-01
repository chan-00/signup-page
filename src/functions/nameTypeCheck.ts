
const nameTypeCheck = (inputText: string): boolean => {
    //이름 정규식
    const namePattern: RegExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣]{2,40}/;

    if(namePattern.test(inputText)) {
        return true;
    }
    else {
        return false;
    }
}

export { nameTypeCheck };