import Datauri from "datauri";
import path from "path";

const getDataUri = (file) => {
  const dUri = new Datauri();
  const extName = path.extname(file.originalname).toString();
  return dUri.format(extName, file.buffer);
};

export default getDataUri;
