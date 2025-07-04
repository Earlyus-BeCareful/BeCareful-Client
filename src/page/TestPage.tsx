import { Button } from '@/components/common/Button/Button';
import { InputBox } from '@/components/common/InputBox/InputBox';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { useState } from 'react';
import { SmallDropdown } from '@/components/common/Dropdown/SmallDropdown';
import { MiddleDropdown } from '@/components/common/Dropdown/MiddleDropdown';
import { NursingQualificationCard } from '@/components/common/QualificationCard/NursingQualificationCard';
import { Toggle } from '@/components/common/Toggle/Toggle';

import { BooleanNoCard } from '@/components/SignUp/deprecated/BooleanNoCard';
import { BooleanYesCard } from '@/components/SignUp/deprecated/BooleanYesCard';
import { AgreeCard } from '@/components/SignUp/deprecated/AgreeCard';

import { ApplyChip } from '@/components/common/ApplyCard/ApplyChip';
import { ApplyTag } from '@/components/common/ApplyCard/ApplyTag';
import { ApplyCard } from '@/components/common/ApplyCard/ApplyCard';

import { CheckBox } from '../components/common/CheckBox/CheckBox';
import { CareGiverCard } from '@/components/SignUp/common/CareGiverCard';
import { InstitutionCard } from '@/components/SignUp/common/InstitutionCard';
import ModalLimit from '@/components/common/Modal/ModalLimit';
import Modal from '@/components/common/Modal/Modal';
import ModalButtons from '@/components/common/Modal/ModalButtons';

export const TestPage = () => {
  const [selectedDropContents, setSelectedDropContents] = useState<string[]>(
    [],
  );
  const dropContents = ['요양', '보호', '사회', '복지'];
  const [smallContents, setSmallContents] = useState<string[]>([]);
  const smallDropContents = ['1급', '2급'];
  const [middleContents, setMiddleContents] = useState<string[]>([]);
  const middleDropContents = ['시급', '일급', '월급', '연봉'];
  const [certificateData, setCertificateData] = useState({
    type: '간호지원사',
    level: '1급',
    number: '',
  });

  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const handleToggleChange = () => {
    setIsToggleChecked((prevChecked) => !prevChecked);
  };

  const handleCertificateChange = (updatedData: typeof certificateData) => {
    setCertificateData(updatedData);
  };

  const [isChecked, setIsChecked] = useState(false);
  const checkBoxClicked = (check: boolean) => {
    setIsChecked(check);
  };

  const [pressed, setPressed] = useState(false);
  const handleCardClick = () => {
    setPressed(!pressed);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isButtonModalOpen, setIsButtonModalOpen] = useState(false);

  return (
    <div>
      <h1>Test Page</h1>

      <BooleanNoCard pressed={true} text="네, 소유하고 있습니다." />
      <BooleanNoCard pressed={false} text="네, 소유하고 있습니다." />
      <BooleanYesCard pressed={true} text="네, 소유하고 있습니다." />
      <AgreeCard pressed={false} text="네, 소유하고 있습ㅇㅇ니다." />
      <div onClick={handleCardClick}>
        <CareGiverCard pressed={pressed} />
        <InstitutionCard pressed={pressed} />
      </div>

      <ApplyChip state={'pass'} />
      <ApplyTag label="인기공고" />
      <ApplyTag label="시급 TOP" />
      <ApplyCard
        chipState="fail"
        centerName="행복사랑요양센터"
        description="방문요양/1일 9시간씩 주6일 모집"
        tags={['인기공고', '시급 TOP']}
        careItems={['식사보조', '이동보조']}
        workingDays={['목', '일']}
        workingHours="15:00~19:00"
        hourlyRate="12,000원"
      />

      <Button variant="blue" width="320px" height="52px">
        다음 단계로 이동
      </Button>
      <Button variant="blue2" width="120px" height="52px">
        인증번호 전송
      </Button>
      <Button variant="blue2" width="120px" height="52px">
        재전송
      </Button>
      <InputBox
        width="320px"
        label="필드 레이블"
        labelStar={false}
        state="default"
        placeholder="플레이스홀더"
        guide="도움말"
      />
      <InputBox
        width="320px"
        label="필드 레이블"
        labelStar={true}
        state="error"
        placeholder="플레이스홀더"
        guide="도움말"
      />
      <InputBox
        width="320px"
        label="필드 레이블"
        labelStar={false}
        state="success"
        placeholder="플레이스홀더"
        guide="도움말"
      />
      <Dropdown
        title="드롭다운 가이드"
        contents={dropContents}
        selectedContents={selectedDropContents}
        setSelectedContents={setSelectedDropContents}
      />
      <Dropdown
        title="드롭다운 가이드"
        contents={dropContents}
        selectedContents={selectedDropContents}
        setSelectedContents={setSelectedDropContents}
        pressed={true}
      />
      <SmallDropdown
        title="1급"
        contents={smallDropContents}
        selectedContents={smallContents}
        setSelectedContents={setSmallContents}
      />
      <SmallDropdown
        title="1급"
        contents={smallDropContents}
        selectedContents={smallContents}
        setSelectedContents={setSmallContents}
        pressed={true}
      />
      <NursingQualificationCard
        initialType={certificateData.type}
        onChange={handleCertificateChange}
      />
      <Toggle checked={isToggleChecked} onChange={handleToggleChange} />
      <MiddleDropdown
        title="시급"
        contents={middleDropContents}
        selectedContents={middleContents}
        setSelectedContents={setMiddleContents}
      />
      <CheckBox
        id="1"
        checked={isChecked}
        onChange={checkBoxClicked}
        borderRadius="4px"
        label="자동로그인"
        select=""
        guide=""
      />
      <p>체크박스 상태: {isChecked ? '체크됨' : '체크되지 않음'}</p>
      <CheckBox
        id="2"
        checked={isChecked}
        onChange={checkBoxClicked}
        borderRadius=""
        label=""
        select="필수"
        guide="이용약관"
      />
      <CheckBox
        id="3"
        checked={isChecked}
        onChange={checkBoxClicked}
        borderRadius=""
        label=""
        select="선택"
        guide="이용약관"
      />

      <button onClick={() => setIsEditModalOpen(true)}>모달 오픈</button>
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalLimit
          title="사진이 크기 제한을 초과해요."
          detail={
            '사진 1장당 최대 크기는 30MB입니다.\n사진은 최대 100장까지 첨부 가능합니다.'
          }
          onClose={() => setIsEditModalOpen(false)}
        />
      </Modal>

      <button onClick={() => setIsButtonModalOpen(true)}>모달 오픈</button>
      <Modal
        isOpen={isButtonModalOpen}
        onClose={() => setIsButtonModalOpen(false)}
      >
        <ModalButtons
          title="페이지에서 나가시겠습니까?"
          detail="지금까지 작성한 내용이 모두 사라집니다."
          left="나가기"
          right="계속 작성하기"
          onClose={() => setIsButtonModalOpen(false)}
          handleLeftBtnClick={() => setIsButtonModalOpen(false)}
          handleRightBtnClick={() => setIsButtonModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
