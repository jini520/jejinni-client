import React from 'react'

const colorMap = {
  0: "orange",
  1: "green",
  2: "blue",
};

const useColor = () => {
  const getColor = (id: string) => {
    return colorMap[id.charCodeAt(0) % 3 as keyof typeof colorMap];
  }
  return {
    getColor,
  }
}

export default useColor