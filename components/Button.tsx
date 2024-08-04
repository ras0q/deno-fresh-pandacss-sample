import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
// @deno-types="../static/styled-system/css/index.d.mts"
import { css } from "../static/styled-system/css/index.mjs";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={css({
        px: 2,
        py: 1,
        borderColor: "gray.500",
        borderWidth: 2,
        borderRadius: "sm",
        bg: "white",
        _hover: {
          bg: "gray.200",
        },
        transitionProperty: "background-color, border-color, color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
      })}
    />
  );
}
