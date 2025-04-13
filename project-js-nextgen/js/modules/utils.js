import { getData, saveData } from './data.js';

const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export const renderDashboard = (root) => {
  const data = getData();
  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard';

  wrapper.innerHTML = `
    <form id="input-form" class="card" style="grid-column: span 2;">
      <h3 id="form-title">Tambah Jadwal</h3>
      <input type="text" id="matkul" placeholder="Nama Matkul / Tugas" required />
      <input type="date" id="tanggal" required />
      <select id="kategori">
        <option value="kuliah">Kuliah</option>
        <option value="pengganti">Kelas Pengganti</option>
        <option value="uts">UTS</option>
        <option value="uas">UAS</option>
        <option value="tugas">Tugas</option>
      </select>
      <input type="hidden" id="edit-index" />
      <input type="hidden" id="edit-kategori" />
      <button type="submit">Save</button>
      <button type="button" id="cancel-edit" style="display:none;">Cancel</button>
    </form>
    <div class="left-panel">
      ${renderScheduleSection('Jadwal Kuliah', groupByDay(data.kuliah), 'kuliah', true)}
      ${renderScheduleSection('Kelas Pengganti', data.pengganti, 'pengganti')}
      ${renderScheduleSection('Jadwal UTS', data.uts, 'uts')}
      ${renderScheduleSection('Jadwal UAS', data.uas, 'uas')}
      ${renderScheduleSection('Daftar Tugas', data.tugas, 'tugas')}
    </div>
    <div class="right-panel">
      <div class="card calendar">
        <h3>${new Date().toDateString()}</h3>
        <p>Pilih tanggal pada form input di atas</p>
      </div>
      <div class="card">
        <h3>Kelas Berikutnya</h3>
        ${renderNextClass([...data.kuliah, ...data.pengganti])}
      </div>
    </div>
  `;

  root.innerHTML = '';
  root.appendChild(wrapper);

  // Submit & edit
  document.getElementById('input-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const kategori = document.getElementById('kategori').value;
    const nama = document.getElementById('matkul').value;
    const tanggal = document.getElementById('tanggal').value;
    const index = document.getElementById('edit-index').value;
    const oldKategori = document.getElementById('edit-kategori').value;

    if (index) {
      data[oldKategori][index] = { nama, tanggal };
    } else {
      data[kategori].push({ nama, tanggal });
    }
    saveData(data);
    renderDashboard(root);
  });

  document.getElementById('cancel-edit').addEventListener('click', () => renderDashboard(root));
};

const groupByDay = (data) => {
  const grouped = Array(7).fill().map(() => []);
  data.forEach(item => {
    const day = new Date(item.tanggal).getDay();
    grouped[day].push(item);
  });
  return grouped;
};

const renderScheduleSection = (title, list, kategori, isGrouped = false) => {
  let content = '';
  if (isGrouped) {
    content = days.map((day, idx) => {
      const items = list[idx].map((i, iidx) => `
        <tr>
          <td>${i.nama}</td>
          <td>${i.tanggal}</td>
          <td>
            <button onclick="window.editItem('${kategori}', '${idx}', '${i.nama}', '${i.tanggal}')">✏️</button>
            <button onclick="window.deleteItem('${kategori}', '${idx}', '${i.nama}', '${i.tanggal}')">🗑️</button>
          </td>
        </tr>
      `).join('');
      return `<tr><th colspan="3"><b>${day}</b></th></tr>${items}`;
    }).join('');
  } else {
    content = list.map((i, idx) => `
      <tr>
        <td>${i.nama}</td>
        <td>${i.tanggal}</td>
        <td>
          <button onclick="window.editItem('${kategori}', ${idx}, '${i.nama}', '${i.tanggal}')">✏️</button>
          <button onclick="window.deleteItem('${kategori}', ${idx})">🗑️</button>
        </td>
      </tr>`).join('');
  }

  return `
    <div class="card">
      <h3>${title}</h3>
      <table><tbody>${content}</tbody></table>
    </div>
  `;
};

const renderNextClass = (list) => {
  const sorted = list
    .filter(i => new Date(i.tanggal) >= new Date())
    .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    .slice(0, 3)
    .map(i => `<tr><td>${i.nama}</td><td>${i.tanggal}</td></tr>`).join('');
  return `<table><tbody>${sorted}</tbody></table>`;
};

// Global helpers
window.editItem = (kategori, idx, nama, tanggal) => {
  const form = document.getElementById('input-form');
  form.querySelector('#matkul').value = nama;
  form.querySelector('#tanggal').value = tanggal;
  form.querySelector('#edit-index').value = idx;
  form.querySelector('#edit-kategori').value = kategori;
  form.querySelector('#form-title').innerText = 'Edit Jadwal';
  document.getElementById('cancel-edit').style.display = 'inline-block';
};

window.deleteItem = (kategori, idx) => {
  const data = getData();
  if (kategori === 'kuliah') {
    const flat = data.kuliah.flatMap((d, i) => {
      const day = new Date(d.tanggal).getDay();
      return { ...d, _day: day };
    });
    const targetDay = flat[idx]._day;
    const grouped = groupByDay(data.kuliah);
    grouped[targetDay].splice(idx, 1);
    data.kuliah = grouped.flat();
  } else {
    data[kategori].splice(idx, 1);
  }
  saveData(data);
  renderDashboard(document.getElementById('app'));
};
