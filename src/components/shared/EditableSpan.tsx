import React, { useState } from "react";

interface EditableSpanProps {
  text: string;
  className: string;
  onBlurFn: React.Dispatch<React.SetStateAction<string>>;
  ref?: React.Ref<HTMLSpanElement>;
  maxLength?: number;
}

const EditableSpan = ({
  text,
  className,
  onBlurFn,
  ref,
  maxLength,
  ...props
}: EditableSpanProps) => {
  const [slicedText, setSlicedText] = useState("");

  let updatedText = null;

  const handleBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    if (maxLength) {
      updatedText = e.currentTarget.textContent?.slice(0, maxLength - 3) ?? "";
      setSlicedText(updatedText);
    } else {
      updatedText = e.currentTarget.textContent ?? "";
    }
    onBlurFn(updatedText);
  };

  return (
    <span
      contentEditable
      suppressContentEditableWarning
      className={className}
      onBlur={handleBlur}
      {...props}
    >
      {slicedText ? slicedText : text}
    </span>
  );
};

export default EditableSpan;
