import Container from '../components/Utils/Container';
import React from 'react';
import classes from './Form.module.css';
import FormComponent from '../components/Form';

export class Form extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <main className={`main ${classes.form__main}`}>
          <h1 className={classes.form__header}>Add Your TypeJam</h1>
          <FormComponent />
        </main>
      </Container>
    );
  }
}

export default Form;
