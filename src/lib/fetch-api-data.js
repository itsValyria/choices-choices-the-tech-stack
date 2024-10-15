import fetchJson from './fetch-json';

const baseURL = 'https://fdnd-agency.directus.app/items/';
const webinarUrl = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
const contouringUrl = `${baseURL}avl_contourings?fields=*.*.*`;

export async function fetchData() {
  const [webinarsResponse, contouringsResponse] = await Promise.all([
    fetchJson(webinarUrl),
    fetchJson(contouringUrl),
  ]);

  return {
    webinars: webinarsResponse.data || [],
    contourings: contouringsResponse.data || [],
  };
}