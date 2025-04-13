const API_URL = import.meta.env.VITE_APP_SCRIPT_URL

export async function postToSheet(action, sheetName, data = {}, id = null) {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action, sheetName, data, id }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  }
  
  export async function getFromSheet(sheetName) {
    const res = await fetch(`${API_URL}?sheetName=${sheetName}`);
    return res.json();
  }