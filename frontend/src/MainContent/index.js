import React, { useState } from "react";

import styles from "./index.css.js";

import {
  withStyles,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

import { getImg } from "../Requests";

import { FiSend } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
const validUrl = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const MainContent = (props) => {
  const { classes } = props;

  const [url, setUrl] = useState("");
  const [img, setImg] = useState(""); //base64-encoded
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const attempt = await getImg(url);
    if (attempt.success) {
      setImg(attempt.value);
      setError("");
    } else {
      setError(`There was an error. Make sure the URL is in proper format.`);
    }
    setLoading(false);
  }

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <Typography variant="h4">Previewaroo</Typography>
        <Typography>
          Enter the URL you wish to preview.
        </Typography>
        <br></br>
        {error ? (
          <Typography>{error}</Typography>
        ) : (
          <>
            {img ? <img alt={`Screenshot of ${url}`} src={`data:image/png;base64,${img}`} /> : ""}
          </>
        )}
        <div className={classes.inputWrapper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="url"
                label="URL"
                variant="outlined"
                fullWidth
                multiline
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                error={!!url && !validUrl(url)}
                helperText={!!url && !validUrl(url) && `Not a valid URL format.`}
              />
            </Grid>
          </Grid>
        </div>
        <br />
        <Button
          variant="contained"
          color="primary"
          endIcon={loading ? <AiOutlineLoading3Quarters /> : <FiSend />}
          disabled={loading}
          onClick={onSubmit}
        >
          {loading ? "Loading" : "Send"}
        </Button>
      </form>
    </>
  );
};

export default withStyles(styles)(MainContent);