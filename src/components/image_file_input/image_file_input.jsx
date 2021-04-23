import React, { memo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(
  ({ imageUploader, name, onFileChange }) => {
    const [loading, setLoaing] = useState(false);
    const inputRef = useRef();
    const onButtonClick = (event) => {
      event.preventDefault();
      inputRef.current.click();
    }
  
    const onChange = async (event) => {
      setLoaing(true);
      const uploaded = await imageUploader.upload(event.target.files[0])
      setLoaing(false);
      onFileChange({
        name: uploaded.original_filename,
        url: uploaded.url,
      })
    }
  
    return (
      <div className={styles.container}>
        <input ref={inputRef} className={styles.input} type="file" accept="iamge/*" name="file" onChange={onChange}/>
        { !loading && (
          <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
            {name || 'No file'}
          </button>
        )}
        { loading && <div className={styles.loading}></div>}
      </div>
    );
  }   
)
export default ImageFileInput;