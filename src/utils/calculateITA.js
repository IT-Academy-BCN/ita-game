export const calculateITA = (obj) => {
    let total = 0;
  
    let wiki = 0;
    let explanation = 0;
    let revision = 0;
    let doubt = 0;
  
    if (obj.doubt) {
      const length = Object.keys(obj.doubt).length;
      total += length * 10;
      doubt += total
    }
  
    if (obj.wiki) {
      const length = Object.keys(obj.wiki).length;
      total += length * 5;
      wiki += total
    }
    if (obj.explanation) {
      const length = Object.keys(obj.explanation).length;
      total += length * 10;
      explanation += total
    }
    if (obj.revision) {
      const length = Object.keys(obj.revision).length;
      total += length * 10;
      revision += total
    }
  
    return {total, wiki, explanation, revision, doubt};
  };
  