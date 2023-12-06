const mahasiswaNim = 1102020; // Replace with the actual nim

// PUT Request to update data
const updatedData = {
  nama: 'haidar',
  gender: 'L',
  prodi: 'TE',
  alamat: 'Jl. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log('Update Result:', data))
  .catch(error => console.error('Update Error:', error));