    const form = document.getElementById('contactForm');
    const timeEl = document.getElementById('time');
    const prevNama = document.getElementById('prevNama');
    const prevTgl = document.getElementById('prevTgl');
    const prevJK = document.getElementById('prevJK');
    const prevPesan = document.getElementById('prevPesan');
    const modal = document.getElementById('modalNama');
    const inputUser = document.getElementById('inputNamaUser');

    modal.showModal();

    function simpanNamaUser() {
      const namaUser = inputUser.value.trim();

    if (!namaUser) {
      inputUser.classList.add('input-error');
      inputUser.focus();
      document.getElementById('mintaInfo').textContent = 'Im sorry, we didnt catch your name...';
      return;
    }
    document.getElementById('namaPengunjung').textContent = `Hello, ${namaUser}!`;
    document.getElementById('modalNama').close();
  }

    function updateTime() {
      timeEl.textContent = new Date().toString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    function inputDataMassageUs() {
      const nama = document.getElementById('nama').value;
      console.log(nama);
      const tgl = document.getElementById('tgl').value;
      const jk = document.querySelector('input[name="jk"]:checked');
      const pesan = document.getElementById('pesan').value;
    
      prevNama.textContent = nama || '-';
      prevTgl.textContent = tgl || '-';
      prevPesan.textContent = pesan || '-';
      prevJK.textContent = jk ? jk.value : '-';
    }
