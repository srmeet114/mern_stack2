import axios from "axios";

const URL = "http://localhost:5000";

axios.interceptors.request.use(
    (config) => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            config.headers['Authorization'] = `Bearer ${jwt}`;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// post signup data
// const res = await axios({

export const postSignUpData = async (
  data,
  reset,
  notify,
  notifyerr,
  navigate
) => {
  try {
    const res = await axios.post(`${URL}/signup`, data);
    notify(res.data.message);
    reset();
    navigate("/signin");
    //     method: 'POST',
    //     url: `${URL}/signup`,
    //     data,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer YOUR_TOKEN',
    //     },
    //   });
  } catch (err) {
    notifyerr(err.response.data.error);
    console.error(err);
  }
};

// post signup data

export const postSignInData = async (
  data,
  reset,
  notify,
  notifyerr,
  navigate,
  setUserLogin
) => {
  try {
    const res = await axios.post(`${URL}/signin`, data);
    notify(res.data.message);
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    reset();
    setUserLogin(true)
    navigate("/");
  } catch (err) {
    notifyerr(err.response.data.error);
    console.error(err);
  }
};

// post post Share

export const postShareapi = async (body, url, setBody, setImage, setUrl,output,notify,notifyerr,navigate) => {
  try {
    const res = await axios.post(`${URL}/createPost`,{ body, pic: url });
    notify(res.data.message);
    setBody("");
    setImage(null);
    setUrl("");
    output.src = "https://png.pngtree.com/png-clipart/20190920/original/pngtree-file-upload-icon-png-image_4646955.jpg";
    navigate("/");
  } catch (err) {
    notifyerr(err.response.data.error);
  }
};

// GetPost Share

export const GetPosts = async (setGpostsdata) => {
  try {
    const res = await axios.get(`${URL}/allposts`);
    console.log(res.data);
    setGpostsdata(res.data.posts);
  } catch (err) {
    console.error(err);
  }
}

// GetProfie Data

export const GetProfie = async (setGetMypost) =>{
  try{
    const res = await axios.get(`${URL}/mypost`);
    setGetMypost(res.data);
    console.log("🚀 ~ GetProfie ~ res:", res)
  } catch (err) {
    console.log(err);
  }
}

// post like
export const likePost = (id,Gpostsdata,setGpostsdata) => {
  try {
    axios.put(`${URL}/like`,{ postId: id }).then((res) => {
      const result = res.data; 
      const newdata= Gpostsdata.map((posts)=>{
        if(posts._id == result._id){
          return result;
        }else{
          return posts;
        }
      })
      setGpostsdata(newdata);
      }).catch((err) => {
      console.error(err.response?.data || err.message);
    });
  } catch (err) {
    console.log(err);
  }
}

// post unlike
export const unlikePost = (id,Gpostsdata,setGpostsdata) => {
  try {
    axios.put(`${URL}/unlike`,{ postId: id }).then((res) => {
      const result = res.data; 
      const newdata= Gpostsdata.map((posts)=>{
        if(posts._id == result._id){
          return result;
        }else{
          return posts;
        }
      })
      setGpostsdata(newdata);
      }).catch((err) => {
      console.error(err.response?.data || err.message);
    });
  } catch (err) {
    console.log(err);
  }
}

// post comment
export const postComment = async (text,id,setcomment,Gpostsdata,setGpostsdata,notify,notifyerr) =>{
  try {
      await axios.put(`${URL}/comment`,{ text:text,postId: id }).then((res) => {
        notify("Commented Send Successfully");
        setcomment("")
        const result = res.data; 
      const newdata= Gpostsdata.map((posts)=>{
        if(posts._id == result._id){
          return result;
        }else{
          return posts;
        }
      })
      setGpostsdata(newdata);
      }).catch((err) => {
      console.error(err.response?.data || err.message);
      notifyerr(err.response?.data || err.message)
    });
  } catch (err) {
    console.log(err);
  }
}

// post delete
export const DeletePost = async (_id,notify,notifyerr,navigate,ClosetComment) =>{
  try {
    const res = await axios.delete(`${URL}/deletePost/${_id}`);
    notify(res.data.message);
    console.log(res.data);
    ClosetComment();
    navigate("/")
  } catch (err) {
    console.log(err);
    notifyerr(err.response.data.error);
    ClosetComment()
  }
}