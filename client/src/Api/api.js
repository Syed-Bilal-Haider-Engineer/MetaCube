import axios from "axios";
import { URL } from "../URL";
import cogoToast from "cogo-toast";
// -------------> Register <----------------
const makeToast = (content, type = "", hideAfter = 1, heading = "") => {
  const options = {
    position: "top-right",
    heading,
    hideAfter,
    bar: { size: "5px" },
  };
  if (type == "success") cogoToast.success(content, options);
  else if (type == "error") cogoToast.error(content, options);
  else if (type == "warn") {
    cogoToast.warn(content, options);
  } else if (type == "info") {
    cogoToast.info(content, options);
  } else {
    cogoToast.info(content, options);
  }
};
export const registerUser = async (value) => {
  try {
    let { data } = await axios.post(`${URL}/register`, value);
    return data;
  } catch (err) {
    console.log("Error While Calling Add user  API", err);
  }
};
// ---------------> Login <-----------------
export const loginUser = async (value) => {
  try {
    const { data } = await axios.post(`${URL}/login`, value);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};
// ------------------------like List -----------------
export const likeListAPi = async (value) => {
  try {
    const { data } = await axios.post(`${URL}/likes`, value);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};

// ------------------------get like List -----------------
export const likeListGetAPi = async (value) => {
  try {
    const { data } = await axios.get(`${URL}/likes/${value}`);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};

// ------------------------favorites List -----------------
export const favoritesListAPi = async (value) => {
  try {
    const { data } = await axios.post(`${URL}/favorites`, value);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};

// ------------------------get favorites List -----------------
export const favoritesListGetApi = async (value) => {
  try {
    const { data } = await axios.get(`${URL}/favorites/${value}`);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};

// ------------------------post route for views -----------------
export const handleViewsApi = async (value) => {
  try {
    const { data } = await axios.post(`${URL}/views`, value);
    return data;
  } catch (err) {
    console.log("user Login Error", err);
  }
};
// ------------------------get route for views -----------------
export const handleGetViewsApi = async (value) => {
  try {
    const { data } = await axios.get(`${URL}/views/${value}`);
    return data;
  } catch (err) {
    console.log("get view api Error", err);
  }
};
// ------------------------post route for votes -----------------
export const handleVoteApi = async (value) => {
  try {
    const { data } = await axios.post(`${URL}/vote/`, value);
    return data;
  } catch (err) {
    console.log("get view api Error", err);
  }
};
export const handleGetVoteApi = async (value) => {
  try {
    const { data } = await axios.get(`${URL}/vote/${value}`);
    return data;
  } catch (err) {
    console.log("get vote api Error", err);
  }
};
// --------------> Add cells <--------------
export const addCell = async (value, setBLoading) => {
  try {
    // setBLoading(true);
    console.log(value, "value====>");
    const { data } = await axios.post(`${URL}/buyCell`, value);
    return data;
  } catch (err) {
    return err;
  }
};

//--------------->pay with wallet <------------------------
export const payWithWallet = async (
  HashData,
  isError,
  ceilDetail,
  amount,
  setBLoading
) => {
  console.log("ceilDetail pay with wallet:", ceilDetail, "data", HashData);
  try {
    setBLoading(true);
    if (!isError) {
      const nftDetail = {
        snapshot: ceilDetail.snapshot,
        user: ceilDetail.user,
        lang: ceilDetail.lang,
        long: ceilDetail.long,
        tilePrice: ceilDetail.tilePrice,
        areaLength: ceilDetail.totalceil.length,
        totalceil: JSON.stringify(ceilDetail.totalceil),
        address: ceilDetail.address,
        token: HashData.hash,
        mapaddress: ceilDetail.mapaddress,
        nftAmount: amount,

        type: "wallet",
      };
      const { data } = await axios.post(`${URL}/buyCellbyWallet`, nftDetail);
      if (data.status === "ok") {
        makeToast(
          "Please wait for transaction confirmation. you can check NFT from your profile!",
          "success",
          3,
          "Success"
        );
        setTimeout(() => {
          window.location.reload();
        }, 5000);

        setBLoading(false);
      } else {
        if (data?.status === "failed") {
          makeToast(
            data.message.reason || data.message,
            "error",
            3,
            "Failed"
          );
        } else {
          makeToast(data.message, "error", 3, "Failed");
        }
      }
    }
  } catch (err) {
    makeToast(err.message, "error", 3, "Failed");
    setBLoading(false);
  }
};

//--------------->pay with Admin <------------------------
export const payWithAdmin = async (
  HashData,
  isError,
  ceilDetail,
  amount,
  setBLoading,
  specifcAddress
) => {
  try {
    setBLoading(true);
    if (!isError) {
      const nftDetail = {
        snapshot: ceilDetail.snapshot,
        user: ceilDetail.user,
        lang: ceilDetail.lang,
        long: ceilDetail.long,
        tilePrice: ceilDetail.tilePrice,
        areaLength: ceilDetail.totalceil.length,
        totalceil: JSON.stringify(ceilDetail.totalceil),
        address: specifcAddress,
        token: HashData?.hash,
        mapaddress: ceilDetail.mapaddress,
        nftAmount: amount,
        type: "admin",
      };
      const { data } = await axios.post(`${URL}/mintNftByAdmin`, nftDetail);
      if (data) {
        makeToast(
          "Please wait for transaction confirmation. you can check NFT from your profile!",
          "success",
          3,
          "Success"
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      setBLoading(false);
    }
  } catch (err) {
    makeToast(err.message, "error", 3, "Failed");
    setBLoading(false);
  }
};

// --------------> Get git Cells <----------------
export const getBuyCells = async () => {
  try {
    const { data } = await axios.get(`${URL}/getBuyCells`);
    return data;
  } catch (err) {
    console.log("Error While Calling getBuycells API", err);
  }
};
export const getuserNfts = async (address, page = 1) => {
  try {
    let limit = 4;
    const { data } = await axios.get(
      `${URL}/useNfts?page=${page}&limit=${limit}&address=${address}`
    );
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
// --------------> promo post  <----------------
export const promoApi = async (values) => {
  try {
    const { data } = await axios.post(`${URL}/promo`, values);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
// -------------->get  promo data  <----------------
export const getPromoData = async (values) => {
  try {
    const { data } = await axios.get(`${URL}/promo`);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
export const deletePromoData = async (values) => {
  try {
    const { data } = await axios.delete(`${URL}/promo/${values}`);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
export const getSinglePromo = async (values) => {
  try {
    const data = await axios.get(`${URL}/promo/${values}`);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
export const updateNfts = async (nftupdate) => {
  try {
    const { data } = await axios.put(`${URL}/updateNFT`, nftupdate);
    return data;
  } catch (error) {
    console.log("erro update nfts", error);
  }
};
export const getNftdetails = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/getnftsdetails/${id}`);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};
export const fetchAlluser = async (page = 1) => {
  try {
    let limit = 3;
    const { data } = await axios.get(
      `${URL}/alluser?page=${page}&limit=${limit}`
    );
    console.log("data users:", data);
    return data;
  } catch (error) {
    console.log("erro all users", error);
  }
};
export const userfavoriteNfts = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/favouritNfts/${id}`);
    return data;
  } catch (error) {
    console.log("favourite Nfts all users", error);
  }
};

// --------------> promo post  <----------------
export const followers = async (values) => {
  try {
    const { data } = await axios.post(`${URL}/followers`, values);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};

export const checkuser = async (address) => {
  try {
    const { data } = await axios.get(`${URL}/checkuser/${address}`);
    return data;
  } catch (error) {
    console.log("erro user details", error);
  }
};

//..........get user folow Nfts..........
export const getUserFollowsNfts = async (userNFTs, page) => {
  try {
    let limit = 5;
    const { data } = await axios.post(`${URL}/fetchFollowNfts?`, { userNFTs });
    return data;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};


export const allNftsOfUser = async (values) => {
  try {
    const response = await axios.get(`${URL}/allNftsOnScroll/?id=${values.id}&page=${values.page}`);
    return response;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};

export const favoriteNftOfUser = async (values) => {
  try {
    // 
    const response = await axios.get(`${URL}/favoriteNftOnScroll/?id=${values.id}&page=${values.page}`);
    return response;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};

export const followNftOfUser = async (values) => {
  try {
    // 
    const response = await axios.get(`${URL}/followNftList/?id=${values.id}&page=${values.page}`);
    return response;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};

export const failedNftsUser = async (values) => {
  try {
    const response = await axios.get(`${URL}/failedNfts/?id=${values.id}&page=${values.page}`);
    return response;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};


export const allNftForAdmin = async (values) => {
  try {
    const response = await axios.get(`${URL}/allNftForAdmin/?id=${values.id}&page=${values.page}`);
    return response;
  } catch (error) {
    console.log("erro getUserFollowsNfts details", error);
  }
};