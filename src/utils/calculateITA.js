export const calculateITA = (obj) => {
    let total = 0;
  
    let wiki = 0;
    let explanation = 0;
    let revision = 0;
    let doubt = 0;
  
    if (obj.doubt) {
      const length = Object.keys(obj.doubt).length;
      doubt += length * 10;
      total += doubt
    }
  
    if (obj.wiki) {
      const length = Object.keys(obj.wiki).length;
      wiki += length * 5;
      total += wiki
    }
    if (obj.explanation) {
      const length = Object.keys(obj.explanation).length;
      explanation += length * 30;
      total += explanation
    }
    if (obj.revision) {
      const length = Object.keys(obj.revision).length;
      revision += length * 10;
      total += revision
    }
  
    return {total, wiki, explanation, revision, doubt};
  };
  