interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
  type: string;
}

interface InputRangeProps {
  children: React.ReactNode;
  id: string;
  name: string;
  type: string;
  min: number;
  max: number;
}
export const InputForm: React.FC<InputProps> = ({
  type,
  children,
  id,
  name,
}) => {
  return (
    <div className="text-md">
      <p className="text-left">{children}</p>
      <input
        type={type}
        id={id}
        name={name}
        className="border-gray-400 border-b-2"
      />
      <div className="mb-5" />
    </div>
  );
};
export const InputRangeForm: React.FC<InputRangeProps> = ({
  children,
  id,
  name,
  min,
  max,
}) => {
  return (
    <div className="text-md">
      <p className="text-left">{children}</p>
      <input
        type="range"
        id={id}
        name={name}
        className="border-gray-400 border-b-2"
        min={min}
        max={max}
      />
      <div className="mb-5" />
    </div>
  );
};
export const ImageGenerationInputForm: React.FC<InputProps> = ({
  type,
  children,
  id,
  name,
}) => {
  return (
    <div className="text-md">
      <p className="text-left">{children}</p>
      <input
        type={type}
        id={id}
        name={name}
        className="border-gray-400 border-b-2"
      />
      <div className="mb-5" />
    </div>
  );
};
