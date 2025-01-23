document.addEventListener('DOMContentLoaded', () => {
    const businesses = [
        { name: 'Imperio', location: 'Galigniana Nº1867', open: '08:00', close: '20:00' },
        { name: 'Panadería El Buen Pan', location: 'Avenida 456', open: '07:00', close: '19:00' },
        // Add more businesses as needed
    ];

    const businessList = document.getElementById('business-list');

    businesses.forEach(business => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${business.name}</td>
            <td>${business.location}</td>
            <td>${business.open}</td>
            <td>${business.close}</td>
        `;
        businessList.appendChild(row);
    });
});
