export  const groupByType = (data) => {
    const groupedData = {};
  
    data.forEach((item) => {
      const { type } = item;
  
      if (!groupedData[type]) {
        groupedData[type] = [];
      }
  
      groupedData[type].push(item);
    });
  
    return groupedData;
  };

