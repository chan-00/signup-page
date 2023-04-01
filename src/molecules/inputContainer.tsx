//import components
import {Input} from "../atoms/input";
//import styled
import styled from "styled-components";

export const InputBox = styled.div`
  display: inline-block
`;

const InputContainer = () => {
    return (
        <InputBox>
            <Input type="email" placeholder="아이디(이메일)"  />
            <Input type="password" placeholder="비밀번호"  />
            <Input type="password" placeholder="비밀번호 확인"  />
            <Input type="text" placeholder="이름"  />
            <Input type="tel" placeholder="휴대폰 번호"  />
        </InputBox>
    )
}

export { InputContainer };