import React from 'react';
import classes from './Form.module.css';

export class FormComponent extends React.Component {
  render(): JSX.Element {
    return (
      <form>
        <label htmlFor="fName">
          Firstname
          <input type="text" name="fName" id="fName" className={classes.form__text} />
          <span>Firstname should be at least 4char long</span>
        </label>
        <label htmlFor="lName">
          Lastname
          <input type="text" name="lName" id="lName" className={classes.form__text} />
          <span>Lastname should be at least 4char long</span>
        </label>
      </form>
    );
  }
}
export default FormComponent;
