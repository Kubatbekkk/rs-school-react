import Container from '../components/Utils/Container';
import React from 'react';
import classes from './Form.module.css';

export class Form extends React.Component {
  render() {
    return (
      <Container>
        <main className={`main ${classes.form__main}`}>
          <h1 className={classes.form__header}>Publish you TypeJam</h1>
          <form>
            <input type="text" name="jamName" id="jamName" />
          </form>
        </main>
      </Container>
    );
  }
}

export default Form;
