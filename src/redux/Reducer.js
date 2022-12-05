const initialState = {
  users: [
    {
      name: "Disha",
      pic: "https://i.pinimg.com/originals/7b/c8/b3/7bc8b3e4f389a7c0c634a3c373990349.jpg",
    },
    {
      name: "Tiger",
      pic: "https://yt3.ggpht.com/ytc/AMLnZu8EFNtIG3ktIkbDfQ2zK-v-VRaPDA0wA9n0AQs=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Mouny",
      pic: "https://i.pinimg.com/236x/9c/b7/c5/9cb7c537636dbb68c4a5f0d714b67850.jpg",
    }
  ],
  chat: JSON.parse(localStorage.getItem("chatdata"))||[],
};
export const Reducer = (state = initialState, action) => {
  if (action.type === "SEND") {
    localStorage.setItem("chatdata",JSON.stringify([...state.chat, action.payload]))
    return {
      ...state,
      chat: [...state.chat, action.payload],
    };
  }
  return { ...state };
};
