import { useState, useEffect } from "react";

const useChooseAvatar = () => {
  const [event, setEvent] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const file = event?.target?.files[0];

  useEffect(() => {
    if (!event) {
      return;
    }
    if (file !== undefined) {
      setAvatar(file);
    }
  }, [event, avatar, file]);

  return [avatar, setEvent, setAvatar];
};

export default useChooseAvatar;
