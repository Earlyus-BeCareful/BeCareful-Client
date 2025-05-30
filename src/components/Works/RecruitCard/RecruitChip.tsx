import { styled } from 'styled-components';

type RecruitChipState = 'pass' | 'fail' | 'pending';

interface RecruitChipProps {
  state: RecruitChipState;
}

export const RecruitChip = ({ state }: RecruitChipProps) => {
  const chipText = () => {
    switch (state) {
      case 'pass':
        return '일자리 모집중';
      case 'fail':
        return '마감';

      default:
        return '';
    }
  };

  return (
    <ChipContainer state={state}>
      <ChipCircle state={state} />
      {chipText()}
    </ChipContainer>
  );
};

const ChipContainer = styled.div<{ state: RecruitChipState }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.body3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  gap: 4px;

  background-color: ${({ theme, state }) => {
    switch (state) {
      case 'pass':
        return ' #f4fff6';
      case 'pending':
        return theme.colors.subOrange;
      case 'fail':
        return theme.colors.gray50;
    }
  }};

  color: ${({ state, theme }) => {
    switch (state) {
      case 'pass':
        return theme.colors.positive;
      case 'pending':
        return theme.colors.mainOrange;
      case 'fail':
        return theme.colors.gray500;
    }
  }};
`;

const ChipCircle = styled.div<{ state: RecruitChipState }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ state, theme }) => {
    switch (state) {
      case 'pass':
        return theme.colors.positive;
      case 'pending':
        return theme.colors.mainOrange;
      case 'fail':
        return theme.colors.gray500;
    }
  }};
`;
