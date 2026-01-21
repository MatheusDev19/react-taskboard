import { StyledEngineProvider } from "@mui/material/styles";
import { Fragment, type PropsWithChildren } from "react";

export function GlobalProvider({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </Fragment>
  );
}
