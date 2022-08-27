import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import apps from "../../../static/compat-data/apps.json";
import playstore from "../../../static/compat-data/playstore.json";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  Avatar,
  Box,
  Paper,
  useTheme,
} from "@mui/material";

/*
 * TODO
 * Add hall of fame / categories
 * Add tags / genres
 * Font formatting / make title bigger
 * Margins
 * Add more apps
 */

export default function CompatOverview(): JSX.Element {
  const theme = useTheme();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Typography variant="h3">Hall of Fame</Typography>
          <Grid container>
            {Object.entries(apps).map(([appId, data]) => {
              return <AppTile appId={appId} key={appId} />;
            })}
          </Grid>
        </div>
      </div>
    </section>
  );
}

const AppTile = ({ appId }) => {
  const theme = useTheme();
  const { iap } = apps[appId];
  const { title, icon, installs, scoreText, url, genre } = playstore[appId];
  const iapColor = iap ? theme.palette.success.main : theme.palette.error.main;
  const iapText = iap ? "IAP patch works!" : "IAP incompatible";
  return (
    <Grid item margin={1}>
      <a href={url}>
        <Card>
          <CardContent sx={{ padding: "8px" }}>
            <Paper
              component={Box}
              elevation={0}
              padding={0.5}
              sx={{ backgroundColor: iapColor }}
            >
              <Typography color={theme.palette.getContrastText(iapColor)}>
                {iapText}
              </Typography>
            </Paper>
            <Box display="flex" mt={1}>
              <Avatar
                src={icon}
                variant="square"
                sx={{ marginRight: 1 }}
              ></Avatar>
              <Box display="flex" flexDirection="column">
                <Typography>{title}</Typography>
                <Typography variant="subtitle2">{appId}</Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">⭐{scoreText}</Typography>
              <Typography variant="subtitle2">📩 {installs}</Typography>
            </Box>
            <Typography variant="subtitle2">{genre}</Typography>
          </CardContent>
        </Card>
      </a>
    </Grid>
  );
};
