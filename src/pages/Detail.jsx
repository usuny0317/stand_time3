import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailPage = () => {
  const location = useLocation();
  const { title, text, isDone } = location.state;

  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledTitle>할 일 상세 페이지</StyledTitle>
      <StyledText>할일 제목 : {title} </StyledText>
      <StyledText>할일 내용 : {text}</StyledText>
      <StyledText>할일 완료 여부 : {isDone ? "완료" : "미완료"}</StyledText>
      <StyledButton onClick={() => navigate("/")}>
        메인 페이지로 돌아가기
      </StyledButton>
    </StyledContainer>
  );
};

export default DetailPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const StyledText = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #666;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
