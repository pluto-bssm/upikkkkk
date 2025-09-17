


export default function GuideCategoryImage({ category }: { category: string }) {
  if (category === "학교생활") {
    return <img src="svg/MakeSchool.svg" alt="MakeSchool" width={100} height={100} />;
  }
  if (category === "기숙사") {
    return <img src="svg/Domitory.svg" alt="Domitory" width={100} height={100} />;
  }
  if (category === "유머") {
    return <img src="svg/Humor.svg" alt="Humor" width={100} height={100} />;
  }
  return null;
}