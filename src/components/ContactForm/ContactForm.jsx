import { Form, Formik, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => onAdd(values.name, values.number, actions)}
      validationSchema={{}}
    >
      <Form className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <Field
          type="input"
          name="name"
          className={styles.contactFormInput}
        ></Field>
        <ErrorMessage>Required!</ErrorMessage>
        <label htmlFor="number">Number</label>
        <Field
          type="input"
          name="number"
          className={styles.contactFormInput}
        ></Field>
        <ErrorMessage>Required!</ErrorMessage>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
