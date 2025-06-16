export interface ITitleProps {
  text: string;
  color?: string; 
}

const Title: React.FC<ITitleProps> = ({ text, color="[#297DA6]"}) => {
  return (
    <h1
      className={`text-5xl md:text-6xl md:mx-30 md:py-10 text-center mb-4 font-bold leading-relaxed drop-shadow-sm md:text-left ${color? "text-"+color:""}`}
    >
      {text}
    </h1>
  );
};

export default Title;
