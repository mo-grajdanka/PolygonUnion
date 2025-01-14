function unionPolygons() {
    const input = document.getElementById('inputPolygons').value;

    try {
        // Удаляем пробелы и переносы строк
        const cleanedInput = input
            .replace(/\s+/g, '') // Убираем все пробелы и переводы строк
            .replace(/]\s*\[/g, '],['); // Исправляем формат между полигонами

        // Преобразуем строку в массив
        const polygons = JSON.parse(`[${cleanedInput}]`);

        // Объединяем полигоны в плоский массив
        const unifiedPolygons = polygons.flat();

        // Преобразуем результат в строку JSON в одну строчку
        const result = JSON.stringify(unifiedPolygons);

        // Выводим результат
        document.getElementById('outputPolygons').innerHTML = '<p>' + result + '</p>';
    } catch (error) {
        document.getElementById('outputPolygons').innerHTML = '<p style="color: red;">Неверный формат ввода. Проверьте ваши полигоны.</p>';
    }
}

function copyResult() {
    const output = document.getElementById('outputPolygons').innerText;
    navigator.clipboard.writeText(output).then(() => {
        alert('Результат скопирован в буфер обмена!');
    });
}
