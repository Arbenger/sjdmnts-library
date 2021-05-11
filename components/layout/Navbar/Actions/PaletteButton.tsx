import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Popover,
  Tooltip,
  useTheme,
} from "@material-ui/core";
import { Fragment } from "react";
import { useAppDispatch } from "redux/hooks";
import { BiPalette as PaletteIcon } from "react-icons/bi";
import { changeAppPalette } from "redux/themeSlice";
import { AppPaletteKey } from "components/ThemeSetter/types";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import utils from "components/ThemeSetter/appPaletteUtils";

const useStyles = makeStyles(({ spacing, appPalette }) => {
  const ITEM_WIDTH = 30,
    ITEM_HEIGHT = ITEM_WIDTH,
    ITEM_BORDER_RADIUS = 5,
    ITEM_BORDER_WIDTH = 4;

  const appPalettesStyles = (() => {
    const keys = utils.getKeys();
    let properties = {};

    keys.forEach((item) => {
      const palette = appPalette[item];
      properties[`&.${item}`] = {
        backgroundColor: palette.main,
        "&:hover, &[data-active='true']": {
          borderColor: palette.dark,
        },
      };
    });
    return properties;
  })();

  return {
    root: {
      maxWidth: 152 + 8,
      padding: spacing(1),
    },
    paletteItem: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      borderRadius: ITEM_BORDER_RADIUS,
      borderWidth: ITEM_BORDER_WIDTH,
      borderStyle: "solid",
      borderColor: "transparent",
      cursor: "pointer",
      ...appPalettesStyles,
    },
  };
});

export default function PaletteButton() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const appPaletteKeys = utils.getKeys();

  const handleItemClick = (item: AppPaletteKey) => {
    dispatch(changeAppPalette(item));
  };

  return (
    <PopupState variant="popover" popupId="palettte-selector">
      {(popupState) => (
        <Fragment>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="palette"
            {...bindTrigger(popupState)}
          >
            <PaletteIcon />
          </IconButton>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Paper className={classes.root}>
              <Grid container spacing={1}>
                {appPaletteKeys.map((key) => (
                  <Grid item key={key}>
                    <Tooltip title={key} aria-label={key}>
                      <Box
                        className={`${classes.paletteItem} ${key}`}
                        data-active={theme.appPalette.current === key}
                        onClick={() => handleItemClick(key)}
                      />
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Popover>
        </Fragment>
      )}
    </PopupState>
  );
}
