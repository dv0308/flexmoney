import React from "react";
import classes from "./Batch.module.css"
import Input from "./Input";

const Batch = (props) => {
    return <fieldset>
        <legend className={classes.legend}>Please Select The Batch Timings</legend>
        <div className={classes.selections}>
        <input type="radio" name="grid" id="6to7" value="6to7" />
        <label for="yes">6-7AM</label>
        <input type="radio" name="grid" id="7to8" value="7to8" />
        <label for="no">7-8AM</label>
        <input type="radio" name="grid" id="8to9" value="8to9" />
        <label for="no">8-9AM</label>
        <input type="radio" name="grid" id="5to6" value="5to6" />
        <label for="no">5-6PM</label>
        </div>
      </fieldset>
}

export default Batch
