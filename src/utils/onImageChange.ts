import type { Dispatch, SetStateAction } from "react";

export const onImageChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setImage: Dispatch<SetStateAction<string>>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    setImage(reader.result as string);
  };
  reader.readAsDataURL(file);

  e.currentTarget.value = "";
};
