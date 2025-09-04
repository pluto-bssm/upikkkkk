import styled from "@emotion/styled";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Select from "@/app/Images/Select.svg";


type Props = {
  category: string;
  setGuideCategory: (category: string) => void;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

const categories = ["기숙사", "학교생활", "유머"];

export default function CategoryChoseBox({ category, setGuideCategory, isOpen, setIsOpen }: Props) {
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
            key="category-box"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <Title>카테고리 선택</Title>
            <CategoryList>
              {categories.map((cat) => (
                <CategoryItem
                  key={cat}
                  selected={cat === category}
                  onClick={() => setGuideCategory(cat)}
                >
                  {cat}

                  {cat === category && (
                    <ArrowIcon>
                      <Image src={Select} alt="arrow" width={25} height={25} />
                    </ArrowIcon>
                  )}
                </CategoryItem>
              ))}
            </CategoryList>
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

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li<{ selected?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ selected }) => (selected ? "#FF9F1C" : "#011627")};
  margin-bottom: 24px;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowIcon = styled.div`

`;


const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: end;
  justify-content: center;
`;
