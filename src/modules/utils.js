export const ConvertData2Success = data => {
  const newData = data.reduce((obj, res, index) => {
    return {
      ...obj,
      [res._id]: res,
    };
  }, {});

  return newData;
};
// nhận data xong chuyển nguyên mảng thành objects
