
const emailTypeCheck = (inputText: string): boolean => {
    //이메일 형식
    const emailPattern: RegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{5,80}/;

    if(emailPattern.test(inputText)) {
        return true;
    }
    else {
        return false;
    }
}

export { emailTypeCheck };