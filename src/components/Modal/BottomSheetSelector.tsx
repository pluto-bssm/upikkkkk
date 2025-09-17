import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type SelectorItem = {
  value: string;
  label: string;
  badge?: string;
};

type Props = {
  title: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  items: SelectorItem[];
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  showArrowIcon?: boolean;
  arrowIconSrc?: string;
};

export default function BottomSheetSelector({
  title,
  selectedValue,
  setSelectedValue,
  items,
  isOpen,
  setIsOpen,
  showArrowIcon = true,
  arrowIconSrc = "/svg/Select.svg"
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Background
          key="bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          <MotionBox
            key="selector-box"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <Title>{title}</Title>
            <ItemList>
              {items.map((item) => (
                <ItemContainer key={item.value}>
                  <ItemRow
                    selected={item.value === selectedValue}
                    onClick={() => setSelectedValue(item.value)}
                  >
                    <ItemText selected={item.value === selectedValue}>
                      {item.label}
                    </ItemText>

                    <RightSection>
                      {item.badge && <Badge>{item.badge}</Badge>}
                      {item.value === selectedValue && showArrowIcon && (
                        <ArrowIcon>
                          <img src={arrowIconSrc} alt="selected" width={25} height={25} />
                        </ArrowIcon>
                      )}
                    </RightSection>
                  </ItemRow>
                </ItemContainer>
              ))}
            </ItemList>
          </MotionBox>
        </Background>
      )}
    </AnimatePresence>
  );
}

const MotionBox = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background: #fdfffc;
  border-radius: 24px 24px 0 0;
  padding: 32px 24px 0 24px;
  box-sizing: border-box;
  position: fixed;
  height: 64vh;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 1000;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #011627;
  margin-bottom: 32px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #c8c8c8;
    margin: 0 auto 12px auto;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: calc(70vh - 120px);
  padding-right: 4px;
  

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const ItemContainer = styled.div`
  margin-bottom: 24px;
`;

const ItemRow = styled.li<{ selected?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.span<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#FF9F1C" : "#011627")};
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #9CA3AF;
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  display: flex;
  align-items: end;
  justify-content: center;
`;

