export async function fetchSliderData() {
  const data_url = "https://api.npoint.io/2faed63973ec7f79740a";
  const slider_data = await (await fetch(data_url)).json();
  return slider_data;
}

export async function fetchGameData() {
    const data_url = "https://api.npoint.io/d51778e00788e90bb674";
    const games_data = await (await fetch(data_url)).json();
    return games_data;
  }