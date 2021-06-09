import { Box, Button, Chip, Icon, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "../styles/NestedList.module.scss";

const NestedList = ({ blinder, groups, title, keyName, mt, button, index }) => {
  return (
    <Box component="section" mt={mt} className={styles.nestedList}>
      <Typography variant="h5" component="h2" className="sectionTitle">
        {blinder(title, "titles")}
      </Typography>
      {index && (
        <div className={styles.categoryIndex}>
          {groups.map((_group) => (
            <Button
              variant="contained"
              className={styles.btnCategoryIndex}
              key={_group.groupTitle + "button"}
              href={`#${keyName}-${_group.groupTitle}`}
            >
              {_group.groupTitle}
            </Button>
          ))}
        </div>
      )}
      <div className={styles.nestedListListing}>
        {groups.map((_group) => (
          <div
            className={styles.nestedListGroup}
            key={_group.groupTitle + title}
          >
            {keyName && (
              <a
                id={`${keyName}-${_group.groupTitle}`}
                href={`#${keyName}-${_group.groupTitle}`}
              >
                <Typography variant="h6" component="h3">
                  {blinder(_group.groupTitle, "titles", false, 0, 1)}
                </Typography>
              </a>
            )}
            {!keyName && (
              <Typography variant="h6" component="h3">
                {blinder(_group.groupTitle, "titles")}
              </Typography>
            )}
            {_group.items.map((_item) => (
              <Link key={_item.title + _item.url} href={_item.url}>
                <a className={styles.nestedListItem} title={_item.title}>
                  {blinder(_item.title.replace(" ♂", ""), "titles")}
                  {_item.title.includes(" ♂") && (
                    <Icon className={styles.icon}>male</Icon>
                  )}
                  <Chip
                    className={styles.total}
                    icon={<Icon>ondemand_video</Icon>}
                    size="small"
                    label={_item.total}
                  />
                </a>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {button && (
        <Box mt={3} display="flex" width="100%" justifyContent="center">
          <Link href={button.href}>
            <a>
              <Button variant="outlined" color="primary">
                {blinder(button.label, "titles")}
              </Button>
            </a>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default NestedList;
