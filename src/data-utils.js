export function makeColumns(arr) {
  const data = Object.data(arr[0]);

  const columns = data.map(item => {
    return {
      title: item.split('_')
        .map(word => word.slice(1))
        .join(''),
      field: item
    };
  });

  return columns;
}