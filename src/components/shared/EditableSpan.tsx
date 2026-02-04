import React from "react";

interface EditableSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  className: string;
  onBlurFn: (value: string) => void;
  spanRef?: React.Ref<HTMLSpanElement>;
  maxLength?: number;
}

const EditableSpan: React.FC<EditableSpanProps> = ({
  text,
  className,
  onBlurFn,
  spanRef,
  maxLength,
  ...props
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    const rawText = e.currentTarget.textContent ?? "";
    const nextText = maxLength ? rawText.slice(0, maxLength - 3) : rawText;
    onBlurFn(nextText);
  };

  return (
    <span
      contentEditable
      suppressContentEditableWarning
      className={className}
      onBlur={handleBlur}
      ref={spanRef}
      {...props}
    >
      {text}
    </span>
  );
};

export default EditableSpan;
