import { Grid, makeStyles } from "@material-ui/core";
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { LeftBar } from "app/components/LeftBar/Leftbar";
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Blocommerce App"
        />
      </Helmet>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          {/* <Feed /> */}
        </Grid>
      </Grid>
      <PageWrapper>
      </PageWrapper>
    </>
  );
}
