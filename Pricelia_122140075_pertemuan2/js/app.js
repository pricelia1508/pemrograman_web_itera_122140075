import { getData, saveData } from './modules/data.js';
import { renderDashboard } from './modules/utils.js';

export const initApp = () => {
  const app = document.getElementById('app');
  app.innerHTML = `<h1>Personal Dashboard</h1>`;
  renderDashboard(app);
};
