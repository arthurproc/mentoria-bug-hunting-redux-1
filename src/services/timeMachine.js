const getClosestSnapshot = async (timestamp, url) => {
  try {
    const fetchResult = await fetch(`https://archive.org/wayback/available?url=${url}&timestamp=${timestamp}`);
    const apiResult = await fetchResult.json();
    return apiResult;
  } catch (error) {
    return {
      error: true,
      message: error.message
      || 'Não foi possível encontrar resultados para a sua pesquisa',
    };
  }
};

export default getClosestSnapshot;
