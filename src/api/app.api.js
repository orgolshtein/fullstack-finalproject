export async function fetchSliderData() {
  const slider_data = await (await fetch("https://api.npoint.io/2faed63973ec7f79740a")).json();
  return slider_data;
}

export async function fetchGameData() {
    const games_data = await (await fetch("https://api.npoint.io/d51778e00788e90bb674")).json();
    return games_data;
  }