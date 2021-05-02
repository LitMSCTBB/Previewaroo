export default function styles(theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      padding: "5% 10%",
      textAlign: "center",
    },
    noHover: {
      pointerEvents: "none",
    },
    inputWrapper: {
      width: "80%",
      margin: "auto",
    },
    input: {
      margin: theme.spacing(1),
    },
  };
}
