import { ThemeProvider, lightTheme, Button } from "@strapi/design-system";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button>Default button</Button>
    </ThemeProvider>
  );
}

export default App;
