const lista = document.querySelector('#lista');

(async () => {
    try {
        const { data } = await axios.get('/api/list');
        data.forEach(player => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                        ${player.name}
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${player.partidasGanadas}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${player.partidasPerdidas}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${player.Zapatos}</div>
                </td>
            `;
            lista.appendChild(tr);
        });
    } catch (error) {
        console.error(error);
    }
})();
