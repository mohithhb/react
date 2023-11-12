export const BASE_URL = "https://ante-media.netlify.app/";

function replaceUrl(imageUrl) {
  imageUrl = imageUrl.replace(/\\/g, "/");
  imageUrl = imageUrl.replace(/\//, "//");
  return imageUrl;
}

export const miscUrl = "https://ante-api-project.onrender.com/api/miscs";

export function miscImageCorrection(data) {
  return data.map((newData) => {
    return {
      ...newData,
      aboutBannerImageUrl: replaceUrl(newData.aboutBannerImageUrl),
      blogListBannerImageUrl: replaceUrl(newData.blogListBannerImageUrl),
      serviceListBannerImageUrl: replaceUrl(newData.serviceListBannerImageUrl),
      contactUsBannerImageUrl: replaceUrl(newData.contactUsBannerImageUrl),
    };
  });
}

export function imageCorrection(data) {
  if (data instanceof Array) {
    return data.map((newData) => {
      let imageUrl = newData.imageUrl;
      return { ...newData, imageUrl: replaceUrl(imageUrl) };
    });
  } else {
    let imageUrl = data.imageUrl;
    return { ...data, imageUrl: replaceUrl(imageUrl) };
  }
}
