export const renameFile = (req, file, callback) => {
  const name = file?.originalname.split('.')[0];
  const fileName = file?.originalname;
  const randNum = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

  console.log(`${name}-${randNum}${fileName}`);
  callback(null, `${name}-${randNum}${fileName}`);
};
