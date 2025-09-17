import styled from '@emotion/styled'
import { useState } from 'react';
import React from 'react';

const Defaultnavs = ['전체', '학교생활', '기숙사', '유머'];
const Questionnavs = ['전체', '인기'];

type Props = {
    type: string;
    onOptionClick?: () => void;
};

const HeaderNavigaionBar = ({ type, onOptionClick }: Props) => {
    const [activeIdx, setActiveIdx] = useState(0);

    const handleOptionClick = () => {

        if (onOptionClick) {
            onOptionClick();
        }
    };

    const renderItems = () => {
        switch (type) {
            case "default":
                return (
                    <NavWrapper>
                        <Navs>
                            {Defaultnavs.map((nav, idx) => (
                                <React.Fragment key={nav}>
                                    <NavItem
                                        active={activeIdx === idx}
                                        onClick={() => setActiveIdx(idx)}
                                    >
                                        {nav}
                                    </NavItem>
                                    {idx < Defaultnavs.length - 1 && (
                                        <img src="svg/Divider.svg" alt="Divider" width={2} height={20} key={`divider-${idx}`} />
                                    )}
                                </React.Fragment>
                            ))}
                        </Navs>

                        <OptionButton onClick={handleOptionClick}>
                            <img
                                src="svg/Navoption.svg"
                                alt="옵션"
                            />
                        </OptionButton>

                    </NavWrapper>
                );

            case "Nones":
                return (
                    <>
                    </>
                );

            case "Question":
                return (
                    <NavWrapper>
                        {Questionnavs.map((nav, idx) => (
                            <React.Fragment key={nav}>
                                <NavItem
                                    active={activeIdx === idx}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    {nav}
                                </NavItem>
                                {idx < Questionnavs.length - 1 && (
                                    <img src="svg/Divider.svg" alt="Divider" width={2} height={20} key={`divider-${idx}`} />
                                )}
                            </React.Fragment>
                        ))}
                    </NavWrapper>
                );

            default:
                return null;
        }
    };

    return (
        <>
            {renderItems()}
        </>
    );
}

export default HeaderNavigaionBar

const Navs = styled.div`
  display : flex;
  align-items: center;
  text-align: center;
  gap: 8px;
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  max-width : 600px;
`

const NavItem = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#FF9900' : '#D3D3D3')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: ${({ active }) => (active ? '16px' : '14px')};
  cursor: pointer;
  transition: all 0.3s ease;
`

const OptionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  
  &:hover {
    opacity: 0.7;
  }
`
