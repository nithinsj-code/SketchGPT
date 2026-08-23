import React, { useRef, useState, useEffect } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState({ x: 0, y: 0 });
  const [resultText, setResultText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 5;
    // Fill background with white initially
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    setPrevPos({ x: offsetX, y: offsetY });
    setCurrPos({ x: offsetX, y: offsetY });
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    setPrevPos(currPos);
    setCurrPos({ x: offsetX, y: offsetY });

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(prevPos.x, prevPos.y);
    context.lineTo(currPos.x, currPos.y);
    context.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };
  
  const handleAnalyze = async () => {
    const canvas = canvasRef.current;
    const drawingData = canvas.toDataURL('image/png');
    
    setIsLoading(true);
    setResultText(null);
    
    // Uses the environment variable if available (for Vercel), otherwise defaults to localhost
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    
    try {
      const response = await fetch(`${apiUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ drawing: drawingData }),
      });
      
      const data = await response.json();
      if (data.result === 'success') {
        setResultText(data.text);
      } else {
        alert('Failed to analyze image: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to backend.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setResultText(null);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ border: '2px solid black' }}>
        <canvas
          ref={canvasRef}
          width={256}
          height={256}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={clearCanvas} style={{ padding: '10px 20px', cursor: 'pointer' }}>Clear</button>
        <button onClick={handleAnalyze} disabled={isLoading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {isLoading ? 'Analyzing...' : 'Analyze Drawing'}
        </button>
      </div>

      {resultText && (
        <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Gemini says:</h3>
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
};

export default DrawingCanvas;
