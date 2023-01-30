import React, { useState, useEffect } from "react";
import { projectStorage } from "../../../firebase/config";
const useStorage = (file) => {
  const [progress, setProgress] = useState();
  const [error, setError] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    // refreencees

    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_chnged",
      (snap) => {
        let percentage = (snap.bytesTransferd / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
