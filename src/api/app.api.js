const sliderDataUrl = "https://api.npoint.io/2faed63973ec7f79740a";
const gameDataUrl = "https://api.npoint.io/d51778e00788e90bb674";
export const assetUrl = "https://staticunagibet.netlify.app";

export async function riseAndShine() {
  const urls = ["https://histl.onrender.com", "https://redrossent.onrender.com"];
  urls.forEach(async (url, i)=>{
    console.log(`Called server ${i+1}`)
    await fetch(url);
  })
};

export async function fetchSliderData() {
  const slider_data = await (await fetch(sliderDataUrl)).json();
  return slider_data;
};

export async function fetchGameData() {
  const game_data = await (await fetch(gameDataUrl)).json();
  return game_data;
};
