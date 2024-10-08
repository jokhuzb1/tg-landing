import React, { useReducer } from "react";
import { motion } from "framer-motion";

type State = {
  rangeValue: number;
};

type Action =
  | { type: "change"; payload: number }
  | { type: "move"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "change":
      return {
        rangeValue: action.payload,
      };
    case "move":
      return {
        rangeValue: Math.round(action.payload),
      };
    default:
      return state;
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type PointerEvent = React.PointerEvent<HTMLDivElement>;
type InlineStyle = React.CSSProperties;

interface Props {
  beforeImage: string;
  afterImage: string;
  onChange?: (event: ChangeEvent) => void;
  onPointerMove?: (event: PointerEvent) => void;
  onPointerEnter?: (event: PointerEvent) => void;
  onPointerLeave?: (event: PointerEvent) => void;
  pointerMove?: boolean;
  className?: string;
  beforeClassName?: string;
  afterClassName?: string;
  buttonClassName?: string;
  style?: InlineStyle;
  beforeStyle?: InlineStyle;
  afterStyle?: InlineStyle;
  buttonStyle?: InlineStyle;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  onChange,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  pointerMove = false,
  className = "before-after-slider",
  beforeClassName = "before",
  afterClassName = "after",
  buttonClassName = "resize-button",
  style,
  beforeStyle,
  buttonStyle,
}: Props) {
  const [{ rangeValue }, dispatch] = useReducer(reducer, {
    rangeValue: 50,
  });

  const handleChange = (event: ChangeEvent) => {
    dispatch({ type: "change", payload: Number(event.target.value) });

    if (onChange) onChange(event);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const positionX = clientX - left;

    if (positionX >= 0)
      dispatch({ type: "move", payload: (positionX / width) * 100 });

    if (onPointerMove) onPointerMove(event);
  };

  const handlePointerEnter = (event: PointerEvent) => {
    if (!onPointerEnter) return;

    onPointerEnter(event);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    if (!onPointerLeave) return;

    onPointerLeave(event);
  };

  return (
    <motion.div
      className={className}
      style={{
        position: `relative`,
        overflow: `hidden`,
        width: "100%",
        maxWidth: "100%", // Ensures it doesn't grow beyond a max width
        height: "auto",
        margin: "auto",
        cursor: "e-resize",
        userSelect: "none",

        ...style,
      }}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.2 }}
      onPointerMove={pointerMove ? handlePointerMove : undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={beforeClassName}
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "100%", // Maintain full width
          height: "100%",
          top: 0,
          left: 0,
          clipPath: `inset(0 ${100 - rangeValue}% 0 0)`, // Clip the "before" image
          ...beforeStyle,
        }}
      >
        <img
          src={beforeImage}
          alt="before"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Maintain aspect ratio
        />
      </div>

      <div className={afterClassName} style={{ height: "100%" }}>
        <img
          src={afterImage}
          alt="after"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Maintain aspect ratio
        />
      </div>

      {!pointerMove && (
        <>
          <input
            type="range"
            min={0}
            max={100}
            value={rangeValue}
            name="slider"
            onChange={handleChange}
            style={{
              appearance: "none",
              backgroundColor: "transparent",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "inherit",
            }}
          />
          <div
            className={buttonClassName}
            style={{
              backgroundColor: "#fff",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              left: `${rangeValue}%`,
              transform: `translate(-50%,-50%)`,
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...buttonStyle,
            }}
          >
            <svg
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M24,12l-5.7-5.7V11c-3.7,0-9,0-12.6,0V6.3L0,12l5.8,5.7V13c3.6,0,8.9,0,12.5,0v4.7L24,12z" />
            </svg>
          </div>
        </>
      )}
    </motion.div>
  );
}
