import { createCn } from "cn/config"

/**
 * Class merger that knows the ByteSpace theme tokens from globals.css,
 * so custom font sizes (text-label-m) are not mistaken for text colors.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "heading-l", "heading-m", "heading-s", "heading-xs",
            "title", "display-404", "display-stat", "display-xs",
            "body-l", "body-m", "body-s", "body-xs", "caption",
            "label-xl", "label-l", "label-m", "label-s", "label-xs",
            "logo",
          ],
        },
      ],
      rounded: [{ rounded: ["pill", "panel", "media"] }],
      "drop-shadow": [{ "drop-shadow": ["float"] }],
      "max-w": [{ "max-w": ["page", "frame"] }],
      w: [{ w: ["page", "frame"] }],
    },
  },
})
