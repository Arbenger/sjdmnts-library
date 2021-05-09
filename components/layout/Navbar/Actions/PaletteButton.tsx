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
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BiPalette as PaletteIcon } from "react-icons/bi";
import { Fragment } from "react";
import { getCustomPaletteItems } from "components/layout/Theme/functions";
import { useAppDispatch } from "redux/hooks";
import { changeTheme } from "redux/themeSlice";
import { CustomPaletteItem } from "components/layout/Theme/types";

const useStyles = makeStyles(({ spacing, customPalette }) => {
  const ITEM_WIDTH = 30,
    ITEM_HEIGHT = ITEM_WIDTH,
    ITEM_BORDER_RADIUS = 5,
    ITEM_BORDER_WIDTH = 4;

  const customPaletteItemsWithProperties = (() => {
    let items = getCustomPaletteItems(),
      properties = {};

    items.forEach((item) => {
      const palette = customPalette[item];
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
      ...customPaletteItemsWithProperties,
    },
  };
});

export default function PaletteButton() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const customPaletteItems = getCustomPaletteItems();
  const classes = useStyles();

  const handleItemClick = (item: CustomPaletteItem) => {
    dispatch(changeTheme(item));
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
                {customPaletteItems.map((item) => (
                  <Grid item key={item}>
                    <Tooltip title={item} aria-label={item}>
                      <Box
                        className={`${classes.paletteItem} ${item}`}
                        data-active={theme.customPalette.current === item}
                        onClick={() => handleItemClick(item)}
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
