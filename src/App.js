import './App.css';
import Button from './Button';

function App() {
  const handleButtonClick1 = () => {
    alert('I am button 1 clicked');
  };

  const handleButtonClick2 = () => {
    alert('I am button 2 clicked');
  };

  const button1Props = {
    buttonText: 'Button 1',
    buttonStyle: {
      color: 'white',
      background: 'red',
    },
    onClick: handleButtonClick1,
  };

  const button2Props = {
    buttonText: 'Button 2',
    buttonStyle: {
      color: 'white',
      background: 'blue',
    },
    onClick: handleButtonClick2,
  };

  return (
    <div className="App">
        <Button {...button1Props} />
        <Button {...button2Props} />

    </div>
  );
}

export default App;