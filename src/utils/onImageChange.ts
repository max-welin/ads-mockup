import type { Dispatch, SetStateAction } from "react";

export const onImageChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<string>>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  console.log(setter, e);

  const reader = new FileReader();
  reader.onload = () => {
    setter(reader.result as string);
  };
  reader.readAsDataURL(file);

  e.currentTarget.value = "";
};
