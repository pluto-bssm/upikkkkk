import React from "react";
import styled from "@emotion/styled";

type Props = {
  ItemsCount: number;
  Items: React.ReactNode | React.ReactNode[]; 
};

const HeaderItems = ({ ItemsCount, Items }: Props) => {

  const itemsArray = Array.isArray(Items) ? Items : [Items];

  const renderItems = () => {
    switch (ItemsCount) {
      case 1:
        return (
          <ItemsPageLayout>
            <div className="w-full max-w-xs">
              {itemsArray[0]}
            </div>
          </ItemsPageLayout>
        );
      
      case 2:
        return (
          <ItemsPageLayout>
            <div className="flex-1 max-w-xs">
              {itemsArray[0]}
            </div>
            <div className="flex-1 max-w-xs">
              {itemsArray[1] || itemsArray[0]}
            </div>
          </ItemsPageLayout>
        );
      
      case 3:
        return (
          <ItemsPageLayout>
            
              {itemsArray[0]}
 
           
              {itemsArray[1] || itemsArray[0]}

            
              {itemsArray[2] || itemsArray[0]}

          </ItemsPageLayout>
        );
      
      default:
        return (
          <ItemsPageLayout>
            {Array.from({ length: ItemsCount }, (_, index) => (
              <div key={index} className="flex justify-center">
                {itemsArray[index] || itemsArray[0]}
              </div>
            ))}
          </ItemsPageLayout>
        );
    }
  };

  return (
    <div>
      {renderItems()}
    </div>
  );
};

export default HeaderItems;


const ItemsPageLayout = styled.div`
    display :flex;
    flex-direction : row;
    gap : 8px;

`