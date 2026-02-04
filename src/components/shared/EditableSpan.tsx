import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  className: string | undefined;
  onBlurFn: (value: string) => void;
  spanRef?: React.Ref<HTMLSpanElement>;
  maxLength?: number;
}

const EditableSpan = ({
  text,
  className,
  onBlurFn,
  spanRef,
  maxLength,
  ...props
}: Props) => {
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
