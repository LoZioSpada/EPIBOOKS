import Alert from 'react-bootstrap/Alert';

export default function AdditionalContentExample() {
  return (
    <Alert variant="info" className='px-5'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message.
        Please search and choose your favourite books!
        <hr />
        <strong>WELCOME IN EPIBOOKS</strong>
      </p>
    </Alert>
  );
}