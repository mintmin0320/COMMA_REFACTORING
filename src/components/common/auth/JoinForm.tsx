import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import InputField from '../InputField';

// types
import { JoinState, MajorKeys } from '../../../types/auth';

// styles
const StyledJoinForm = styled.form`
  width: 60%;
  height: 100%;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledDataInputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledLeftFormBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  justify-content: space-around;
`;

const StyledJoinFormInputFieldBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;

`;

const StyledEmailCheckBtnBox = styled.div`
  width: 55px;
  height: 38px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const StyledEmailCheckBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bolder;
`;

// 학과, 학년, 학적 선택
const StyledRightFormBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledTextLabel = styled.label`
  width: 60%;
  height: 55px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  `;

const StyledSelect = styled.select`
  width: 100%;
  height: 41px;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  margin-top: 5px;
`;

const StyledSubmitBtn = styled.button`
  width: 55%;
  height: 55px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

const JoinForm = () => {
  const [form, setForm] = useState<JoinState>({
    email: ' ',
    authNum: ' ',
    password: ' ',
    name: ' ',
    telNum: ' ',
    studentNum: ' ',
    major: ' ',
    classGroup: ' ',
    classOptions: [],
    academicStatus: ' ',
  });

  const majorMap: Record<MajorKeys, () => void> = {
    software: () => {
      setForm({ ...form, classOptions: ["1", "2", "3", "4"] });
    },
    information: () => {
      setForm({ ...form, classOptions: ["1", "2", "3"] });
    },
    ai: () => {
      setForm({ ...form, classOptions: ["1", "2"] });
    },
  };

  // 타입 가드
  const isMajorKey = (key: string): key is MajorKeys => {
    return key in majorMap;
  }

  useEffect(() => {
    if (isMajorKey(form.major)) {
      majorMap[form.major]();
    }
  }, [form.major]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <StyledJoinForm>
      <StyledDataInputBox>
        <StyledLeftFormBox>
          <StyledJoinFormInputFieldBox>
            <InputField width='100%' height='40px' label="이메일" name="email" value={form.email || undefined} onChange={handleChange} />
            <StyledEmailCheckBtnBox>
              <StyledEmailCheckBtn type='button'>
                인증
              </StyledEmailCheckBtn>
            </StyledEmailCheckBtnBox>
          </StyledJoinFormInputFieldBox>
          <StyledJoinFormInputFieldBox>
            <InputField width='100%' height='40px' label="인증코드" name="authNum" value={form.authNum || undefined} onChange={handleChange} />
            <StyledEmailCheckBtnBox>
              <StyledEmailCheckBtn type='button'>
                확인
              </StyledEmailCheckBtn>
            </StyledEmailCheckBtnBox>
          </StyledJoinFormInputFieldBox>
          <InputField width='100%' height='40px' label="비밀번호" name="password" value={form.password || undefined} onChange={handleChange} />
          <InputField width='100%' height='40px' label="이름" name="name" value={form.name || undefined} onChange={handleChange} />
          <InputField width='100%' height='40px' label="전화번호" name="telNum" value={form.telNum || undefined} placeholder='"-" 없이 입력해 주세요.' onChange={handleChange} />
        </StyledLeftFormBox>
        <StyledRightFormBox>
          <InputField width='100%' height='40px' label="학번" name="studentNum" value={form.studentNum || undefined} placeholder='학번을 입력해 주세요.' onChange={handleChange} />
          <StyledTextLabel>
            학과
            <StyledSelect
              value={form.major || ' '}
              onChange={(e) => {
                setForm({
                  ...form,
                  major: e.target.value,
                  classGroup: null,
                });
              }}
            >
              <option value=' ' disabled>
                선택
              </option>
              <option value="software">소프트웨어공학과</option>
              <option value="information">정보공학과</option>
              <option value="ai">인공지능소프트웨어학과</option>
            </StyledSelect>
          </StyledTextLabel>
          <StyledTextLabel>
            학년
            <StyledSelect
              value={form.classGroup || ' '}
              onChange={(e) => setForm({ ...form, classGroup: e.target.value })}
              disabled={!form.major}
            >
              <option value=' ' disabled>
                선택
              </option>
              {form.classOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </StyledSelect>
          </StyledTextLabel>
          <StyledTextLabel>
            학적
            <StyledSelect
              value={form.academicStatus || ""}
              onChange={(e) => {
                setForm({ ...form, academicStatus: e.target.value });
              }}
            >
              <option value=' ' disabled>
                선택
              </option>
              <option value="재학">재학</option>
              <option value="휴학">휴학</option>
              <option value="졸업">졸업</option>
            </StyledSelect>
          </StyledTextLabel>
          <StyledSubmitBtn>회원가입</StyledSubmitBtn>
        </StyledRightFormBox>
      </StyledDataInputBox>
    </StyledJoinForm >
  );
};

export default JoinForm;