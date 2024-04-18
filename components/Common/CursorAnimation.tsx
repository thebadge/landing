"use client";
import Cursor from "@/components/ui/cursor";
import { animated, useSpring } from "@react-spring/web";

export default function CursorAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    transform: `translate3d(0px, 0px, 0)`,
  }));

  function handleMouseMove(event) {
    setAnimatedProps({
      transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
    });
  }

  return (
    <div onMouseMove={handleMouseMove} className="animationContainer">
      {children}
      <div className="containerCursor">
        <animated.div style={animatedProps} className="wrapperCursor">
          <Cursor />
        </animated.div>
      </div>
    </div>
  );
}
