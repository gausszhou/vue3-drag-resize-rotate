import axios from "./axios";

let notesUrl = "./markdown/";

export default {
  getMarkdown: params => axios.get(notesUrl + params + ".md")
};
