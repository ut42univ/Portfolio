const { useState } = require("react");

export const useHandleLoading = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return { loading, handleLoadingComplete };
};
