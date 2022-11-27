import React, { useState, useEffect } from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const AddPicturesAndVideo = ({images, setImages}) => {
  const [imageFiles, setImageFiles] = useState([]);

  const changeHandler = (e) => {
    console.log(e.target.value)
    const { files } = e.target;
    console.log(files)
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file)
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      console.log(validImageFiles)
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);


  return(
    <div style={{ margin: "auto", width: "80%"}}>
       <label htmlFor="file"
        style={{
          paddingLeft: "1rem",
          marginTop: "1rem",
          fontWeight: 600,
        }}
      >
        Add Campaign's Images:
      </label>
    <p>
          {/* <label htmlFor="file">Upload images</label> */}

          <input
          style={{    border: '1px solid black',
          padding: '11px',
          margin: '1rem 3rem',
          width: '41rem',
          borderRadius: '5px',
          }}
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg"
            multiple
            />
        </p>
        {images.length > 0 ? (
          <div style={{display:"block", textAlign:"center"}}>
            {images.map((image, idx) => {
              return (
                <p key={idx}>
                  {" "}
                  <img style={{
                    height: '15rem',
                    // margin: '1rem',
                    padding: '1rem',
                    border: '1px solid',
                    borderRadius: '1rem',
                  }} src={image} alt="" />{" "}
                </p>
              );
            })}
          </div>
        ) : null}
    </div>
  )

}



















// const AddPicturesAndVideo = () => {
//   const { control } = useFormContext();
//   return (
//     <div style={{ margin: "auto", width: "80%"}}>
//       <div
//         style={{
//           paddingLeft: "1rem",
//           marginTop: "1rem",
//           fontWeight: 600,
//         }}
//       >
//         Add Campaign's Image:
//       </div>
//       <Controller
//         control={control}
//         name="picture"
//         render={({ field }) => (
//           <TextField
//             id="picture"
//             // label="Add Picture"
//             accept="image/*"
//             type="file"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             {...field}
//           />
//         )}
//       />
//     </div>
//   );
// };

export default AddPicturesAndVideo;
