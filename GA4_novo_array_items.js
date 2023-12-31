  // No GTM, crie uma nova variável de JavaScript personalizada. 
  // Cole o código abaixo e salve (ou modifique de acordo com sua necessidade).
  // Adicione esta variável em todas tags do GA em que há necessidade da variável "items".


function() { 
  // Obtenha o valor da variável ecommerce.items.
  var items = {{ecommerce.items}}; // Substitua {{ecommece.items}} pelo nome da sua variável de items no GTM.

  // Crie um novo array para armazenar os itens modificados
  var items_new = [];

  // Itere sobre os itens do array
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    // Verifique se o item_name contém um traço "-"
    if (item.item_name.indexOf("-") !== -1) {
      var parts = item.item_name.split("-");
      var new_item = {
        item_id: item.item_id,
        item_name: parts[0].trim(),
        item_variant: parts[1].trim(),
        item_brand: item.item_brand,
        price: item.price,
        quantity: item.quantity,
        item_category: item.item_category
      };
      items_new.push(new_item);
    } else {
      // Se não houver traço no item_name, mantenha o item inalterado
      items_new.push(item);
    }
  }

  // Retorne o novo array com as modificações como resultado da variável personalizada
  return items_new;
}
