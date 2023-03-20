import axios from "axios";

export const Get_Local = (key) => {
  return JSON.parse(localStorage.getItem(key)) || false;
};

export const Set_Local = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const Remove_Local = (key) => {
  localStorage.removeItem(key);
};

// Get Profile details
export const Get_Profile_data = async (token) => {
  return await axios.get("https://drab-cyan-armadillo-slip.cyclic.app/user", {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};

// update Profile Details

export const Update_profile = async (token, data) => {
  return await axios.patch("https://drab-cyan-armadillo-slip.cyclic.app/user", data, {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};

//Create a Post

export const Create_Post = async (token, data) => {
  return await axios.post("https://drab-cyan-armadillo-slip.cyclic.app/post", data, {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};


// Get frineds suggestions

export const Get_Suggestion = async (token) => {
  return await axios.get("https://drab-cyan-armadillo-slip.cyclic.app/user/findFrineds", {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};

// Get Posts

export const Get_Posts = async (token) => {
   return await axios.get("https://drab-cyan-armadillo-slip.cyclic.app/post",{
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};

// Like a post

export const Like_Posts = async (token,postid,likes) => {
   return await axios.patch("https://drab-cyan-armadillo-slip.cyclic.app/post/"+postid,likes,{
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};

// Comment on post

export const Comment_Posts = async (token, postid, comment) => {
  return await axios.post("https://drab-cyan-armadillo-slip.cyclic.app/comment/" + postid, comment, {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};


// Get cooment

export const Get_Comment = async (token, postid) => {
  return await axios.get("https://drab-cyan-armadillo-slip.cyclic.app/comment/" + postid, {
    headers: {
      Auth: `Barear ${token}`,
    },
  });
};