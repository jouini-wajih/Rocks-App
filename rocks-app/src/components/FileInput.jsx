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
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p style={{ color: 'white' }}>Drop the files here ...</p> :
            <p style={{ color: 'white' }}>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      {selectedFiles.length > 0 && (
        <div>
          <h4 style={{ color: 'white' }}>Selected Files:</h4>
          <ul>
            {selectedFiles.map(file => (
              <li key={file.name} style={{ color: 'white' }}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
          <button onClick={handleUpload}>Upload Files</button>
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
  color: 'white', // Ensure text color is white for the main container
};

export default FileInput;
