import styled from '@emotion/styled'
import { useState } from 'react';
import React from 'react';


const navs = ['전체', '학교생활', '기숙사', '유머'];

type Props = {
  type: string;
};


const HeaderNavigaionBar = ({ type }: Props) => {
    const [activeIdx, setActiveIdx] = useState(0);

    const renderItems = () => {
        switch(type){
            case "main":
                return (
                    <NavWrapper>
                        {navs.map((nav, idx) => (
                            <React.Fragment key={nav}>
                                <NavItem
                                    active={activeIdx === idx}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    {nav}
                                </NavItem>
                                {idx < navs.length - 1 && (
                                    <img src="svg/Divider.svg" alt="Divider" width={2} height={20} key={`divider-${idx}`} />
                                )}
                            </React.Fragment>
                        ))}
                    </NavWrapper>
                );

            case "votemake" :
                <>
                </>


        }
    };

    return (
        <>
      {renderItems()}
        </>
  );

    
}

export default HeaderNavigaionBar

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  height: 40px;
  width: 100%;
  min-width : 600px;
  gap: 10px;
  
`

const NavItem = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#FF9900' : '#D3D3D3')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: ${({ active }) => (active ? '16px' : '14px')};
  cursor: pointer;
  transition: all 0.3s ease;
`
