import React from "react";

interface EditableSpanProps {
  text: string;
  className: string;
  onBlurFn: React.Dispatch<React.SetStateAction<string>>;
  ref?: React.Ref<HTMLSpanElement>;
}

const EditableSpan = ({
  text,
  className,
  onBlurFn,
  ref,
  ...props
}: EditableSpanProps) => {
  return (
    <span
      contentEditable
      suppressContentEditableWarning
      className={className}
      onBlur={(e) => onBlurFn(e.currentTarget.textContent ?? "")}
      {...props}
    >
      {text}
    </span>
  );
};

export default EditableSpan;
