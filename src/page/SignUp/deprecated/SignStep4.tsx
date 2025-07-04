import { StepProps } from '@/types/SignUp';
import { styled } from 'styled-components';
import { ReactComponent as IconArrowLeft } from '@/assets/icons/IconArrowLeft.svg';
import { Button } from '@/components/common/Button/Button';
import { BooleanNoCard } from '@/components/SignUp/deprecated/BooleanNoCard';
import { BooleanYesCard } from '@/components/SignUp/deprecated/BooleanYesCard';
import { useState } from 'react';

export const Step4 = ({
  formData,
  setFormData,
  onNext,
  onPrevious,
}: StepProps) => {
  const [selectedCard, setSelectedCard] = useState<'yes' | 'no' | null>(null);
  const handleCardSelect = (cardType: 'yes' | 'no') => {
    setSelectedCard(cardType);
    setFormData((prev) => ({
      ...prev,
      isHavingCar: cardType === 'yes',
    }));
  };

  return (
    <StepWrapper>
      <IconContainer onClick={onPrevious}>
        <IconArrowLeft />
      </IconContainer>
      <Header>차량을 소유하고 계신가요?</Header>
      <CardContainer>
        <BooleanYesCard
          pressed={selectedCard === 'yes'}
          text="네, 소유하고 있습니다."
          onClick={() => handleCardSelect('yes')}
        />
        <BooleanNoCard
          pressed={selectedCard === 'no'}
          text="아니오, 가지고 있지 않습니다."
          onClick={() => handleCardSelect('no')}
        />
      </CardContainer>
      <ButtonContainer>
        <Button
          variant={selectedCard ? 'blue' : 'disabled'}
          height="52px"
          onClick={() => {
            if (selectedCard && onNext) {
              console.log('현재 입력된 formData:', formData);
              onNext();
            }
          }}
          disabled={!selectedCard}
        >
          다음 단계로 이동
        </Button>
      </ButtonContainer>
    </StepWrapper>
  );
};
const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px 16px auto 16px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  align-items: center;
  padding: 0px 20px;
  height: 56px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  align-items: flex-start;
  box-sizing: border-box;
  padding: 16px 20px 0px 20px;

  font-size: ${({ theme }) => theme.typography.fontSize.title2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray50};
  box-sizing: border-box;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;
