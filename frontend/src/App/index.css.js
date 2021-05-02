export default function styles(theme) {
  return {
    siteContent: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    site: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      backgroundColor: theme.backgroundColor,
    },
  };
}
