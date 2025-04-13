// Ambil data dari localStorage
export const getData = () => {
  const raw = localStorage.getItem('dashboardData');
  return raw ? JSON.parse(raw) : {
    kuliah: [],
    pengganti: [],
    uts: [],
    uas: [],
    tugas: []
  };
};

// Simpan data ke localStorage
export const saveData = (data) => {
  localStorage.setItem('dashboardData', JSON.stringify(data));
};
