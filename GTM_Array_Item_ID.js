function getItemIds() {
  // Definindo uma função chamada getItemIds.
  
  var items = {{ecommerce_items}}; //substitua pelo nome da sua variável
  // Obtém a variável "ecommerce_items" do ambiente do Google Tag Manager e armazena na variável "items".
  // Certifique-se de que a variável "ecommerce_items" esteja corretamente configurada no GTM para capturar a matriz de itens.
  
  var itemIds = [];
  // Inicializa um array vazio chamado "itemIds" para armazenar os IDs dos itens.

  for (var i in items) {
    // Inicia um loop "for ... in" para percorrer os índices (ou chaves) da matriz "items".

    itemIds.push(items[i]['item_id']);
    // Para cada índice, obtém o valor da propriedade 'item_id' do objeto atual na matriz "items".
    // E adiciona esse valor ao array "itemIds".
  }
  
  return itemIds;
  // Retorna o array "itemIds" que contém os IDs dos itens.
  // Se quiser retornar uma string use "return itemIds.join(',')"
}
