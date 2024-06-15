import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileInput() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setSelectedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      try {
        const response = await fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          console.log('Files uploaded successfully.');
        } else {
          console.error('Failed to upload files.');
        }
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    } else {
      alert('Please select one or more files to upload.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p style={textStyle}>Drop the files here ...</p> :
            <p style={textStyle}>Drag And Drop Or Click To Browse Files</p>
        }
      </div>
      {selectedFiles.length > 0 && (
        <div style={{ width: '60%', marginTop: '20px' }}>
          <h4 style={textStyle1}>Selected Files:</h4>
          <ul>
            {selectedFiles.map(file => (
              <li key={file.name} style={textStyle1}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
          <button style={buttonStyle} onClick={handleUpload}>Save Files</button>
        </div>
      )}
    </div>
  );
}

const dropzoneStyles = {
  border: '2px dashed #aaa',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  color: 'white',
  width: '60%',
  marginBottom: '50px'
};

const textStyle1 = {
  color: 'white',
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 500,
  fontSize: '10px',
};

const textStyle = {
  color: 'white',
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 500,
  fontSize: '40px',
};

const buttonStyle = {
  backgroundColor: '#B9FD50',
  borderRadius: '10%',
  padding: '10px 20px',
  border: '2px solid black', // Set border to black
  color: 'black', // Set font color to black
  cursor: 'pointer',
  fontFamily: 'Outfit, sans-serif',
  fontWeight: 500,
  fontSize: '30px',
  marginBottom:'20px'
};

export default FileInput;
