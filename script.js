document.getElementById('shape').addEventListener('change', function(event) {
  const shape = event.target.value;
  const rectangularInputs = document.getElementById('rectangularInputs');
  const roundInputs = document.getElementById('roundInputs');
  
  if (shape === 'rectangular') {
    rectangularInputs.style.display = 'block';
    roundInputs.style.display = 'none';
  } else {
    rectangularInputs.style.display = 'none';
    roundInputs.style.display = 'block';
  }
});

document.getElementById('ingredientForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const shape = document.getElementById('shape').value;
  let areaNew;

  // Área da assadeira original (retangular 40 x 30 cm)
  const originalArea = 40 * 30;

  // Se for retangular
  if (shape === 'rectangular') {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    areaNew = width * height;
  }

  // Se for redonda
  if (shape === 'round') {
    const diameter = document.getElementById('diameter').value;
    const radius = diameter / 2;
    areaNew = Math.PI * Math.pow(radius, 2);  // Área do círculo: π * r^2
  }

  // Fator de ajuste baseado na área
  const factor = areaNew / originalArea;

  // Receita original
  const ingredients = {
    sugar: 396,
    butter: 396,
    eggs: 350,
    flour: 468,
    chocolate: 792
  };

  // Atualizando os valores de acordo com o fator de ajuste
  document.getElementById('sugar').textContent = `Açúcar: ${(ingredients.sugar * factor).toFixed(2)} g`;
  document.getElementById('butter').textContent = `Margarina: ${(ingredients.butter * factor).toFixed(2)} g`;
  document.getElementById('eggs').textContent = `Ovos: ${(ingredients.eggs * factor).toFixed(2)} g`;
  document.getElementById('flour').textContent = `Trigo: ${(ingredients.flour * factor).toFixed(2)} g`;
  document.getElementById('chocolate').textContent = `Achocolatado: ${(ingredients.chocolate * factor).toFixed(2)} g`;
});