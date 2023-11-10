import Alert from 'react-bootstrap/Alert';
import styles from "./style.module.scss"

export default function AdditionalContentExample() {
  return (
    <Alert variant="info" className='px-5'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <h3>
        Please search and choose your favourite books!
        <hr />
        <strong>WELCOME IN EPIBOOKS</strong>
      </h3>
    </Alert>
  );
}