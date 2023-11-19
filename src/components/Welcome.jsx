import Alert from 'react-bootstrap/Alert';

export default function AdditionalContentExample() {
  return (
    <Alert variant="info" className='px-5'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <h3>
        Please select your favourite genre and choose your books!
        <hr />
        <strong>WELCOME IN EPIBOOKS</strong>
      </h3>
    </Alert>
  );
}